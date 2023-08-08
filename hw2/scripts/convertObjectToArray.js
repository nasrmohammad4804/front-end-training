function convertObjectToArray(object){

    if(typeof(object)!=='object')
    throw new Error('this is dont have object type');

    // return Object.entries(object);

    let result =[]
    Object.keys(object).forEach(key =>{
       const value =  object[key];
       result.push([key,value])
    })
    return result;

}

console.log(convertObjectToArray({a:1,b:2}))