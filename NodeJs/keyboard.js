exports.onReadable=function(callback){
	process.stdin.on('readable',function(){
		var chunck = process.stdin.read();
		if(chunck)callback(chunck.toString().charAt(0)) ;
	});
}