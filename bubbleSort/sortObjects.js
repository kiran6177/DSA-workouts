const persons = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

function sortObjects(obj){
    let swapped
    do{
        swapped = false
        for(let i = 0 ; i < obj.length - 1 ; i++){
            if(obj[i].name > obj[i + 1].name){
                [obj[i],obj[i+1]] = [obj[i+1],obj[i]]
                swapped = true
            }
        }
    }while(swapped)

    return obj
}

console.log(sortObjects(persons))