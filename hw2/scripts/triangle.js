function calculateTriangle(number){
    
    if(isNaN(number))
    throw new Error("this input is not number");
 
    return number * (number+1)/2;
}

console.log(calculateTriangle(6))