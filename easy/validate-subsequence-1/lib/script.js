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

// const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const sequence = [1, 8, -2, 10];
// console.log(isValidSubsequence(array, sequence));

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIdx = 0;
  let seqIdx = 0;
  while(arrIdx < array.length && seqIdx < sequence.length) {
    if(array[arrIdx] == sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return sequence.length === seqIdx;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 8, -1, 10];
console.log(isValidSubsequence(array, sequence));