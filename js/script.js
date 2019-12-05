//business logic
var add = function(number1,number2){
	return number1 + number2;
};

var subtract = function(number1,number2){
	return number1 - number2;
};

var multiply = function (number1, number2) {
	return number1 * number2 ;	
};

var divide = function(number1, number2){
	return number1 / number2
};
//user logic(front-end)
$(document).ready(function(){
	$("form#add").submit(function(event){
	event.preventDefault();
	var number1 = parseInt($("#add1").val());
	var number2 = parseInt($("#add2").val());
	var result = add(number1, number2);
	$("#output").text(result);
	});
});

$(document).ready(function(){
	$("form#subtract").submit(function (event) {
		event.preventDefault();
		var number1 = parseInt($("#sub1").val());
		var number2 = parseInt($("#sub2").val());
		var result = subtract(number1, number2);
		$("#sub-output").text(result);
	});
});

$(document).ready(function () {
	$("form#multiply").submit(function (event) {
		event.preventDefault();
		var number1 = parseInt($("#multi1").val());
		var number2 = parseInt($("#multi2").val());
		var result = multiply(number1, number2);
		$("#multi-output").text(result);
	});
});

$(document).ready(function () {
	$("form#divide").submit(function (event) {
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var resultSubtract = divide(number1, number2);
		$("#divide-output").text(resultSubtract);
	});
});