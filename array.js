var sortArray =[];

for (var i = 0; i < 10; i++) {
	sortArray[i]=Math.round(Math.random()*1000);	
}
console.log(sortArray);
sortInsertion(sortArray);
console.log(sortArray);

function sortBuble(sortArray){
	var outer;
	var inner;
	for (outer = sortArray.length-1; outer > 1; outer--) {
		for (inner=0; inner < outer; inner++) {
			if(sortArray[inner]>sortArray[inner+1]){
				swap(sortArray,inner,inner+1);
			}
		}
	}
}

function sortSelection(sortArray){
	var outer;
	var inner;
	var min;
	for(outer=0;outer<sortArray.length-1;outer++){
		min=outer
		for(inner=outer+1;inner<sortArray.length;inner++){
			if(sortArray[inner]<sortArray[min]){
				swap(sortArray,inner,min);
			}
		}
	}
}


function sortInsertion(sortArray){
	var outer;
	var inner;
	for(outer=1;outer<sortArray.length;outer++){
		var temp = sortArray[outer];
		inner=outer;
		while(inner>0&&sortArray[inner-1]>=temp){
			sortArray[inner]=sortArray[inner-1];
			inner--
		}
		sortArray[inner]=temp;
	}
}


function swap(array,index_1,index_2){
	var temp=array[index_2];
	array[index_2]=array[index_1];
	array[index_1]=temp;
}
