var path = ".";
var fs = require("fs");

// 同期的にディレクトリ内にあるファイル名の一覧を配列で取得
// "." と ".." は含まれない
var files = fs.readdirSync(path);
files.forEach(function(file){
  console.log(file);
});

// get file path 

//Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
 
//end_parsed will be emitted once parsing finished 
converter.on("end_parsed", function (jsonArray) {
	fs.writeFile( "master.json" , JSON.stringify(jsonArray, null, '    '));
	console.log(jsonArray); //here is your result jsonarray 
});

//read from file 
require("fs").createReadStream( ext:".csv" ).pipe(converter);