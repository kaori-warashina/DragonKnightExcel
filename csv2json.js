var fs = require('fs');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var fl      = require('node-filelist');
//読み込みたいファイルディレクトリまたはパス(配列なので複数指定可)
var files   = [ "./" ]; 
//読み込みたいファイルの拡張子(指定がない場合は全てのファイルを読み込みます)   
var option  = { "ext" : "csv" };   


    converter.on("end_parsed", function (jsonArray) {
        fs.writeFile('./master.json', JSON.stringify(jsonArray, null, '    '));
        console.log("JSON形式で出力されました");
    });
 
    require("fs").createReadStream(fl.read(files, option , function (results){
    for(var i = 0; i < results.length; i++){
      console.log(results[i].path);
    }});).pipe(converter);
 

