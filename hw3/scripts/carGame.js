function getArray(){
    return [
        '*','*','*','*','*','*','*','*','*','*'
    ]
}

const array = getArray();
let index=0;

let interval = setInterval(function(){
    
    if(index==10){
        clearInterval(interval);
        alert('game is done');
        return;
    }

    array[index]='🚗';

    console.log(array);
    array[index]='*';

    index++;
},500)