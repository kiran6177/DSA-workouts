function sumOfElements(arr){
    let sum = arr[0]
    if(arr.length < 2){
        return  arr[0]        
    }
    arr.shift()
    sum += sumOfElements(arr)
    return sum
}

console.log(sumOfElements([1,2,3,4]))