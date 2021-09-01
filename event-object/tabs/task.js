const navigator=document.querySelectorAll('.tab');
const arrNav=Array.from(navigator);
const content=document.querySelectorAll('.tab__content');
const arrCont=Array.from(content);
for(let nav of arrNav){
   nav.addEventListener(`click`, hendlerNav);
}
function hendlerNav(event) {
   let target=event.target;
   let index=arrNav.indexOf(target);
   for(let des of arrNav){
      des.classList.remove('tab_active');
   }
   target.classList.add('tab_acteve');
   for(let des of content){
      des.classList.remove('tab__content_active');
   }
   arrCont[index].classList.add('tab__content_active');
}