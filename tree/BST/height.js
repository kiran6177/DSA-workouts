const BST = require('./bstmod')

function heightOfBST(root){
    if(!root){
        return -1
    }
    const leftHeight = heightOfBST(root.left)
    const rightHeight = heightOfBST(root.right)
    return Math.max(leftHeight,rightHeight)+1
}

const bst = new BST()
bst.insert(5)
bst.insert(1)
bst.insert(9)
bst.insert(6)
bst.insert(3)
bst.insert(2)
console.log(heightOfBST(bst.root))

