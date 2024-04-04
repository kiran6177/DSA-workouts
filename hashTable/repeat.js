const HashTable = require('./mod')
const sent = 'hellohello'

function findNonRep(str){
    const nums = new HashTable(str.length)
    for(let i = 0 ; i < str.length ; i++){
        let count = 0
        for(let j = 0 ; j < str.length ; j++){
            if(str[i]=== str[j]){
                count++
                nums.set(str[i],count)
            }
        }
        if(count === 1){
            console.log("first character not repeating is "+ str[i])
            return
        }
    }
    console.log(nums.get('h'))
    return nums.display()
}

findNonRep(sent)