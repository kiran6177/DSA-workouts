const datesArray = [new Date("2022-01-01"), new Date("2023-01-01"), new Date("2021-01-01")];

function sortDates(arr){
    let swapped
    do{
        swapped = false;
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    }while(swapped)
    return arr
}

console.log(sortDates(datesArray))