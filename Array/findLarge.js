function findLarge(arr){
    let largest = arr[0]
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLarge([1,2,3,4,5]))