let array = ['banana', 'apple', 'orange', 'grapes','kiwi','avocado', 'pineapple']

function sortLength(arr){
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(sortLength(left),sortLength(right))
}

function  merge(left,right){
    let sorted = []
    while(left.length && right.length){
        if(left[0].length < right[0].length){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

console.log(sortLength(array))