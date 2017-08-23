console.log("a "+ new Date());
setImmediate(function(){
	console.log("b "+ new Date());
});
console.log("c "+ new Date());