class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    peek(){
        return this.items[0]
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(2)
queue.enqueue(1)
queue.enqueue(7)
queue.enqueue(8)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.size())
