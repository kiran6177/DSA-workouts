function countOcc(arr,element){
    let count = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === element){
            count++
        }
    }
    return count
}

console.log(countOcc([1,3,3,4,2,6],3))