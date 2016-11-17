var fs = require('fs');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});


var csvfile = require('fs');
csvfile.readdir('.', function(err, files){
    if (err) throw err;
    var fileList = [];
    files.filter(function(file){
        return csvfile.statSync(file).isFile() && /.*\.csv$/.test(file); //絞り込み
    }).forEach(function (file) {
        fileList.push(file);
    });
    console.log(fileList);
});

    converter.on("end_parsed", function (jsonArray) {
        fs.writeFile('./master.json', JSON.stringify(jsonArray, null, '    '));
        console.log("JSON形式で出力されました");
    });
 
    require("fs").createReadStream(csvfile).pipe(converter);
    // require("fs").createReadStream("character0001.csv").pipe(converter);

