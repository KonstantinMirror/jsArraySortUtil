
var myString = 'hello world';
console.log(reverse(myString));
console.log(isEndWith(myString,'rld'));
console.log(isStartWith(myString,'hell'));



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