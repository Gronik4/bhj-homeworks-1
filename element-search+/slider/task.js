// prev - левая, next - правая
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
prev.onclick = hendlerPrev;
next.onclick = hendlerNext;
const imagesObject = document.querySelectorAll('.slider__item');
let images = Array.from(imagesObject);
// Для необязательной задачи
const dotsObject = document.querySelectorAll('.slider__dot');
for(let i=0; i< dotsObject.length; i++) {
    let name = 'name'+i;
    dotsObject[i].id = name;
    dotsObject[i].onclick = clickerDot;
}
let dots = Array.from(dotsObject);

// Задача минимум - необходимая
function hendlerPrev() {
    let indexP = prepareHendler(-1);
    hendlerDot(indexP);
    images[indexP].classList.add('slider__item_active');
}
function hendlerNext() {
    let indexN = prepareHendler(1);
    hendlerDot(indexN);
    images[indexN].classList.add('slider__item_active');
}

function prepareHendler(a) {
    let imgActive = document.querySelector('.slider__item_active');
    imgActive.classList.remove('slider__item_active');
    let indexArr = images.indexOf(imgActive) + a;
    let index;
    switch(indexArr) {
        case images.length : index = 0;
        break;
        case -1: index = images.length - 1;
        break;
        default: index = indexArr;
    }
    return index;
}

// Задача не обязательная
function hendlerDot(dot){
    let activeDot = document.querySelector('.slider__dot_active');
    activeDot.classList.remove('slider__dot_active');
    dots[dot].classList.add('slider__dot_active');
}

function clickerDot() {
    let place = document.getElementById(this.id);
    let number = dots.indexOf(place);
    let imgActive = document.querySelector('.slider__item_active');
    imgActive.classList.remove('slider__item_active');
    images[number].classList.add('slider__item_active');
    hendlerDot(number)
}