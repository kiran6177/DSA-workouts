let array = ['banana', 'apple', 'orange', 'grapes', 'pineapple']

function stringSort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    }while(swapped)

    return arr
}

console.log(stringSort(array))