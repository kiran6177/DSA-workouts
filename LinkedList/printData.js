const LinkedList = require('./singlyasmodule')

function arrayToList(arr){
    const list = new LinkedList()
    arr.forEach(element => {
        list.append(element)
    });
    return list
}


function printdata(arr){
    const listdata = arrayToList(arr)
    listdata.print()
    listdata.reverse()
    listdata.print()
}

printdata([1,2,3,4,5])