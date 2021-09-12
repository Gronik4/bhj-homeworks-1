const chat = document.getElementById('chat-widget__messages');
const ansedBot = ['Добрый день! Чем могу помочь?', 'Вы уверены?', 'Ищу ответ...',
    'Соединяю со специалистом...', 'К сожалению все специалисты заняты. Попробуйте через годик...']
document.querySelector('.chat-widget__side-text').addEventListener('click', showM); 
document.addEventListener('keyup', sendMessage);
let count = 0;

function time() {
    let time = new Date();
    return (time.getHours()+' : '+time.getMinutes());
}

function showM() {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
    setTimeout(() =>{chat.innerHTML +=`
    <div class="message">
        <div class="message__time">${time()}</div>
        <div class="message__text">${ansedBot[count++]}</div>
    </div>
    `;}, 400);
}

function sendMessage(event) {
    if(event.key == "Enter"){
        let textcl = document.getElementById('chat-widget__input').value;
        if(textcl == " "){ return;}
        chat.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${time()}</div>
        <div class="message__text">${textcl}</div>
        </div>
        `;
        document.getElementById('chat-widget__input').value = " ";
        remarkBot();
    }
}

function remarkBot() {
    setTimeout(() =>{chat.innerHTML +=`
        <div class="message">
            <div class="message__time">${time()}</div>
            <div class="message__text">${ansedBot[count++]}</div>
        </div>
        `;
        chat.lastElementChild.scrollIntoView(false);
    }, 400);
    if(count == (ansedBot.length)){count = 1;}
 }