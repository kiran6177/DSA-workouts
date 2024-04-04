class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null
    }
    isEmpty(){
        return this.head === null;
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node 
        }
    }
    pop(){
        if(!this.isEmpty()){
            let removedNode = this.head
            this.head = this.head.next
            return removedNode.value
        }
        return -1
    }
    peek(){
        if(!this.isEmpty()){
            return this.head.value
        }
        return -1
    }
    display(){
        let curr = this.head;
        let values = ''
        while(curr){
            values += ` ${curr.value}`
            curr = curr.next
        }
        console.log(values.split(' ').reverse().join(' '))
    }
    size(){
        let count = 1
        let curr = this.head
        while(curr.next){
            count++
            curr = curr.next
        }
        return count
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        while (this.stack1.head) {
            this.stack2.push(this.stack1.pop());
        }
        if (!this.stack2.head) {
            console.log("Queue is empty");
            return null;
        }
        let dequeuedValue = this.stack2.pop();
        while (this.stack2.head) {
            this.stack1.push(this.stack2.pop());
        }
        return dequeuedValue;
    }
    

    display() {
        this.stack1.display();
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
queue.dequeue();
queue.dequeue();
queue.display()