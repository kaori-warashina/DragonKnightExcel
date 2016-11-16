var fs = require('fs');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
 
    converter.on("end_parsed", function (jsonArray) {
        fs.writeFile('./character.json', JSON.stringify(jsonArray, null, '    '));
        console.log("JSON形式で出力されました");
    });
 
    require("fs").createReadStream("./character.csv").pipe(converter);
 

