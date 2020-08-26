// O(nlog(n)) time | O(1) space
  function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b);
    // if negative result: a is smaller than b,
    // a will be sorted to the left of b

    // if positive result: a is bigger than a,
    // a will be sorted to the right of b

    let left = 0;
    let right = array.length - 1;
    while(left < right) {
      const currentSum = array[left] + array[right];
      if(currentSum === targetSum) {
        return [array[left], array[right]];
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
          right--;
      }
    }
    return [];
  }

  console.log(twoNumberSum([2,5,1,4,6,3], 4));