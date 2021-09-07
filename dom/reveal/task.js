window.addEventListener('scroll', showElement);
const objects = document.querySelectorAll('.reveal')
function showElement() {
    for(let item of objects) {
       if(item.getBoundingClientRect().bottom < window.innerHeight) {
           item.classList.add('reveal_active');
           
       } else {
        item.classList.remove('reveal_active'); 
       }
    }
}