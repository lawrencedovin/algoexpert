// O(n) time | O(n) space
  function twoNumberSum(array, targetSum) {
    const nums = {};
    for(const num of array) {
        const potentialMatch = targetSum - num;
        // y = targetSum - x;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
  }

  console.log(twoNumberSum([1,2,3,4,5,6], 4));