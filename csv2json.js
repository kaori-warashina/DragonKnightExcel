var path = ".";
var fs = require("fs");

// 同期的にディレクトリ内にあるファイル名の一覧を配列で取得
// "." と ".." は含まれない
var files = fs.readdirSync(path);
files.forEach(function(file){
  console.log(file);
});

// get file path 


	// csv to json
	
	// converter require
	var Converter = require("csvtojson").Converter;
	var converter = new Converter({});
	    converter.on("end_parsed", function (jsonArray) {
	        fs.writeFile( "master.json" , JSON.stringify(jsonArray, null, '    '));
	        console.log( "JSON形式で出力されました");
	        console.log( fs );
	    });

	// results csv to createReadStream
	require("fs").createReadStream("character0001.csv").pipe(converter);
	require("fs").createReadStream("character.csv").pipe(converter);
