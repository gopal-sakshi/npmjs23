const express = require('express');
const router11 = express.Router();
const XLSX = require('xlsx');
const path = require('path');

router11.get('/readFile1', async (req, res) => {
    var workbook = XLSX.readFile(path.join('resources23', 'excelJs222.xlsx'));
    var data23 = XLSX.utils.sheet_to_json(workbook.Sheets['movies23']);
    res.send(data23);
});


async function writeExcel(payload) {
    return new Promise((resolve, reject) => {

        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.json_to_sheet(payload);
        XLSX.utils.book_append_sheet(wb, ws, 'report23');
        
        XLSX.writeFile(wb, `resources23/filename23_${Date.now()}.xlsx`);

        // var out = XLSX.write(wb, {type: 'buffer', bookType: 'xlsx', bookSST: false});
        // resolve(out);
    })
}
router11.post('/writeFile1', async (req, res) => {
    let data24 = req.body;
    // console.log('payload ==========> ', req.body);
    let blahblah11 = await writeExcel(data24);
    res.send(blahblah11);
    // res.send('chuddaaaam');
});

module.exports = router11;