const rotatorObject=document.querySelectorAll('.rotator__case');
const arrRotator=Array.from(rotatorObject);
const speedObject=document.querySelectorAll('[data-speed]');
const arrSpeed=Array.from(speedObject);
const colorObject=document.querySelectorAll('[data-color]');
const arrColor=Array.from(colorObject);
let allTime = 0;
for(item of arrSpeed){
    allTime += Number(item.dataset.speed);
}

/*function chengeText(time, j){
   
   setTimeout(() => {
    for(let dez of rotatorObject){
        dez.classList.remove('rotator__case_active');
     }
    arrRotator[j].classList.add('rotator__case_active');
    arrRotator[j].style.color=`${arrColor[j].dataset.color}`;
    }, time);
}*/

setInterval(() =>{
    for(let i = 0; i < arrRotator.length; i++){
        arrRotator[i].classList.add('rotator__case_active');
    arrRotator[i].style.color=`${arrColor[i].dataset.color}`;
    }
}, 1000);