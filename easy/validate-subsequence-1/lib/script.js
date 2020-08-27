// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while(arrIdx < array.length && seqIdx < sequence.length) {
    if(array[arrIdx] == sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, -1, 8, 10];
console.log(isValidSubsequence(array, sequence));