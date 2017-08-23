console.log("Inicio"+ new Date().getSeconds());
var i = setInterval(function(){
	console.log(""+ new Date().getSeconds());
},1000);
setTimeout(function(){
	clearInterval(i);
	console.log("Fim"+ new Date().getSeconds());
},5100)