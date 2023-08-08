 function getObjectKeys(data){

    if(typeof(data)!=='object')
    throw new Error('this is dont have object type');


    let  keys  = Object.keys(data);
    return keys;
}
console.log(getObjectKeys({a:1,b:2}))