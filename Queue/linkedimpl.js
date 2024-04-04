class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
    }
    isEmpty(){
        return this.head === null
    }
    size(){
        if(this.isEmpty()){
            return
        }
        let count = 0;
        let curr = this.head
        while(curr){
            count++
            curr = curr.next
        }
        return count
    }
    enqueue(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            const removed = this.head
            this.head = this.head.next
            return removed.value
        }
        return -1
    }
    peek(){
        return this.head.value
    }
    print(){
        if(!this.isEmpty()){
            let curr = this.head
            let list  = ''
            while(curr){
                list += `${curr.value} `
                curr = curr.next
            }
            return list
        }
        return null
    }
}

const queue = new Queue()
queue.enqueue(7)
queue.enqueue(0)
queue.enqueue(4)
queue.enqueue(1)
queue.enqueue(5)
console.log(queue.print())
queue.dequeue()
console.log(queue.size())
console.log(queue.print())

