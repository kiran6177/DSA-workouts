function replace(str , n){
    const newCharSet = []
    for(let i = 0 ; i < str.length ; i++){
        if(/[a-zA-Z]/.test(str[i])){
            newCharSet.push(String.fromCharCode(str.charCodeAt(i) + n))
        }else{
            newCharSet.push(str[i])
        }
    }
    return newCharSet.join('')
}

console.log(replace("Hello World!",3))