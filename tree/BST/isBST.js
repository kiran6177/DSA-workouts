const BST = require("./bstmod");

const bst1 = new BST();
bst1.insert(5);
bst1.insert(3);
bst1.insert(8);
bst1.insert(2);
bst1.insert(6);
console.log(bst1.isBSTUsingInOrderTraversal());