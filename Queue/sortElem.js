const Queue = require('./queuemod')

function sortQueue(queue) {
    if (queue.isEmpty()) {
        return "Queue is empty";
    }

    let sortedKeys = Object.keys(queue.items).sort((a, b) => queue.items[a] - queue.items[b]);
    let sortedQueue = new Queue();
    sortedKeys.forEach(key => {
        sortedQueue.enqueue(queue.items[key]);
    });

    return sortedQueue.items;
}

const queue = new Queue()
queue.enqueue(4)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(9)
queue.enqueue(6)
queue.print()
console.log(sortQueue(queue))