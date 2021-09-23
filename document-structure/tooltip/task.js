let placeClick = document.querySelectorAll('.has-tooltip');
for(let item of placeClick) {
   item.addEventListener('click', handlerHint);
}

function handlerHint(event) {
   event.preventDefault();
   let hint = event.target.title;
   let placeE = event.target.closest('a');
   let placeHints = document.querySelectorAll('.tooltip')
   for(let del of placeHints) {
      del.remove();
   }
   let div = document.createElement('div');
   div.className = 'tooltip';
   div.style = 'left: 30%; top: 24%;';
   div.setAttribute("data-position", "left");
   div.innerHTML = `${hint}`;
   div.classList.add('tooltip_active');
   placeE.insertAdjacentElement('afterend', div);
   setTimeout(() => this.nextSibling.remove(), 1600);
}