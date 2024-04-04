class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(data = null) {
    this.head = data;
    this.tail = data;
  }
  isEmpty() {
    return this.head === null;
  }
  getSize() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  insert(pos, value) {
    const node = new Node(value);
    if (pos < 1 || pos > this.getSize()) {
      console.log("No such position.");
      return;
    } else if (pos === 1) {
      node.next = this.head;
      this.head = node;
    } else {
      let prev = this.head;
      for (let i = 1; i < pos - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    let prev = this.head;
    while (prev.next && prev.next != this.tail) {
      prev = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    return value;
  }
  removeVal(value) {
    if (this.isEmpty()) {
      return -1;
    }
    if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.head.value === value) {
      this.head = this.head.next;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value != value) {
        prev = prev.next;
      }
      let removedNode = prev.next;
      prev.next = removedNode.next;
      return removedNode.value;
    }
  }
  removeValAll(value) {
    if (this.isEmpty()) {
      return -1;
    }

    var curr = this.head;

    while (this.head && this.head.value == value) {
      this.head = this.head.next;
    }
    while (curr.next != null) {
      if (curr.next.value == value) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    return value;
  }
  removeDuplicates(){
    if(this.isEmpty()){
        return null
    }
    let visited = new Set()
    let prev = null
    let curr = this.head
        while(curr){
            if(visited.has(curr.value)){
                prev = prev.next
            }else{
                visited.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
        return visited
    }
    removeDuplicatesPerm(){
        if(this.isEmpty()){
            console.log("List is Empty!!");
            return
        }
        let curr = this.head 
        while(curr.next){
            let prev = curr.next
            while(prev.next){
                if(curr.value === prev.next.value){
                    let remove = prev.next
                    prev.next = remove.next
                }
                prev = prev.next
            }
            curr = curr.next
        }
    }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty!!");
    } else {
      let curr = this.head;
      let str = "";
      while (curr) {
        str += `${curr.value} `;
        curr = curr.next;
      }
      console.log(str);
    }
  }
  printRet(){
    if(this.isEmpty()){
        return 0
    }else{
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        return listValues
    }
    }
  reverse(){
    if(this.isEmpty()){
        console.log("List is Empty")
        return
    }
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.tail = this.head
    this.head = prev
  }
}

const list = new LinkedList();
list.prepend(5);
list.prepend(2);
list.prepend(1);
list.prepend(7);
list.prepend(10);
list.append(10);
list.append(10);
list.insert(3, 6);
console.log(list.getSize());
list.print();
list.removeValAll(10);
list.print();
list.reverse()
list.print()
list.prepend(10);
list.append(10);
list.append(10);
list.print()
console.log(list.removeDuplicates())
console.log(list.printRet())
list.removeDuplicatesPerm()
list.print()
