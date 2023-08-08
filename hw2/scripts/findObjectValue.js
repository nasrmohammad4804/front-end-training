function getObjectValues(data){

    if(typeof(data)!=='object'){
        throw new Error('this is dont have object type');
    }

    return Object.values(data);
}

console.log(getObjectValues({a:1,b:2}))