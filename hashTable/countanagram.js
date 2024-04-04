const HashTable = require('./mod')

const sentence = "Listen silently to the rustle of leaves; silent listeners lstein sense less."

function countAnagrams(str){
    const words = str.split(' ')
    const goodwords = []
    const anagram = new HashTable(words.length)
    for(let i = 0 ; i < words.length ; i++){
        goodwords[i] = words[i].toLowerCase().split('').sort().join('')        
    }
    for(let j = 0 ; j < goodwords.length ; j++){
        let count = 0
        for(let k = 0 ; k < goodwords.length ; k++){
            if(goodwords[j] === goodwords[k]){
                count++
                if(count > 1){
                    anagram.set(words[j],count)
                }
            }
        }
    }
    return anagram.display()
}


countAnagrams(sentence)