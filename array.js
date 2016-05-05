
'use strict';
var meshArray =[];
var meshArraySome =[];

initMeshArray(meshArray,10);
initMeshArray(meshArraySome,10);


console.log(meshArray);
console.log('max element is-> ' + getMax(meshArray));
console.log('min element is ->' + getMin(meshArray));
console.log('avg elements is ->' + getAvg(meshArray));

console.log('Before sortShell->' + meshArray);
sortShell(meshArray);
console.log('After sortShell->' + meshArray);

console.log('Before sortBuble->' + meshArraySome);
sortBuble(meshArraySome);
console.log('After sortBuble->' + meshArraySome);

initMeshArray(meshArray,10);
console.log('Before sortInsertion->' + meshArray);
sortInsertion(meshArray);
console.log('After sortInsertion->' + meshArray);

initMeshArray(meshArray,10);
console.log('Before sortSelection->' + meshArray);
sortSelection(meshArray);
console.log('After sortSelection->' + meshArray);

console.log('After merge->' + merge(meshArray,meshArraySome));

initMeshArray(meshArray,10);
console.log('Before quickSort->' + meshArray);
quickSort(meshArray);
console.log('After quickSort->' + meshArray);

initMeshArray(meshArray,10);
console.log('Before sortConting->' + meshArray);
console.log('After sortConting->' + sortConting(meshArray));


paintTriangle(5);

var obj1 = { a: 2, c: 3, d: 3};
var obj2 = { a: 1 };
var obj3 = { a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];

console.log(obJectSort(arOfObj),'asc');



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


function quickSort (array) {
	recQuickSort(0, array.length-1);

	function recQuickSort (left, right) {
		if(right-left <= 0){
			return;
		}else{
			var pivot = array[right];
			var partition = partitionIt(left, right, pivot);
			recQuickSort(left,partition - 1);
			recQuickSort(partition + 1, right);
		}
	}

	function partitionIt (left,right,pivot) {
		var leftPtr = left - 1;
		var rightPtr = right;
		while(true){
			while(array[++leftPtr] < pivot);
			while(rightPtr > 0 && array[--rightPtr] > pivot );
			if (leftPtr>=rightPtr) {
				break;
			}else{
				swap(array, leftPtr, rightPtr)
			}
		}
		swap(array,leftPtr,right);
		return leftPtr;
	}
}


function sortConting(array){   
	var n = array.length;
	var count = [];
	var out = [];
	for (var i = 0; i < n; i++){
		count[i] = 0;
	} 
	for (var i = 0; i < n-1; i++){
		for (var j = i+1; j < n; j++){
			if (array[i] < array[j]){
				count[j]++;
			}else{
				count[i]++;
			} 
		}
	}
	for (var i = 0; i < n; i++){
		out[count[i]] = array[i];
	} 
	return out;
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
		var countArg1 = getCountProp(arg1);
		var countArg2 = getCountProp(arg2);
		return countArg1 - countArg2;
	}

	function compareDescending(arg1,arg2){
		var countArg1 = getCountProp(arg1);
		var countArg2 = getCountProp(arg2);
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

function paintTriangle (arg) {
	if (!(arg % 2)) {
		console.log('wrong parameter ' + arg);
		return;
	}
	var depth = ~~arg/2;
	var triangleArray=[];
	for(var  i = 0 ; i < depth ;i++){
		var line = [];
		for(var k = 0; k < arg; k++){
			if (i > k || (k + i >= arg)) {
				line[k]=0;
			}else{
				line[k]=1;
			}
		}
		triangleArray[i] = line;
	} 
	getOneTriangle();
	//getDoubleTriangle();
	

	function getDoubleTriangle(){
		var startHeight = triangleArray.length-2;
		for(;startHeight>=0;startHeight--){
			triangleArray.push(triangleArray[startHeight])
		}
		console.log(triangleArray);
	}

	function getOneTriangle () {
		var oneTriangel = [];
		for(var iterator = 0; iterator <= arg; iterator++){
			var arrInner = [];
			for(var innerIter = 0; innerIter <= arg; innerIter++){
				arrInner[innerIter] = 0;
			}
			oneTriangel[iterator] = arrInner;
		}
		for(var i = 0; i < arg ; i++){
			for(var j = 0; j < depth; j++){
				oneTriangel[j][i] = triangleArray[i][j];
			}
		}
		console.log(oneTriangel);
	}
}



