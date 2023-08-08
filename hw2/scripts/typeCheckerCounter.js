function findTypeChecker(array){
    
    if(!Array.isArray(array))
    throw new Error("this is not array");

    let result = {}
    for(let index=0;index<array.length; index++){
           let data  =  array[index];

           if(Array.isArray(data)){
            let isUndefined = result.array;

            if(isUndefined===undefined)
            result.array=1;

            else result.array=result.array+1
           }

           else {
            let datatype =  typeof(data);
            let isUndefined = result[datatype];

            if(isUndefined===undefined)
            result[datatype]=1;


            else result[datatype]=result[datatype]+1;

           }

    }
    Object.keys(result).forEach((key,index) => {
                console.log(`key is : ${key} with number of repeated : ${result[key]}`)
    })
    
}

const array  = [53,'Alex',6,true,[1,2],undefined,null,{name:"ali"}];
findTypeChecker(array);