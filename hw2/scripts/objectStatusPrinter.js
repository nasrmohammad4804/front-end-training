function printObjectStatus(array){

    if(!Array.isArray(array))
    throw new Error('this is not array type')

    array.forEach(value => {
       const isValid=   checkHasValidFormat(value);

       if(!isValid)
       throw new Error('object doesnt have proper property');

       printStatus(value);
    })
}

function checkHasValidFormat(value){
    if(typeof(value)!=='object')
    throw new Error('this is not object type')

    const result1= value.hasOwnProperty('author');
    const result2= value.hasOwnProperty('title');
    const result3=value.hasOwnProperty('readingStatus');

    return result1 && result2 && result3;
}

function printStatus(value){
        const status = value.readingStatus;
        const title =value.title;
        const author= value.author;

        if(status===true){
            console.log(`Alraedy read '${title}' by '${author}'`)
        }
        else {
            console.log(`You still need to read '${title}' by '${author}'`)
        }
}

printObjectStatus(
    [
        {
            author:'Bill Gates',
            title:'The Road Ahead',
            readingStatus:true
        },
        {
            author:'Steve Jobs',
            title:'Walter Isaacson',
            readingStatus:true
        },
        {
            author:'Suzanne Collins',
            title:'Mockingjay: The Final Book of the Hunger Games',
            readingStatus:false
        }
    ]
)