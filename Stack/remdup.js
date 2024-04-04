const Stack = require('./stackmod')

function removeDuplicates(stack){
    const uniqueItems = new Stack()
    const added = new Set()
    while(!stack.isEmpty()){
        const currentItem = stack.pop()
        if(!added.has(currentItem)){
            added.add(currentItem)
            uniqueItems.push(currentItem)
        }
    }
    added.clear()
    return uniqueItems.items
}

const stack = new Stack()
stack.push(3)
stack.push(1)
stack.push(6)
stack.push(3)
stack.push(9)
stack.push(4)
stack.print()
console.log(removeDuplicates(stack))