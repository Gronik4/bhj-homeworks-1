const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

let ajax = new XMLHttpRequest(); 

form.onsubmit = function(e) {
    e.preventDefault();
    let formData = new FormData(form);
    ajax.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    ajax.responseType = "json";
    ajax.send(formData);
}

ajax.onload = function() {
    if(ajax.status != 200) {
        alert(`Ошибка ${ajax.status} : ${ajax.statusText}`);
    } else {
        if(!ajax.response.success) {
            alert('Неверный логин/пароль');
        } else {
            let idA = ajax.response.user_id;
            userId.textContent = idA;
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            localStorage.usaid = `${idA}`;
        }
    }
}
window.onload = function() {
    let controls = form.querySelectorAll('input');
    for(let item of controls) {
        item.value = "";
    }
    let keep = localStorage.usaid;
    if(keep) {
        userId.textContent = keep;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        localStorage.removeItem('usaid');//Это чтоб не совсем грустно было проверять
    } 
}