const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
hendler(main, success);

function hendler(one, two) {
    let active = one.closest('.modal');
    let close = two.closest('.modal');
    close.classList.remove('modal_active');
    active.classList.add('modal_active');
    let btn = one.querySelector('.btn');
    let hidd = one.querySelector('.modal__close');
    btn.onclick = showPop;
    hidd.onclick = closePop;
    return active;
}

function showPop() {
    if(main.classList.contains('modal_active')) {
        hendler(success, main); 
    } else {
        hendler(main, success);
    }
}

function closePop() {
    if(main.classList.contains('modal_active')) {
        main.classList.remove('modal_active');
    } else {
        success.classList.remove('modal_active');
    }
}