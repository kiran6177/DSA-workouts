class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(value){
        this.items[this.rear] = value
        this.rear++
    }
    dequeue(){
        if(this.isEmpty()){
            return
        }
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.front - this.rear === 0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items)
    }
    findMax(){
        let max = this.items[this.front]
        for(let i = 0 ; i < this.size() ; i++){
            if(this.items[i] > max ){
                max = this.items[i]
            }
        }
        return max
    }
}

module.exports = Queue