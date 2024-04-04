function tOH(n,start,end,mid){
    if(n===1){
        console.log(`Move 1 from ${start} to ${end} `)
        return
    }
    tOH(n-1,start,mid,end)
    console.log(`Move ${n} from ${start} to  ${end}`)
    tOH(n-1,mid,end,start)
}

tOH(4,'A','C','B')

//Big O = O(2^n)