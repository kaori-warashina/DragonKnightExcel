var fl      = require('node-filelist');
var files   = [ "/excel" ];     //読み込みたいファイルディレクトリまたはパス(配列なので複数指定可)
var option  = { "ext" : "csv" };   //読み込みたいファイルの拡張子(指定がない場合は全てのファイルを読み込みます)

fl.read(files, option , function (results){
    for(var i = 0; i < results.length; i++){
      console.log(results[i].path);
    }
});

var fs = require('fs');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
 
//end_parsed will be emitted once parsing finished 
converter.on("end_parsed", function (jsonArray) {
	fs.writeFile( "master.json" , JSON.stringify(jsonArray, null, '    '));
	console.log(jsonArray); //here is your result jsonarray 
});

//read from file 
require("fs").createReadStream( "character.csv" ).pipe(converter);