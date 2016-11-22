var fs = require('fs');
var iconv = require('iconv-lite');

fs.readdir('.', function(err, files){
    if (err) throw err;
    files.filter(function(file){
        //CSVのみを取得
        return fs.statSync(file).isFile() && /.*\.csv$/.test(file); //絞り込み
    }).forEach(function (file) {
        //S-JISからUTF-8へエンコード
        var fs = require('fs');
        var rs = fs.createReadStream(file)
        .pipe(iconv.decodeStream('SJIS'))
        .pipe(iconv.encodeStream('UTF-8'))
        .pipe(function(record) {
            //JSONに吐き出し
            var fs = require('fs');
            var Converter = require("csvtojson").Converter;
            var converter = new Converter({});
            converter.on("end_parsed", function (jsonArray) {
                fs.writeFile(file +'.json', JSON.stringify(jsonArray, null, '    '));
                console.log(file + "JSON形式で出力されました");
            });
        });
    require("fs").createReadStream( file ).pipe(converter);
    });
});
