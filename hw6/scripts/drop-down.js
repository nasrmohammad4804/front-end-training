const colorBox = document.querySelector('.color-box');
const body=document.body;

colorBox.addEventListener('change',(event) => {
    let value =  event.target.value;
    body.style.backgroundColor=value;
})
