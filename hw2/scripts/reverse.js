function reverse(array){
    
    if(!Array.isArray(array))
    throw new Error('this is not array');

    let reversedArray=[];
    const lastIndex= array.length-1;
    
    for(let index = lastIndex; index>=0; index--){
        reversedArray.push(array[index]);
    }

    console.log(reversedArray)
}


reverse([1,2,3,4])