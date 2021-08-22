let deadObject = document.getElementById('dead');
let dead = Number(deadObject.textContent);
let lostObject = document.getElementById('lost');
let lost = Number(lostObject.textContent);
for(let i = 1; i < 10; i++) {
    let numberId ='hole' + i;
    let hole = document.getElementById(`${numberId}`);
    hole.onclick = getHole;
    
}
function getHole() {
    let ids = document.getElementById(this.id);
    if(ids.classList.contains( 'hole_has-mole' )){
        dead += 1;
        if(dead == 10){
            alert('Победа!!!');
            lost = 0;
            dead = 0;
            deadObject.textContent = 0;
            lostObject.textContent = 0;  
        } else {
            deadObject.textContent = dead;
        }
    }else{
        lost += 1;
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
}