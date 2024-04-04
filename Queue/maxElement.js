const Queue = require('./queuemod')

function maxElement(queue){
    let max = queue.peek()
    for(let i = 0 ; i < queue.size() ; i++){
        if(queue.items[i] > max){
            max = queue.items[i]
        }
    }
    return max
}

const queue = new Queue()
queue.enqueue(4)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(9)
queue.enqueue(6)
queue.print()
console.log(maxElement(queue))