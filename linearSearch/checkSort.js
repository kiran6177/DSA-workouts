function checkSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
}
console.log(checkSort([1,2,3,4,5]))
console.log(checkSort([6,7,1,2,3,4,5]))