function stair(n){
    if(n== 0){
        return 0
    }
    let num = [1,2]
    for(let i = 2 ; i <= n ;i++){
        num[i] = num[i-1] + num[i-2]
    }
    return num[n-1]
}
console.log(stair(4))
console.log(stair(3))
console.log(stair(2))
console.log(stair(1))
console.log(stair(0))

//Big O = O(n)