const Stack = require('./stackmod')

function reverseStack(stack){
    const temp = new Stack()
    while(!stack.isEmpty()){
        temp.push(stack.pop())
    }
    return temp.items
}

const stack = new Stack()
stack.push(3)
stack.push(1)
stack.push(6)
stack.push(3)
stack.push(9)
stack.push(4)
stack.print()
console.log(reverseStack(stack))