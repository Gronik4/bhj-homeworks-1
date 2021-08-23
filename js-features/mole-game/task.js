const deadObject = document.getElementById('dead');
let dead = Number(deadObject.textContent);
const lostObject = document.getElementById('lost');
let lost = Number(lostObject.textContent);
for(let i = 1; i < 10; i++) {
    let numberId ='hole' + i;
    let hole = document.getElementById(`${numberId}`);
    hole.onclick = getHole;
    
}
function getHole() {
    const ids = document.getElementById(this.id);
    if(ids.classList.contains( 'hole_has-mole' )){
        dead += 1;
        outputVictory();
    }else{
        lost += 1;
        outputLoss();
    }
}

function outputVictory(){
    if(dead == 10){
        alert('Ура!!! Победа!!!');
        lost = 0;
        dead = 0;
        deadObject.textContent = 0;
        lostObject.textContent = 0;
    } else {
        deadObject.textContent = dead;
    }    
}

function outputLoss() {
    if(lost == 5){
        alert('Увы!! Вы приграли!')
        lost = 0;
        dead = 0;
        deadObject.textContent = 0;
        lostObject.textContent = 0;
    } else {
        lostObject.textContent = lost;
    } 
}