const BST = require("./bstmod");

function isIdentical(root1, root2) {
  if (root1 == null && root2 == null) {
    return 1;
  } else if (root1 == null && root2 != null) {
    return 0;
  } else if (root1 != null && root2 == null) {
    return 0;
  } else {
    if (
      root1.value == root2.value &&
      isIdentical(root1.left, root2.left) == 1 &&
      isIdentical(root1.right, root2.right) == 1
    ) {
      return 1;
    } else {
      return 0;
    }
  }
}

const bst1 = new BST();
bst1.insert(14);
bst1.insert(1);
bst1.insert(20);
bst1.insert(2);
bst1.insert(9);
bst1.insert(17);
const bst2 = new BST();
bst2.insert(14);
bst2.insert(1);
bst2.insert(20);
bst2.insert(2);
bst2.insert(9);
bst2.insert(17);
console.log(isIdentical(bst1.root, bst2.root));
