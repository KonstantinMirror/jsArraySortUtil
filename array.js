var meshArray =[];
for (var i = 0; i < 10; i++) {
	meshArray[i]=Math.round(Math.random()*1000);	
}
console.log(meshArray);
console.log('max element is ' + getMax(meshArray));
console.log('min element is ' + getMin(meshArray));
console.log('avg elements is ' + getAvg(meshArray));
sortInsertion(meshArray);
console.log(meshArray);

var obj1 = { a: 2, c: 3, d: 3};
var obj2 = { a: 1 };
var obj3 = { a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];

console.log(obJectSort(arOfObj));



function sortBuble(array){
	var outer;
	var inner;
	for (outer = array.length-1; outer > 1; outer--) {
		for (inner=0; inner < outer; inner++) {
			if(array[inner]>array[inner+1]){
				swap(array,inner,inner+1);
			}
		}
	}
}

function getMax (array) {
	var max=array[0];
	for(var i=1;i<array.length;i++){
		if (array[i]>max) {
			max=array[i];
		};
	}
	return max;
}

function getMin (array) {
	var min=array[0];
	for(var i=1;i<array.length;i++){
		if (array[i]<min) {
			min=array[i];
		};
	}
	return min;
}

function getAvg(array){
	if (array.length >0 ) {
		var summ = 0;
		for(var i=0;i<array.length;i++){
			summ= summ + array[i];
		}
		return summ/array.length;
	}
}

function sortSelection(array){
	var outer;
	var inner;
	var min;
	for(outer=0;outer<array.length-1;outer++){
		min=outer
		for(inner=outer+1;inner<array.length;inner++){
			if(array[inner]<array[min]){
				swap(array,inner,min);
			}
		}
	}
}

function sortInsertion(array){
	var outer;
	var inner;
	for(outer=1;outer<array.length;outer++){
		var temp = array[outer];
		inner=outer;
		while(inner>0&&array[inner-1]>=temp){
			array[inner]=array[inner-1];
			inner--
		}
		array[inner]=temp;
	}
}


function swap(array,index_1,index_2){
	var temp=array[index_2];
	array[index_2]=array[index_1];
	array[index_1]=temp;
}


function obJectSort(arObject, typeSort){
	if (typeSort == "asc"|| typeSort == undefined) {
		arObject.sort(compareAscending);
	}else if (typeSort == "desc") {
		arObject.sort(compareDescending);
	}else {
		console.log('wrong parameters!!!')
	}
	return arObject;


	function compareAscending(arg1,arg2){
		countArg1 = getCountProp(arg1);
		countArg2 = getCountProp(arg2);
		return countArg1 - countArg2;
	}

	function compareDescending(arg1,arg2){
		countArg1 = getCountProp(arg1);
		countArg2 = getCountProp(arg2);
		return countArg2 - countArg1;
	}

	function getCountProp(arg){
		var counter=0;
		for(var prop in arg){
			counter++
		}
		return counter;
	}
}



