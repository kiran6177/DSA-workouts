const persons = [
    { name: 'Razal', age: 30 },
    { name: 'Ashin', age: 25 },
    { name: 'Jithu', age: 35 },
    { name: 'Dalvin', age: 25 },
    { name: 'Vrishab', age: 25 },
    { name: 'Geo', age: 25 },
    { name: 'Amal', age: 25 },

];

function sortObjects(objarr , left = 0 , right = objarr.length - 1){
    if(left > right){
        return
    }
    let mid = partition(objarr,left,right)
    sortObjects(objarr,left,mid - 1)
    sortObjects(objarr,mid + 1,right)
    return objarr
}

function partition(arr,left,right){
    let pivot = arr[left]
    let swapIndex = left
    for(let i = left ; i <= right ; i++){
        if(arr[i].name < pivot.name){
            swapIndex++
            if(swapIndex != i){
                [arr[i],arr[swapIndex]] = [arr[swapIndex],arr[i]]
            }
        }
    }
    if(swapIndex != left){
        [arr[left],arr[swapIndex]] = [arr[swapIndex],arr[left]]
    }
    return swapIndex
}

console.log(sortObjects(persons));