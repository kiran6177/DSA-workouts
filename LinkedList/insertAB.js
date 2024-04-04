const LinkedList = require('./singlyasmodule')

function arrayToList(arr){
    const list = new LinkedList()
    arr.forEach(element => {
        list.append(element)
    });
    return list
}

function addNodeAB(node,data){
    const listdata = arrayToList([1,2,3,4,5])
    const index = listdata.search(data)
    listdata.insert(node,index )
    listdata.insert(node,index + 2)
    return listdata
}

const added = addNodeAB(8,3)
added.print()