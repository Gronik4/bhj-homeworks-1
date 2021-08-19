let timer = document.getElementById('timer');
let tim = Number(timer.textContent);
function Timer(){
    let status = document.getElementById('status');
    
    if(tim !== 0){
        tim -= 1;
        let nowTime = tim < 10 ? '0'+ tim : tim;
        status.textContent = '00:00:' + nowTime;
    } else {
        clearInterval(timerId);
        alert('Вы победили!!!');
        let link = document.getElementById('a');
        link.href = 'https://learn.javascript.ru/';
        link.click();
        
    }
}

let timerId = setInterval(Timer, 100);