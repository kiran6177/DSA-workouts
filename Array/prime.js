function prime(n){
    if(n < 2){
        return false
    }
    else {
        let count = 0
        for(let i = 2; i < n ; i++){
            if(n%i === 0){
                count++
            }
        }
        if(count === 0){
            return true
        }
        else{
            return false
        }
    }
}

console.log(prime(3))

// Big O = O(n)