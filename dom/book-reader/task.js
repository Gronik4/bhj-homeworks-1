const book = document.getElementById('book');
const fontSize = book.querySelectorAll('.font-size');
const control = book.querySelectorAll('.color');
const arrTextColor = ['book_color-black', 'book_color-gray', 'book_color-whitesmoke'];
const arrBgColor = ['book_bg-black', 'book_bg-gray', 'book_bg-white'];

for(let item of fontSize) {
    item.addEventListener('click', hendlerSize);
}
for(let i of control){
    i.addEventListener('click', hendlerColor);
}

function hendlerSize(event) {
    event.preventDefault();
    let mark = event.target;
    for(let item of fontSize){
        item.classList.remove('font-size_active');
    }
    mark.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');
    switch(mark.dataset.size) {
        case 'small':    
            book.classList.add('book_fs-small');
        break;

        case 'big':
            book.classList.add('book_fs-big');
        break;
    }
}

function hendlerColor(event) {
    event.preventDefault();
    let mark = event.target;
    let typeControl = mark.closest('.book__control');
    let arr = Array.from(typeControl.querySelectorAll('.color'));
    let index = arr.indexOf(mark);
    for(let i of arr){
        i.classList.remove('color_active');
    }
    mark.classList.add('color_active');
    let desired = typeControl.classList.contains('book__control_color')? arrTextColor : arrBgColor;
     
    let [a, b, c] = desired;
    book.classList.remove(`${a}`, `${b}`, `${c}`);
    book.classList.add(desired[index]);
}