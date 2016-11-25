var fs = require('fs');
fs.readdir('.', function(err, files){
    if (err) throw err;
    files.filter(function(file){
        //CSVのみを取得
        return fs.statSync(file).isFile() && /.*\.csv$/.test(file);
    }).forEach(function (file) {
        //JSONに吐き出し
        var fs = require('fs');
        var Converter = require("csvtojson").Converter;
        var converter = new Converter({});
        converter.on("end_parsed", function (jsonArray) {
            fs.writeFile('json/'+file +'.json', JSON.stringify(jsonArray, null, '    '));
            console.log(file + "JSON形式で出力されました");
        });
    require("fs").createReadStream( file ).pipe(converter);
    });
});
