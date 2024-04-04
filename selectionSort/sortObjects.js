const persons = [
    { name: 'Razal', age: 30 },
    { name: 'Ashin', age: 25 },
    { name: 'Jithu', age: 35 },
    { name: 'Dalvin', age: 25 },
    { name: 'Vrishab', age: 25 },
    { name: 'Geo', age: 25 },
    { name: 'Amal', age: 25 },

];

function sortObjects(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let minIndex = i
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[j].name < arr[minIndex].name){
                minIndex = j
            }
        }
        if(minIndex != i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(sortObjects(persons))