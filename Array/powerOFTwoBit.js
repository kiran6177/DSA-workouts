function powerOfTwoBit(n){
    if(n < 1){
        return false
    }
    return (n & (n-1)) === 0
}
console.log(powerOfTwoBit(4))

// Big O = O(1)