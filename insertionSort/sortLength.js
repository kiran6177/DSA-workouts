let array = ['banana', 'apple', 'orange', 'grapes','kiwi','avocado', 'pineapple']

function sortLength(arr){
    for(let i= 1 ; i < arr.length ; i++){
        let inst = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j].length > inst.length){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = inst
    }
    return arr
}

console.log(sortLength(array))