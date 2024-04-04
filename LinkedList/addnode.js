const LinkedList = require('./singlyasmodule')

function addNodeBegEnd(data){
    const list = new LinkedList()
    list.prepend(1)
    list.prepend(4)
    list.prepend(3)

    list.prepend(data)
    list.append(data)
    return list
}

let data = addNodeBegEnd(2)
console.log(data)
data.print()