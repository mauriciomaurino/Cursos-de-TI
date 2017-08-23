var net  = require('net');
var args = process.argv.slice(2);
var client = net.connect(3000);
var user = ""
client.on('connect',function(){
	//console.log(process.argv.length);
	if(process.argv.length >2) {
		user = args.toString();
		client.write("//nickname "+user);
	    //client.write(user+" entrou!");
	    return;
	}
	
	client.write("//snickname ");
});
client.on('data',function(message){
	var mess = message.toString();
	if(mess.indexOf('//help//')==0){
		
		mess = mess.replace('//help//',"HELP - Digite uma das opções abaixo: \n");
		console.log(mess);
		return;
	}else if(mess.indexOf('/q')==0){
		console.log('Saindo...');
		process.exit();
	}else{
		console.log(message.toString());		
	}

});
client.on('end',function () {
	console.log('O servidor está fora do ar. Saindo...');
	process.exit();
})
process.stdin.on('readable', function(){
	var message = process.stdin.read();
	if(!message)return;
	message=message.toString().substring(0, message.length-1);
	//console.log('teste:' + message);
	if(message.indexOf('/q')===0){
		process.exit();
		return;
	};
	client.write(message);
})
