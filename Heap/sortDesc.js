const MaxHeap = require('./maxheapmod')

function sortDesc(arr){
    const max = new MaxHeap()
    arr.forEach(element => {
        max.insert(element)
    });
    let sorted = []
    while(max.heap.length){
        sorted.push(max.remove())
    }
    return sorted
}

console.log(sortDesc([0,3,8,2,1,5,4,7,6]))