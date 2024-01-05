const json5 = require('json5');
const fsP = require('fs').promises;

(async () => {
    const text = await fsP.readFile("./packages23/json5_44.txt");
    const config = json5.parse(text);
    console.log(config);
    console.log(config.lineBreaks);
    console.log(config.andIn);
})();