function checkInputDataIsValid(array,number){
    if(!Array.isArray(array))
        throw new Error('first parameter is not array');

    if(typeof(number)!=='number')
        throw new Error('second parameter is not number');

        array.forEach(value => {
 
            if(typeof(value)!=='number')
                throw new Error(`array with elment in index : ${index} is not number`)
        })
}

const result =   (array,number) => {
    checkInputDataIsValid(array,number);

    number = number.toString();

    for(let index=0;index<array.length; index++){
        let value = array[index].toString();
    

        if(value.includes(String(number)))
        return true;
    }
    return false;
}
console.log(result([17,1,77,20],8))