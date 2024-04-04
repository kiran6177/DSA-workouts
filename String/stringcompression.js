function compression(str){
    let newString = ''
    let count = 1
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === str[i+1]){
            count++
        }else{
            newString += str[i] + count
            count = 1
        }
    }
    return newString
}

console.log(compression("aabcccc"))