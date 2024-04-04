const LinkedList = require('./singlyasmodule')

function arrayToList(arr){
    const list = new LinkedList()
    arr.forEach(element => {
        list.append(element)
    });
    return list
}


function deleteVal(data){
    const listdata = arrayToList([1,2,3,4,5])
    listdata.removeVal(data)
    return listdata
}

const deleted = deleteVal(4)
deleted.print()