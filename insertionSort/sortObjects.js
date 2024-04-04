const persons = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

function sortObjects(objarr){
    for(let i = 1 ; i < objarr.length ; i++){
        const inst = objarr[i]
        let j = i - 1
        while(j >=0 && objarr[j].name > inst.name){
            objarr[j+1] = objarr[j]
            j--
        }
        objarr[j+1] = inst
    }
    return objarr
}

console.log(sortObjects(persons))