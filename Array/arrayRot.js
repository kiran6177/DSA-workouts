function arrayRotation(arr,k){
    let newArray = new Array(arr.length)
    for(let i = 0 ; i < arr.length ; i++){
        newArray[(i + k)% arr.length] = arr[i]
    }
    return newArray
}

console.log(arrayRotation([1,2,3,4,5],3))