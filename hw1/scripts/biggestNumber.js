
let number1 = Number(prompt('enter you first number'));
let number2 = Number(prompt('enter you second number'));

if(isNaN(number1) || isNaN(number2))
throw new Error('your data is not number');


if(number1>number2){
    console.log('first number greater than second number')
}
else if(number2>number1){
    console.log('second number greater than first number')
}
else console.log('both number is equal')
