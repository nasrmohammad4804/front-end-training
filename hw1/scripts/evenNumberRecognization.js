let number = Number(prompt("enter you  number"));

if (isNaN(number)) throw new Error("you must be enter valid number");

if(number%2==0){
    console.log('this number is even')
}
else console.log("this number is odd")