// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space 
function findClosestValueInBst(tree, target) {
	return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
	let currentNode = tree;
	while(currentNode !== None){
		if (Math.abs(target - closest) > Math.abs(target - currentNode.values)) closest = currentNode.value;
		if (target < currentNode.value) currentNode = currentNode.left;
		else if (target > currentNode.value) currentNode = currentNode.right;
		else break;
	}
	return closest;
}

class BST {
	constructor(value) {
	  this.value = value;
	  this.left = null;
	  this.right = null;
	}
  }