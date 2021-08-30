const objectLink = document.querySelectorAll('.menu__link');
for( let link of objectLink) {
    if(link.matches('a[href=""]')){ 
        link.onclick = func;
    }    
}
function func(){
    let menus = this.closest('li');
    let menu = menus.querySelector('ul');
    if(menu.classList.contains('menu_active')) {
        menu.classList.remove('menu_active');
        return false;
    } else {
        let actives = document.querySelectorAll('.menu');
        for(let activ of actives){
            if(activ.matches('ul[class$="menu_active"]')){activ.classList.remove('menu_active');}
        }
        menu.classList.add('menu_active'); 
    }
    return false;
}