const HashTable = require('./mod')

const str = "Hello world hello world JavaScript is awesome.";

function wordCount(str){
    const words = str.toLowerCase()
    const neww = words.split(' ')
    let freq = new HashTable(neww.length)
   for(let i = 0 ; i < neww.length ; i++){
    for(let j = i + 1 ; j < neww.length ; j++){
        if(neww[i] === neww[j]){
            freq.set(neww[i],freq.get(neww[i]) || 1 + 1) 
        }
    }
   }
   freq.display()
}

wordCount(str)