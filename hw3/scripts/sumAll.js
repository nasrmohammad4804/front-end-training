
const sumAll  = (number) => {

    if(isNaN(number))
        throw new Error('this input is not number');
    
    if(number<1) 
    throw new Error('this is not valid number');

    let result =0;

    for(let index=1; index<=number; index++)
        result+=index;

        return result;
}

console.log(sumAll(20))