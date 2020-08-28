// O(n) time | O(1) space - where n is the length of the array

function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrayIndex = 0;
	let sequenceIndex = 0;
	
	while(arrayIndex < array.length && sequenceIndex < sequence.length){
		if(array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
		arrayIndex++
  }
  
	return sequenceIndex === sequence.length;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 8, -1, 10];
console.log(isValidSubsequence(array, sequence));

///////////////////////////////////////////////////////////////////////////////

// Unordered
// function isValidSubsequence(array, sequence) {
//   // Write your code here.
//   let i = 0;

//   if(sequence.length > array.length) return false;

//   while(i < sequence.length) {
//     if(array.indexOf(sequence[i]) !== -1){ 
//       // array = array.splice(array.indexOf(sequence[i]), 1);
//       i++; 
//     }
//     else return false;
//   }
//   return true;
// }

// const index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1);
// }

// const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const sequence = [1, 8, -2, 10];
// console.log(isValidSubsequence(array, sequence));