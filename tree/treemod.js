class TreeNode{
    constructor(value){
        this.value = value
        this.children = []
    }
    addChild(value){
        const child = new TreeNode(value)
        this.children.push(child)
        return child
    }
}

class Tree{
    constructor(){
        this.root = null
    }
    setRoot(value){
        this.root = new TreeNode(value)
        return this.root
    }
    print() {
        this._printNode(this.root, '');
    }

    _printNode(node, prefix) {
        if (node) {
            console.log(prefix + node.value);
            for (let child of node.children) {
                this._printNode(child, prefix + '--');
            }
        }
    }
}

module.exports = Tree