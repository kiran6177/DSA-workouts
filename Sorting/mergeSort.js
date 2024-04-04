function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sorted = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

console.log(mergeSort([3,1,5,8,1,0,4]))

//recursive. so, base condition needed.
//find mid index and slice to left and right array and do merging.(which actually sorts the array and merge)
//on merge, least element from first index of both arrays are shifted and pushed to new array until length is null.

//time - O(nlog(n))
//no issues of time if it is sorted or not.Just split and merge.
//space - O(n)