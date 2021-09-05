const manager=document.querySelectorAll('.tab');
const arrNav=Array.from(manager);
const content=document.querySelectorAll('.tab__content');
const arrCont=Array.from(content);
for(let nav of arrNav){
   nav.addEventListener(`click`, hendlerNav);
}
function hendlerNav(event) {
   let target=event.target;
   let index=arrNav.indexOf(target);
   for(let dez of manager){
      dez.classList.remove('tab_active');
   }
   target.classList.add('tab_active');
   for(let des of content){
      des.classList.remove('tab__content_active');
   }
   arrCont[index].classList.add('tab__content_active');
}