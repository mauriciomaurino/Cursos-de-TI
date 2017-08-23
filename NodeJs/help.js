global.help = "HELP - Please select an option below: ";
var options = [
'a) pid',
'b) title',
'c) arch',
'd) plataform',
'e) env',
'u) uptime',
'v) versions',
'm) memory usage',
'q) quit'
];
exports.showOptions = function(){
	options.forEach(function(option){
		console.log(option);
	});
}