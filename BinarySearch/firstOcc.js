function firstOcc(arr,t){
    let left = 0
    let right = arr.length -1
    let result = -1
    for(let i = left ; i <= right ; i++){
        let mid = Math.floor((left+right)/2)
        if(arr[mid] === t){
            result = mid
            right = mid-1
        }else if(t < arr[mid]){
            right = mid - 1
        }else{
            left = mid + 1 
        }
    }
    return result
}

console.log(firstOcc([1,1,2,3,3,4,4,5,6],4))