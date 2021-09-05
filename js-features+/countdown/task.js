const timer = document.getElementById('timer');
let time = Number(timer.textContent);
function Timer(){
    const status = document.getElementById('status');
    
    if(time !== 0){
        time -= 1;
        let nowTime = time < 10 ? '0'+ time : time;
        status.textContent = '00:00:' + nowTime;
    } else {
        clearInterval(timerId);
        alert('Вы победили!!!');
        let link = document.getElementById('a');
        link.href = 'https://learn.javascript.ru/';
        link.click();
        
    }
}

let timerId = setInterval(Timer, 1000);