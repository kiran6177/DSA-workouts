const MinHeap = require('./minheapmod')
function sort(arr){
    const min = new MinHeap()
    arr.forEach(element => {
       min.insert(element) 
    });
    let sorted = []
    while(min.heap.length){ 
        sorted.push(min.remove())
    }
    return sorted
}

console.log(sort([4,1,8,3,0,2]))