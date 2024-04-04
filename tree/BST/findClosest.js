const BST = require('./bstmod')

function findClosest(bst,value){
    let closest = Infinity
    let current = bst.root

    while(current){
        if(Math.abs(current.value - value) < Math.abs(closest - value)){
            closest = current.value
        }
        if(value < current.value){
            current = current.left
        }else if(value > current.value){
            current = current.right
        }else{
            break
        }
    }
    return closest

}

const bst = new BST()
bst.insert(8)
bst.insert(3)
bst.insert(8)
bst.insert(4)
bst.insert(2)
console.log(findClosest(bst,1))