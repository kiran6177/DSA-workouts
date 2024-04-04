class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
    }
    isEmpty(){
        return this.head === null;
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node 
        }
    }
    pop(){
        if(!this.isEmpty()){
            let removedNode = this.head
            this.head = this.head.next
            return removedNode.value
        }
        return -1
    }
    peek(){
        if(!this.isEmpty()){
            return this.head.value
        }
        return -1
    }
    print(){
        let curr = this.head;
        let values = ''
        while(curr){
            values += ` ${curr.value}`
            curr = curr.next
        }
        console.log(values.split(' ').reverse().join(' '))
    }
    size(){
        let count = 1
        let curr = this.head
        while(curr.next){
            count++
            curr = curr.next
        }
        return count
    }
}

const stack = new Stack()
stack.push(4)
stack.push(1)
stack.push(5)
stack.push(8)
stack.push(0)
stack.print()
stack.pop()
stack.print()
console.log(stack.size())