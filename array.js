

var meshArray =[];
var meshArraySome =[];

initMeshArray(meshArray,10);
initMeshArray(meshArraySome,10);


console.log(meshArray,10);
console.log('max element is ' + getMax(meshArray));
console.log('min element is ' + getMin(meshArray));
console.log('avg elements is ' + getAvg(meshArray));
sortShell(meshArray);
sortBuble(meshArraySome);
console.log(meshArray);

console.log(merge(meshArray,meshArraySome));

var obj1 = { a: 2, c: 3, d: 3};
var obj2 = { a: 1 };
var obj3 = { a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];

console.log(obJectSort(arOfObj));



function initMeshArray (array, count) {
	for (var i = 0; i < count; i++) {
		array[i]=Math.round(Math.random()*1000);	
	}
	return array;
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

	var result = array.reduce(function(sum,current){
		return sum + current;
	},0);
	return result/array.length;
	}


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
		inner = outer;
		while(inner > 0 && array[inner-1] >= temp){
			array[inner]=array[inner-1];
			inner--
		}
		array[inner] = temp;
	}
}


function merge (arrayToMerge_1, arrayToMerge_2) {
	var outArray =[];
	var dex_1=0;
	var dex_2=0;
	var dex_out=0;
	while(dex_1 < arrayToMerge_1.length && dex_2 < arrayToMerge_2.length){
		if(arrayToMerge_1[dex_1]<arrayToMerge_2[dex_2]){
			outArray[dex_out++]=arrayToMerge_1[dex_1++];
		}else{
			outArray[dex_out++]=arrayToMerge_2[dex_2++];
		}
	}
	while(dex_1<arrayToMerge_1.length){
		outArray[dex_out++]=arrayToMerge_1[dex_1++];
	}
	while(dex_2<arrayToMerge_2.length){
		outArray[dex_out++]= arrayToMerge_1[dex_2++];
	}
	return outArray;
}



function sortShell(array){
	var outer;
	var inner;
	var temp;
	var h=1;
	while(h<= array/3){
		h = h*3+1;
	}
	while(h>0){
		for(outer = h; outer<array.length; outer++){
			temp=array[outer];
			inner=outer;
			while(inner>h-1&&array[inner-1]>=temp){
				array[inner]=array[inner-h];
				inner-=h;
			}
			array[inner]=temp;
		}
		h=(h-1)/3;
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



