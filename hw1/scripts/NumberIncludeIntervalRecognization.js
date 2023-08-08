let first = Number(prompt("enter you  first"));
let second = Number(prompt("enter you  second"));
let third = Number(prompt("enter you  third"));

if(isNaN(first) || isNaN(second) || isNaN(third))
throw new Error('you must enter valid number for every 3 input')


if(first>second && first<third){
    console.log(true)
}
else console.log(false)