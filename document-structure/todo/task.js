let input = document.getElementById('task__input');
let taskList = document.getElementById('tasks__list');
const buttAdd = document.getElementById('tasks__add');
buttAdd.setAttribute('type', 'button')// Чтобы при нажатии на Enter не срабатывал клик на кнопке
let num = 0;
buttAdd.addEventListener('click', saveTask);
document.addEventListener('keydown', addTask);

function addTask(event) {
    if(event.key == 'Enter') {
        event.preventDefault();
        if(!input.value) {return;}
        taskList.innerHTML += `<div class="task" id="${num}"><div class="task__title">${input.value}</div>
            <a href="#" class="task__remove" onclick="removeTask(${num});">&times;</a>
            </div>
        `;
        num++;
        input.value = '';
    }     
}

function removeTask(event) {
    let f= document.getElementById(event);
    f.remove();
}

function saveTask(event) {
}