let basket = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
let clearBut = document.querySelector('.clear_cart');
let cart = document.querySelector('.cart');
clearBut.addEventListener('click', clearBasket);
for(let item of products) {
   item.querySelector('.product__quantity-control_dec').addEventListener('click', changeQuantity);
   item.querySelector('.product__quantity-control_inc').addEventListener('click',changeQuantity);
   item.querySelector('.product__add').addEventListener('click', addBasket); 
}

function changeQuantity(e) {
    if(e.target.textContent.includes("-")) { 
        let number = Number(e.target.nextElementSibling.textContent);
        if((number--) <=  0) {
            return;
        } else {
            e.target.nextElementSibling.textContent = number;
        }
    } else {
        let number = Number(e.target.previousElementSibling.textContent);
        e.target.previousElementSibling.textContent = ++number; 
    }
}
function addBasket(e) {
    let value = e.target.previousElementSibling.querySelector('.product__quantity-value').textContent;
    if(value == 0){return;}
    let dateId = this.closest('.product').dataset.id;
    let imgSrc = this.closest('.product__controls').previousElementSibling.src;
    let cartProducts = Array.from(basket.querySelectorAll('.cart__product')); 
    let selected = cartProducts.find(select => select.dataset.id == dateId); 
    if(selected){
           let t = selected.querySelector('.cart__product-count').textContent;
           let total = Number(t) + Number(value);
           selected.querySelector('.cart__product-count').textContent = total;
    } else {
        if(cart.hasAttribute('hidden')) {
            cart.removeAttribute('hidden');
         }
         basket.innerHTML += `
          <div class="cart__product" data-id="${dateId}">
          <img class="cart__product-image" src="${imgSrc}">
          <div class="cart__product-count">${value}</div>
          </div>
         `;
    }
}

function clearBasket() {
  let cartProduct = basket.querySelectorAll('.cart__product');
  for(let del of cartProduct) {
     del.remove();
  }
   if(!cart.hasAttribute('hidden')) {
      cart.setAttribute('hidden','hidden');
   }
}