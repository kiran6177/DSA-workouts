function checkPal(str){
    let count = 0
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] != str[str.length - i - 1]){
            count++
        }
    }
    if(count === 0){
        return true
    }
    return false
}
console.log(checkPal("radar"))
console.log(checkPal("rdar"))