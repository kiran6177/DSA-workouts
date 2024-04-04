let LinkedList = require("./singlyasmodule");

class QueueList{
    constructor(){
        this.list = new LinkedList()
    }
    enqueue(value){
        this.list.append(value)
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    peek() {
        return this.list.head.value;
      }
    
      isEmpty() {
        return this.list.isEmpty();
      }
    
      getSize() {
        return this.list.getSize();
      }
    
      print() {
        return this.list.print();
      }
}

const ql = new QueueList()
ql.enqueue(3)
ql.enqueue(6)
ql.enqueue(4)
ql.enqueue(2)
ql.enqueue(0)
ql.print()
ql.dequeue()
ql.print()

