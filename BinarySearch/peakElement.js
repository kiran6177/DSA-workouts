function peakElement(arr){
    let max = 0
    function search(arr,max,left,right){
        if(left > right){
            return - 1
        }
        let mid = Math.floor((left+right)/2)
        if(arr[mid] > arr[mid + 1]){
            max = arr[mid]
            search(arr,max,mid + 1,right)
        }else{
            search(arr,max,mid + 1,right)
        }
    }
    search(arr,max,0,arr.length - 1)
    return max
}

console.log(peakElement([1,2,3,4,5]))