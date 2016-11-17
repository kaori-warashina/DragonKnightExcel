var fl      = require('node-filelist');
var files   = [ "./" ];     //読み込みたいファイルディレクトリまたはパス(配列なので複数指定可)
var option  = { "ext" : "csv" };   //読み込みたいファイルの拡張子(指定がない場合は全てのファイルを読み込みます)
var csvFile = 

// get file path 
fl.read(files, option , function (results){
    for(var i = 0; i < results.length; i++){
    	csvFile = results[i].path;


	// csv to json

	// file system  require
	var fs = require('fs');
	// converter require
	var Converter = require("csvtojson").Converter;
	var converter = new Converter({});
	    converter.on("end_parsed", function (jsonArray) {
	        fs.writeFile('./' + csvFile + '.json' , JSON.stringify(jsonArray, null, '    '));
	        console.log( csvFile + "JSON形式で出力されました");
	    });

	// results csv to createReadStream
	require("fs").createReadStream(csvFile).pipe(converter);
			


      console.log(results[i].path);
    }
});

