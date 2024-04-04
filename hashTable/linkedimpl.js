class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class HashTable{
    constructor(size){
        this.table = new Array(size)
    }
    hash(key){
        let total = 0
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.table.length
    }
    set(key,value){
        const index = this.hash(key)
        let node = new Node({key,value})
        if(this.table[index]){
            node.next = this.table[index]
        }
        this.table[index] = node
    }
    get(key){
        const index = this.hash(key)
        if(this.table[index]){
            let curr = this.table[index]
            while(curr){
                if(curr.value.key === key){
                    return curr.value.value
                }
                curr = curr.next
            }
        }
        return -1
    }
    remove(key){
        const index = this.hash(key)
        if(this.table[index]){
            let prev = this.table[index]
            if(this.table[index].value.key === key){
                let nodeToRemove = this.table[index].value
                this.table[index] = this.table[index].next
                return nodeToRemove
            }
            while (prev.next && prev.next.value.key !== key){
                prev = prev.next
            }
            let nodeToRemove = prev.next
            prev.next = nodeToRemove.next
            return nodeToRemove.value
        }
        return false
    }
    display(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
}


const tab = new HashTable(6)
tab.set("ashin",599)
tab.set('janvi',499)
tab.set('jithu',999)
tab.set('kiran',999)
console.log(tab.get('janvi'))
tab.display()
console.log(" ------")
tab.remove('janvi')
tab.display()