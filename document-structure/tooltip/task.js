let placeClick = document.querySelectorAll('.has-tooltip');
for(let item of placeClick) {
   item.addEventListener('click', handlerHint);
}

function handlerHint(event) {
   event.preventDefault();
   let hint = event.target.title;
   let placeE = event.target.closest('a');
   if(placeE.nextSibling.classList){placeE.nextSibling.remove(); return;}
   let deletHints = document.querySelectorAll('.tooltip')
   for(let del of deletHints) {
      del.remove();
   }
   let top = placeE.getBoundingClientRect().bottom + 'px';
   let left = placeE.getBoundingClientRect().left + 'px';

   let div = document.createElement('div');
   div.className = 'tooltip';
   div.style = `left: ${left}; top: ${top};`;
   div.setAttribute("data-position", "left");
   div.innerHTML = `${hint}`;
   div.classList.add('tooltip_active');
   placeE.insertAdjacentHTML('afterend', div.outerHTML);
}