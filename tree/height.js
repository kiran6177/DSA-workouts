const Tree = require('./treemod')
function height(root) { 
    function calculateHeight(node) {
        if (!node) {
            return 0;
        }
        let maxHeight = -1;
        for (let child of node.children) {
            maxHeight = Math.max(maxHeight, calculateHeight(child));
        }
        return maxHeight + 1;
    }
    return calculateHeight(root);

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
tree.print()
console.log(height(tree.root))