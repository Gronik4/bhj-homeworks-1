const objectLink = document.querySelectorAll('.menu__link');
for( let link of objectLink) {
    if(link.matches('a[href=""]')){ 
        link.onclick = func;
    }    
}
function func(){
    let menus = this.closest("li");
    let menu = menus.querySelector('ul');
    menu.classList.toggle('menu_active')
    return false;
}