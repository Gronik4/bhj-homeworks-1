let placeTitle = document.getElementById('poll__title');
let placeAnswers = document.getElementById('poll__answers');
let answers;
let voteId;
let xhr = new XMLHttpRequest();
let url = ' https://netology-slow-rest.herokuapp.com/poll.php';
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === xhr.DONE) {
        voteId = xhr.response.id;
        placeTitle.append(xhr.response.data.title);
        answers = xhr.response.data.answers;
        for(let item of answers) {
            let string = `<button class="poll__answer">
            ${item}
            </button>
            `;
            placeAnswers.insertAdjacentHTML('beforeend', string);
        }
        let butAnswer = document.querySelectorAll('.poll__answer');
        for(let st of butAnswer) {
            st.addEventListener('click', hendlerVoice);
        }
    }
}

function hendlerVoice(e) {
    alert('Спасибо, ваш голос засчитан!');
    let select = e.target.textContent.trim(); 
    let index = answers.indexOf(select);
    let stringForSend = `vote=${voteId}&answer=${index}`;

    const nextXhr = new  XMLHttpRequest();
    nextXhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    nextXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    nextXhr.responseType = 'json';
    nextXhr.send(stringForSend);
    nextXhr.onreadystatechange = function() {
        if(nextXhr.readyState === nextXhr.DONE) {
            let resalts = nextXhr.response.stat;
            while(placeAnswers.firstChild) {
                placeAnswers.removeChild(placeAnswers.firstChild);
            }
            let summ = 0;
            resalts.forEach(elem => summ += Number(elem.votes));
            console.log(summ); 
            for(let item of resalts){
                let string = `${item.answer}: <b>${((item.votes*100)/summ).toFixed(2)}%</b></br>`;
                placeAnswers.insertAdjacentHTML('beforeend', string);
            }
        }
    }
}