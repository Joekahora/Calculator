var modulos = function(firstNumber, secondNumber){
	return firstNumber % secondNumber;
};
var number1 = parseInt(prompt("Enter the first Number: "));
var number2 = parseInt(prompt("Enter the second Number: "));
alert(modulos(number1, number2));