function lastOcc(arr,t){
    function search(arr,t,left,right){
        if(left > right){
            return
        }
        let result = -1
        let mid = Math.floor((left+right)/2)
        if(t === arr[mid]){
            result = mid
            left = mid + 1
        }else if(t < arr[mid]){
            return search(arr,t,left,mid-1)
        }else{
            return search(arr,t,mid + 1 ,right)
        }
        return result
    }
    return search(arr,t,0,arr.length - 1)
}

console.log(lastOcc([1,1,2,3,3,4,4,5,6],1))
console.log(lastOcc([1,1,2,3,3,4,4,5,6],4))

