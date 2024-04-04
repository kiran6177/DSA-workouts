const Queue = require('./queuemod')

function reverseElements(queue){
    if(queue.isEmpty()){
        return
    }
    const lastitem = queue.dequeue()
    reverseElements(queue)
    queue.enqueue(lastitem)
    return queue.items
}

const queue = new Queue()
queue.enqueue(4)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(9)
queue.enqueue(6)
queue.print()
console.log(reverseElements(queue))