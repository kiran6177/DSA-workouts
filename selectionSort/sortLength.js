let array = ['banana', 'apple', 'orange', 'grapes','kiwi','avocado', 'pineapple']


function sortLength(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let min = i;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[j].length < arr[min].length){
                min = j
            }
        }
        if(min != i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}

console.log(sortLength(array))