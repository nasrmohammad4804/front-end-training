function findFibbonacci(number){

    const array=[];
    array.push(0);
    array.push(1);

    for(let index=2; index<number; index++)
        array[index]=array[index-1] + array[index-2];

    return array;
}

console.log(findFibbonacci(14))
