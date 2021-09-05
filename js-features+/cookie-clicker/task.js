const clickerCounter = document.getElementById('clicker__counter');
let quantityClick = Number(clickerCounter.textContent);
const cookie = document.getElementById('cookie');
const clickSpeed = document.getElementById('click_speed');
let oldTime = Date.now();

function clickСount(){
    let newTime = Date.now();
    let chengeDat = (newTime - oldTime)/1000;
    clickSpeed.textContent = (1/chengeDat).toFixed(2);
    oldTime = newTime;
    cookie.width = 250;
    quantityClick += 1;
    clickerCounter.textContent = quantityClick;
    if(cookie.width == 250) {setTimeout(() => cookie.width = 200 , 120);} 
}

cookie.onclick = clickСount;
