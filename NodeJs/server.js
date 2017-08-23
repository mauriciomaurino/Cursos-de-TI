var net = require('net');
var connections  = [];
var broadcast = function(message,origin){
	var mess= message.toString();
	connections.forEach(function(connection){
		if(connection===origin){
			console.log("mensagem da origem é: "+message);
			
			if(mess.indexOf('//help//')===0){
				//console.log(mess);
				connection.write(mess);
			}
			return;
		};
		if(mess.indexOf('//help//')!=0){
			connection.write(message);
		}
	});
};
net.createServer(function(connection){
	connections.push(connection);
	connection.write("Servidor ativo!\n");
	connection.on('data',function(message){
		var command = message.toString();
		if(command.indexOf('/nickname')===0){
			var nickname = command.replace('/nickname ' , '');
			broadcast(connection.nickname+' agora é '+nickname);
			connection.nickname=nickname;
			//console.log(connection.nickname);
			return;
		}
		if(command.indexOf('//nickname')===0){
			var nickname = command.replace('//nickname ' , '');
			connection.nickname=nickname;

			broadcast(connection.nickname+' entrou... ',connection);
			
			//console.log(connection.nickname);
			return;
		}
		if(command.indexOf('//snickname')===0){
			var nickname = command.replace('//snickname ' , 'Novo usuário ');
			connection.nickname=nickname;
			broadcast(connection.nickname+'entrou... ',connection);
			return;
		}
		if(command.indexOf('/help')===0){
			var help = require('./helpServer.js');
			//console.log(help.showOptions());
			broadcast(help.showOptions() ,connection);
			return;
		}
		broadcast(connection.nickname +' > '+ message , connection);
	});
	connection.on('end',function () {
		broadcast(connection.nickname+' saiu...',connection);
		connections.splice(connections.indexOf(connection),1);
	})
}).listen(3000);