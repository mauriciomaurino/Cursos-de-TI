var geraPessoa = function(nom,idad){
	var pessoa = {
		nome:nom,
		idade:idad
	};
	var _getPessoa = function(){
		return pessoa;
	};
	var _resetPessoa = function(){
		pessoa.nome= "---";
		pessoa.idade=0;
	};
	return{
		getPessoa: _getPessoa,
		resetPessoa: _resetPessoa
	};
};
var x= geraPessoa("mauricio",43);

var array = [];
var p1= x.getPessoa();
array.push(p1);
console.log(array);
x.resetPessoa();
var p2 = x.getPessoa();
array.push(p2);
console.log(array);
	var p3 = new geraPessoa("carlos",33);
array.push(p3.getPessoa());
console.log(array);