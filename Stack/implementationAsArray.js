class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(5)
stack.push(4)
stack.push(0)
stack.print()
stack.pop()
stack.print()
console.log(stack.peek())