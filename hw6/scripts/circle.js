let circleElement = document.querySelector('.circle');

window.addEventListener("mousemove",event => {
    circleElement.style.display='block';
    circleElement.style.position='absolute';
    circleElement.style.top=`${event.clientY}px`;
    circleElement.style.left=`${event.clientX}px`;    

})