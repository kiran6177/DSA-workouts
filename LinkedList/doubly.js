class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
        this.tail = node
    }else{
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }
    this.size++
  }
  removeFromFront(){
    if(this.isEmpty()){
        return null
    }
    const item = this.head.value
    this.head = this.head.next
    this.size--
    return item
  }
  removeFromEnd(){
    if(this.isEmpty()){
        return null
    }
    const item = this.tail.value
    if(this.size === 1){
        this.head = null
        this.tail = null
    }else{
        this.tail = this.tail.prev
        this.tail.next = null
    }
    this.size--
    return item
  }
  print(){
    if(this.isEmpty()){
        console.log("List is Empty")
    }else{
        let curr = this.head
        let str = ''
        while(curr){
            str += `${curr.value} `
            curr = curr.next
        }
        console.log(str)
    }
  }
  printReverse(){
    if(this.isEmpty()){
        console.log("List is empty")
    }else{
        let curr = this.tail
        let str = ''
        while(curr){
            str += `${curr.value} `
            curr = curr.prev
        }
        console.log(str)
    }
  }
}

const dl = new DoublyLinkedList()
dl.prepend(3)
dl.prepend(4)
dl.prepend(2)
dl.prepend(9)
dl.prepend(6)
dl.append(7)
dl.print()
dl.printReverse()
dl.removeFromEnd()
dl.print()
dl.removeFromFront()
dl.print()
