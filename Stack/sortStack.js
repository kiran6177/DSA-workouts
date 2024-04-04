const Stack = require('./stackmod')

function sortStack(stack){
    let temp = new Stack()
    while(!stack.isEmpty()){
        let currentElement = stack.pop()
        while(temp.size() > 0 && temp.peek() < currentElement){
            stack.push(temp.pop())
        }
        temp.push(currentElement)
    }
    while(!temp.isEmpty()){
        stack.push(temp.pop())
    }
    return stack
}

const stack = new Stack()
stack.push(3)
stack.push(1)
stack.push(6)
stack.push(3)
stack.push(9)
stack.push(4)
console.log(sortStack(stack))