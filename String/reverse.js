function rev(str){
    let string = ''
    for(let i = 0 ; i < str.length ; i++){
        string += str[str.length - i - 1]
    }
    return string
}

console.log(rev("hello"))