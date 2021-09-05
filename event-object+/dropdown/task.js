const dropdowns = document.querySelectorAll('.dropdown');
const lists = document.querySelectorAll('.dropdown__list');
for(dropdown of dropdowns) {
    dropdown.addEventListener('click', showMenu);
}


function showMenu(event) {
    for(let li of lists) {
        li.classList.remove('dropdown__list_active');
    }
    let valueEv = event.target;
    let dropdown = this.closest('.dropdown'); 
    let list = dropdown.querySelector('.dropdown__list')
    let value = dropdown.querySelector('.dropdown__value')
    list.classList.add('dropdown__list_active');
    if(value.textContent == valueEv.textContent){
        event.preventDefault();
        return false;
    } else {
        value.textContent=valueEv.textContent;
        list.classList.remove('dropdown__list_active');
        event.preventDefault();
        return false;
    }
}