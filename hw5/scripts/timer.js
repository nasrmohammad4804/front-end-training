let value = Number(prompt('enter your number'));

if(isNaN(value))
throw new Error("your value is not number");

if(value<1){
    throw new Error("your number must be greater or equal than one!");
}

let intervalId =setInterval(() => {
   
    if(value==0){
        clearInterval(intervalId);
    }

    console.log(value);

    value--;
},1000)