

function flattArray(array){

    array.forEach(element => {
        if(Array.isArray(element))
        flattArray(element);

        else console.log(element)
    });
}

// solution 2
function flattArray(array){

    console.log(array.flat(3))
}


flattArray(["john Doe",["Lily Rose",["salary",["baseSalary",23000]]]])