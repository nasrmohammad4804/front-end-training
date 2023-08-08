function findTypeChecker(array){
    
    if(!Array.isArray(array))
    throw new Error("this is not array");

    for(let index=0;index<array.length; index++){
           let data  =  array[index];

           if(Array.isArray(data))
           console.log('array');

           else console.log(typeof data)
    }
}


const array  = [53,'Alex',6,true,[1,2],undefined,null,{name:"ali"}];
findTypeChecker(array)