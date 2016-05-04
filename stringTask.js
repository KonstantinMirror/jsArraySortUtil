
var myString = 'hello world';
console.log(myString);
console.log(reverse(myString));
console.log(isEndWith(myString,'rld'));
console.log(isStartWith(myString,'hell'));

var camel = 'CamelClass';
var pascal = 'pascal_case_to';
console.log('Is pascal ' + camel + '->' + isPascalCase(camel));
console.log('Is pascal ' + pascal + '->' + isPascalCase(pascal));

console.log('Is camel ' + camel + '->' +  isCamelCase(camel));
console.log('Is camel ' + pascal + '->' +  isCamelCase(pascal));

function reverse (arg) {
	var outMessage='';
	for (var i = arg.length -1; i >= 0; i--) {
		outMessage +=arg[i]; 
	}
	return outMessage;
}

function isEndWith(currentString, end){
	if (currentString.length >= end.length) {
		var compareString = currentString.substring(currentString.length-end.length, currentString.length)
		return compareString==end;
	}else return false;
}

function isStartWith(currentString, start){
	if (currentString.length >= start.length) {
		var compareString = currentString.substring(0, start.length);
		return compareString==start;
	}else return false;
}


function isPascalCase(arg){
	return arg.split("_").length>1;
}


function isCamelCase(arg){
	var patt = /_/i;
	return !patt.test(arg);
}

