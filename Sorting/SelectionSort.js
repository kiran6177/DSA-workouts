function selectionSort(arr){
    for(let i = 0; i < arr.length ; i++){
        let min = i;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min != i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([5,4,1,2,6]))

//setting i element as min, and comparing with all other and find the smallest.
//swap the smallest with i element.
//smallest is moved to left.
//loop until sorted.