let items = document.querySelector('.item');
const loder = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function() {
   if(xhr.readyState ===xhr.DONE){
      let valutes = xhr.response.response.Valute;
      let arr = Object.values(valutes);
      loder.classList.remove('loader_active');
      for(let item of arr) {
         let html = `<div style="display: flex;">
            <div class="item__code">
                ${item.CharCode}
            </div>
            <div class="item__value">
                ${item.Value}
            </div>
            <div class="item__currency">
                руб
            </div>
        </div>
            `;
      items.insertAdjacentHTML('beforeend', html);
      items.style.display = 'block';
      }
   }
};