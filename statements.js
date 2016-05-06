'use strict'

var data = ";key,value;key1,value;key3,value3;";
parser(data);

var data = ";key,value;key1,value;arrayHere:k1,v1;k2,v2;k3,v3";
parser(data);




function parser(str) {
	var outObj = {};
	searchArray(str);
	console.log(outObj);

	function searchArray(){
		var position = str.search(':');
		if( position != -1 ){
			var simplerElements = str.substring(0,position).split(';');
			var elementsArray = str.substring(position + 1,str.length).split(';');
			var nameArray = simplerElements.pop().trim();
			searchSimpler(simplerElements);
			outObj[nameArray] = [];
			for(var i = 0 ;i<elementsArray.length; i++){
				var current = elementsArray[i].split(',');
				var currentArray = [];
				currentArray[current[0].trim()] = current[1].trim();
				outObj[nameArray].push(currentArray);
			}
		}else{
			searchSimpler(str.split(';'))
		}
		
	}

	function searchSimpler(elements){
		for(var i=0; i<elements.length; i++){
			var current = elements[i].trim();
			if(current.length > 0){
				if (current.search(',') !=-1) {
					var innerObj = current.split(',');
					outObj[innerObj[0]] = innerObj[1];
				}
			}
		}
	}
}


