let clickerCounter = document.getElementById('clicker__counter');
let quantityClick = Number(clickerCounter.textContent);
let cookie = document.getElementById('cookie');
let clickSpeed = document.getElementById('click_speed');
let oldTime = Date.now();

function ClickСount(){
    let newTime = Date.now();
    let chengeDat = newTime - oldTime;
    clickSpeed.textContent = chengeDat/100;
    oldTime = newTime;
    cookie.width = 250;
    quantityClick += 1;
    clickerCounter.textContent = quantityClick;
    setTimeout(() => cookie.width = 200 , 120);
}

cookie.onclick = ClickСount;
