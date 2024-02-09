const express = require('express');
const router11 = express.Router();
const excel = require('exceljs');

async function getWorkBook(filePath, toExcludeRows, worksheetIndex) {

    const mapColumnIndex = (header) => {
        const columnIndex = {};
        header.eachCell(function (cell, colNumber) { 
            console.log('cell & colNumber ====> ', cell.value, colNumber);
            columnIndex[colNumber] = cell.value;            // use .trim() only if all cell values are STRING. if boolean/integer ---> throws error 
        });
        return columnIndex;
    };

    let workbook = new excel.Workbook();
    workbook = await workbook.xlsx.readFile(`resources23/${filePath}`);
    console.log(Object.keys(workbook));

    const worksheet = workbook.getWorksheet(Number(worksheetIndex));
    const colHeadings = mapColumnIndex(worksheet.getRow(1));            // 1st ROW has headings
    const records = [];
    worksheet.eachRow(function (row, rowNumber) { 
        const rec = { };
        if (toExcludeRows.indexOf(Number(rowNumber)) < 0) { 
            for(let index=1; index<row.values.length; index++) {
                rec[colHeadings[index]] = row.values[index];
            }
            records.push(rec);
        }
    })
    return records;
}

router11.get('/readFile1', async (req, res) => {
    let fileName = req.query.fileName;
    let sheetIndex = Number(req.query.sheetIndex);
    let excludeRows = [1,2,4];                // bellingham, modric rows will be skipped
    let blah1 = await getWorkBook(fileName, excludeRows, sheetIndex);
    res.send(blah1);
})

module.exports = router11;
