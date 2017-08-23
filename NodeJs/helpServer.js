var options = [
'/nickname \'seu nome\': mudar seu nick, ou ou nome de usuário.',
'/help ................: utilizar o Help da aplicação.',
'/q ...................: sair da conversa.'
];

exports.showOptions = function(){
	var opt ="//help//";
	options.forEach(function(option){
		opt = opt.concat("",option+'\n');
	});
	return opt;
}