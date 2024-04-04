function per(ar){
    let perarr = []
    if(ar.length == 1){
        return ar
    }
    for(let i= 0; i < ar.length ;i++){
        for(let j = i+1;j < ar.length ; j++){
                perarr.push([ar[i],ar[j]])
        }
    }
    return perarr
}
const arr = [1,2,3]
console.log(per(arr))