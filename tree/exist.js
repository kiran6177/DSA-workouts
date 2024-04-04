const Tree = require('./treemod')
function isExist(root,value){
    function checkExist(root,value){
        if(!root){
            return -1
        }
        if(root.value === value){
            return 1
        }
        for(let i of root.children){
            let isExisiting = checkExist(i,value)
            if(isExisiting === 1){
                return 1
            }
        }
        return -1
    }
    return checkExist(root,value)
}
const tree = new Tree()
const root = tree.setRoot('A');
const nodeB = root.addChild('B');
const nodeC = root.addChild('C');
const nodeD = root.addChild('D');
nodeB.addChild('E');
nodeB.addChild('F');
nodeC.addChild('G');
nodeD.addChild('H');
console.log(isExist(tree.root,"E"))
console.log(isExist(tree.root,"W"))
