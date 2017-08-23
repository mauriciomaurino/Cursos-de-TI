var config = require('./config');
var createSerialGenerate = function(){
	var max = 1000;

	var generate = function(){
		return Math.floor(Math.random() * max);
		//return Math.floor(Math.random() * global.max); ou global
		//return Math.floor(Math.random() * config.max); ou em outro arquivo como modulo
	};
	return{
		generate: generate
	};
};
module.exports = createSerialGenerate();

//OU
//var SerialGenerate = function(){
//	var max = 1000;
//	this.generate = function(){
//		return Math.floor(Math.random() * max);
//	};
//};
//module.exports = new SerialGenerate();