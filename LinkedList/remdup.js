const LinkedList = require('./singlyasmodule')

function arrayToList(arr){
    const list = new LinkedList()
    arr.forEach(element => {
        list.append(element)
    });
    return list
}

function remDuplicate(arr){
    const listed = arrayToList(arr)
    console.log(Array.from(listed.removeDuplicates()).join(' '))    
}

remDuplicate([1,1,3,1,4,5])