class HashTable{
    constructor(size){
        this.table = new Array(size)
    }
    hash(key){
        let total = 0
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.table.length
    }
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(el=>el[0]===key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(el=>el[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    has(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(el=>el[0] === key)
            if(sameKeyItem){
                return true
            }
        }
        return false
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.findIndex(el=>el[0] === key)
            if(sameKeyItem){
                bucket.splice(sameKeyItem,1)
            }
        }
        return -1
    }
    display(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(i +"=>"+this.table[i])
            }
        }
    }
}

const tab = new HashTable(5)
tab.set("ashin",500)
tab.set("jithu",500)
tab.set("kiara",500)
tab.set("janvi",500)
tab.set("hello",500)
tab.display()
console.log(" ")
tab.remove('janvi')
tab.display()
