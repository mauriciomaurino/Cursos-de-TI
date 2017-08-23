var help  = require('./help');
var keyboard = require('./keyboard');

keyboard.onReadable(function(option){
	//console.log(option.length);
	switch(option){
		case 'a':
		console.log('pid: '+process.pid);
		break;
		case 'b':
		console.log('title: '+process.title);
		break;
		case 'c':
		console.log('arch: '+process.arch);
		break;
		case 'd':
		console.log('platform: '+process.platform);
		case 'e':
		console.log(process.env);
		break;
		case 'm':
		console.log(process.memoryUsage());
		break;
		case 'q':
		console.log(process.memoryUsage());
		break;
		case 'u':
		console.log('uptime: '+ process.uptime());
		break;
		case 'v':
		console.log(process.versions);
		break;
		case 'm':
		console.log(process.memoryUsage());
		break;
		case 'q':
		process.exit();
		break;

		default:
		console.log(global.help)
		help.showOptions();
	}	
})
process.on('exit', function(){
	console.log('bye');
});

process.on('uncaugthException',function(){
	console.log('error');
})



