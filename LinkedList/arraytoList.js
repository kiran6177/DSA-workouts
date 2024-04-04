const LinkedList = require('./singlyasmodule')

function arrayToList(arr){
    const list = new LinkedList()
    arr.forEach(element => {
        list.append(element)
    });
    return list
}

const listdata = arrayToList([1,2,3,4,5])
console.log(listdata)
listdata.print()