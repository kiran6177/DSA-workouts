const persons = [
    { name: 'Razal', age: 30 },
    { name: 'Ashin', age: 25 },
    { name: 'Jithu', age: 35 },
    { name: 'Dalvin', age: 25 },
    { name: 'Vrishab', age: 25 },
    { name: 'Geo', age: 25 },
    { name: 'Amal', age: 25 },

];
function sortObject(arr){
    if(arr.length < 2){
        return arr
    }
    let mid =  Math.floor(arr.length / 2)
    let left = arr.slice(0,mid)
    let right =  arr.slice(mid)
    return merge(sortObject(left),sortObject(right))
}
function merge(left,right){
    let sorted = []
    while(left.length && right.length){
        if(left[0].name < right[0].name){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}
console.log(sortObject(persons))