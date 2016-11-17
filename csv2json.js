var fs = require('fs');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
var path = require('path');


    converter.on("end_parsed", function (jsonArray) {
        fs.writeFile('./master.json', JSON.stringify(jsonArray, null, '    '));
        console.log("JSON形式で出力されました");
    });

var rs = fs.createReadStream('character.csv')
    .pipe(iconv.decodeStream('SJIS'))
    .pipe(iconv.encodeStream('UTF-8'))
    .pipe(csv.parse())
    .pipe(csv.transform(function(record) {console.log(record);}))
    .pipe(converter)
    ;