function removeOuter(str){
    let stack = []
    let result = ''
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === '('){
            if(stack.length){
                result += str[i]
            }
            stack.push(str[i])
        }else{
            stack.pop()
            if(stack.length){
                result += str[i]
            }
        }
    }
    return result
}

const string = '(()())(())'

console.log(removeOuter(string))