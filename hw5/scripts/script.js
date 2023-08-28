let printAfterThreeSecond;

let printMessageWithIntervalTwoSecond =() => {
    setInterval(() => {
        console.log('hello world');
    },2000);
}

let printMessageAfterThreeSecond =(message) => {
    let printAfterThreeSecond =setTimeout((text) => {
        console.log(text);
        clearInterval(printAfterThreeSecond);
    },3000,message);
}

let calculateSum = (value1,value2, calculationFunction) =>{

   return calculationFunction(value1,value2);
}

// TODO: question1
 printMessageWithIntervalTwoSecond();


// TODO: question2
printMessageAfterThreeSecond('Bye bye World');


// TODO: question3
let result = calculateSum(5,2,function(value1,value2){

    if(typeof(value1)!='number' || typeof(value2)!='number'){
        throw new Error('your input is not number');
    }
    return value1+ value2;
});
console.log(result);


