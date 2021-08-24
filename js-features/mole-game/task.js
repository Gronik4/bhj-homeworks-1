const deadObject = document.getElementById('dead');
let dead = Number(deadObject.textContent);
const lostObject = document.getElementById('lost');
let lost = Number(lostObject.textContent);
let text;
for(let i = 1; i < 10; i++) {
    let numberId ='hole' + i;
    let hole = document.getElementById(`${numberId}`);
    hole.onclick = getHole;
    
}
function getHole() {
    const ids = document.getElementById(this.id);
    if(ids.classList.contains( 'hole_has-mole' )){
        dead += 1;
        text = 'Ура!!! Победа!!!'
        if(dead == 10){
        outputResalt(text);
        } else {
            deadObject.textContent = dead;
        }  
    }else{
        lost += 1;
        text = 'Увы!! Вы проиграли!'
        if(lost == 5){
        outputResalt(text);
        } else {
            lostObject.textContent = lost;
        } 
    }
}

function outputResalt(text) {
    alert(text);
        lost = 0;
        dead = 0;
        deadObject.textContent = 0;
        lostObject.textContent = 0;
}