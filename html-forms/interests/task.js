const interests = document.querySelector('ul').children; //<li class="interest">
for(let item of interests) {
    item.querySelector('label').addEventListener('click', chekMain);
    let labels_1 = item.querySelector('ul').children;
    for(let i of labels_1) {
        i.querySelector('label').addEventListener('click', chekMain);
    }
}

function chekMain(event) {
    let et = event.target;
    if(et.hasAttribute("checked")) {
        et.removeAttribute("checked");
    } else {
        et.setAttribute("checked", "checked");
    }
    if(!et.closest('ul').classList.contains('interests')) { // Не <ul class="interest interests_active">
        let inputs = et.closest('label').nextElementSibling.children; //<ul class="interests interests_active"><li class="interest">
        if(et.hasAttribute('checked')) {
            for(let i of inputs) {
                i.querySelector('input').setAttribute("checked", "checked");//Ставим чеки на глубокие input-ы
            }
        }else{
            for(let i of inputs) {
                i.querySelector('input').removeAttribute("checked"); //Убираем чеки с глубоких input-ов
            }
        }
    } else {
        let counter = 0;
        let active = et.closest('.interests_active');
        let mainInput = active.previousElementSibling.querySelector('.interest__check');
        let interestObject = active.querySelectorAll('.interest');
        for(let j of interestObject) {
            if(j.querySelector('input').hasAttribute("checked")) {counter += 1;}
        }
        switch(counter) {
            case 2:
                mainInput.indeterminate = false;
                mainInput.setAttribute("checked", "checked");
            break;
            case 1:
                mainInput.indeterminate = true;
            break;
            default:
                mainInput.indeterminate = false;
                mainInput.removeAttribute("checked");
        }
        
    }
}