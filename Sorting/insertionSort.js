function insertionSort(arr){
    for(let i = 1 ; i < arr.length ; i++){
        let inst = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > inst){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = inst
    }
    return arr
}

console.log(insertionSort([4,1,9,0,3]))

//with 1st element in sorted set(<j), compares with the next element(i) after sorted.
//swap it to left until it is sorted.