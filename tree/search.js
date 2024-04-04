const Tree = require('./treemod')

function search(root,value){  
    function findNode(node, value) {
        if (!node) {
            return null;
        }
        if (node.value === value) {
            return node;
        }
        for (let child of node.children) {
            const result = findNode(child, value);
            if (result) {
                return result;
            }
        }
        return null;
    }
    return findNode(root, value);
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
// tree.print()
console.log(search(tree.root,'B'))