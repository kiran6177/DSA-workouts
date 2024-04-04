function countOcc(arr,t){
    let count = 0
    function search(arr,t,left,right){
        if(left > right){
            return
        }
        let mid = Math.floor((left+right)/2)
        if(arr[mid] === t){
            count++
            search(arr,t,left,mid - 1)
            search(arr,t,mid + 1,right)
        }else if(t < arr[mid]){
            search(arr,t,left,mid - 1)
        }else if(t > arr[mid]){
            search(arr,t,mid + 1,right)
        }
        
    }
    search(arr,t,0,arr.length - 1)
    return count
}
console.log(countOcc([1,1,2,3,3,3,4,4,5,6],6))
console.log(countOcc([1,1,2,3,3,3,4,4,5,6],3))

