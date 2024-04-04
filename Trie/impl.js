class Node{
    constructor(){
        this.children = new Map()
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children.has(char)){
                node.children.set(char,new Node())
            }
            node = node.children.get(char)
        }
        node.isEndOfWord = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children.has(char)){
                return false
            }
            node = node.children.get(char)
        }
        return node.isEndOfWord
    }
    isPrefix(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children.has(char)){
                return false
            }
            node = node.children.get(char)
        }
        return true
    }
    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children.has(char)){
                return []
            }
            node = node.children.get(char)
        }
        const words = []
        const autoCompleteHelper = (node,prefix)=>{
            if(node.isEndOfWord){
                words.push(prefix)
            }
            for(let [char,childNode] of node.children){
                autoCompleteHelper(childNode,prefix+char)
            }
        }
        autoCompleteHelper(node,prefix)
        return words
    }  
    listAll(){
        const words = [];
        const listHelper = (node, prefix) => {
            if (node.isEndOfWord){
                 words.push(prefix);
                }
            for (let [char, childNode] of node.children) {
                listHelper(childNode, prefix + char);
            }
        };
        listHelper(this.root, '');
        return words;
    }
    delete(word){
        let deleteHelper = (node,index)=>{
            if(index === word.length){
                if(!node.isEndOfWord){
                    return false
                }
                node.isEndOfWord = false
                return node.children.size === 0
            }
            const char = word[index]
            if(!node.children.has(char)){
                return false
            }
            const deleted = deleteHelper(node.children.get(char),index + 1)
            if(deleted){
                node.children.delete(char)
                return node.children.size === 0
            }
        }
        deleteHelper(this.root,0)
    }
}

const trie = new Trie()
trie.insert("Apple")
trie.insert("Applet")
trie.insert("App")
trie.insert("Ape")
console.log(trie.listAll())
trie.delete("Apple")
console.log(trie.listAll())
