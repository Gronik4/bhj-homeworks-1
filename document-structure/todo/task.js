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
        hendlerTask();
    }     
}

function removeTask() {
    this.closest('div').remove();
}

function saveTask() {
    hendlerTask();
}

function hendlerTask() {
    if(!input.value.trim()) {return;}
    let taskId = 't' + num;
    taskList.innerHTML += `<div class="task" id="${taskId}"><div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
        </div>
    `;
    let hendl = document.querySelectorAll('.task__remove');
    for(let del of hendl) {
        del.addEventListener('click', removeTask);
    }
    num++;
    input.value = '';
}