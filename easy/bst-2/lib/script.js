// O(n) time | O(1) space - where n is the length of the array

function isValidSubsequence(array, sequence) {

	let sequenceIndex = 0;

	for(value of array){
		if (sequenceIndex === sequence.length) break;
		if (sequence[sequenceIndex] === value) sequenceIndex++;
	}

	return sequenceIndex === sequence.length;
}
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, -1, 10];
console.log(isValidSubsequence(array, sequence));