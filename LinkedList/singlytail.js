class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next != this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
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
    reverse(){
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

const ll = new LinkedList()
ll.append(2)
ll.append(3)
ll.prepend(1)
ll.append(0)
ll.insert(2,9)
ll.print()
// ll.reverse()
// ll.print()
// ll.reverse()
// ll.removeFromFront()
// ll.print()
// ll.removeFromEnd()
// ll.print()