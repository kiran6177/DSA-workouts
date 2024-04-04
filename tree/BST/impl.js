class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    contains(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
               return this.contains(root.left,value)
            }else{
               return this.contains(root.right,value)
            }
        }
    }
    preOrderDFS(root = this.root){
        if(root){
            console.log(root.value)
            this.preOrderDFS(root.left)
            this.preOrderDFS(root.right)
            return
        }
        return false
    }
    inOrderDFS(root = this.root){
        if(root){
            this.inOrderDFS(root.left)
            console.log(root.value)
            this.inOrderDFS(root.right)
            return 
        }
        return false
    }
    postOrderDFS(root = this.root){
        if(root){
            this.postOrderDFS(root.left)
            this.postOrderDFS(root.right)
            console.log(root.value)
            return
        }
        return false
    }
    BFS(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root = this.root){
        if(!root.left){
            console.log(root.value)
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root = this.root){
        if(!root.right){
            console.log(root.value)
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
      }
    
      deleteNode(root, value) {
        if (root === null) {
          return root;
        }
        if (value < root.value) {
          root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
          root.right = this.deleteNode(root.right, value);
        } else {
          if (!root.left && !root.right) {
            return null;
          }
          if (!root.left) {
            return root.right;
          } else if (!root.right) {
            return root.left;
          }
          root.value = this.min(root.right);
          root.right = this.deleteNode(root.right, root.value);
        }
        return root;
      }
    height(node = this.root){
        if(!node){
            return -1
        }
        const leftHeight = this.height(node.left)
        const rightHeight = this.height(node.right)
        return Math.max(leftHeight,rightHeight) + 1;
    }
    isBST(node, min = -Infinity, max = Infinity) {
        if (!node) {
          return true;
        }
        if (node.value < min || node.value > max) {
          return false;
        }
        return (
          this.isBST(node.left, min, node.value) &&
          this.isBST(node.right, node.value, max)
        );
      }
}

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.contains(bst.root,5))
// bst.preOrderDFS()
// bst.inOrderDFS()
// console.log("--------")
// bst.BFS()
// bst.min()
// bst.max()
console.log("--------")
bst.delete(15)
console.log("--------")
bst.BFS()
console.log("--------")
bst.preOrderDFS()

// console.log(bst.isBST(bst.root))
// console.log(bst.height())