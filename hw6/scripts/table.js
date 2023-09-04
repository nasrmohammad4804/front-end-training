let body=document.body;
let table = document.createElement('table');
tableClass = table.classList;
tableClass.add('table');


const fixedNumber= 5;

for(let row= 1; row<=fixedNumber; row++){

    let tr= document.createElement('tr');

    for(let column=1; column<=fixedNumber; column++){
       let td =  document.createElement('td');
        td.textContent=`${column}:${row}`;
        td.classList.add('border-2px');

        if(column==row){
            td.classList.add('red-background');
        }

        tr.append(td);
    }

    table.append(tr);
}
body.append(table);