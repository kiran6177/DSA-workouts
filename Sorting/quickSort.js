function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([8,15,2,3,0,9]))

//base condition of length < 2.(recursion)
//considering last element as pivot element.
//shifting smaller elements of pivot to left array and larger to right array.
// then, combine in as left,pivot,right by doing recursion.
//time - average - O(nlogn) worst - O(n^2)(sorted)
//space - O(n)