function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i+1] < arr[i]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    }while(swapped)
    return arr
}

console.log(bubbleSort([3,4,2,1,9]))


//Comparing i and  i+1 elements thorugh the loop(neighbouring elements)
//largest number sorted to right in each completion of for loop