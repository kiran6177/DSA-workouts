let array = ['banana', 'apple', 'orange', 'grapes', 'pineapple']

function sortDesc(arr){
    for(let i = 1 ; i < arr.length ; i++){
        let inst = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] < inst){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = inst
    }
    return arr
}
console.log(sortDesc(array))
