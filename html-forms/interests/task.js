const interests = document.querySelector('ul').children; //<li class="interest">
for(let item of interests) {
    item.querySelector(' input').addEventListener('click', chekMain);
    let labels_1 = item.querySelector('ul').children;
    for(let i of labels_1) {
        i.querySelector('input').addEventListener('click', chekChildren);
    }
}

function chekMain(event) {
   let its = checkeder(event);
   let inputs = its.closest('label').nextElementSibling.children;
   if(its.checked){
      for(let i of inputs) {
         i.querySelector('input').checked = true;//Ставим чеки на глубокие input-ы
      } 
   } else {
      for(let i of inputs){
         i.querySelector('input').checked = false;
      }
   its.checked = false;
   }
}

function chekChildren(event) {
   let itss = checkeder(event);   
   let counter = 0; 
   let active = itss.closest('.interests_active');
   let mainInput = active.previousElementSibling.querySelector('input');
   let inputs = active.querySelectorAll('input');
   for(let j of inputs) {
      if(j.checked) {
         counter += 1;
       }
   }
   switch(counter) {
      case 2:
         mainInput.indeterminate = false;
         mainInput.checked= true;
      break;
      case 1:
         mainInput.indeterminate = true;
         mainInput.checked = false;
      break;
      default:
         mainInput.indeterminate = false;
         mainInput.checked = false;
   }
}

function checkeder(e) {
   let rezalt = e.target;
   if(rezalt.hasAttribute("checked")) {
      rezalt.removeAttribute("checked");
   } else {
      rezalt.setAttribute("checked", "checked");
   }
   return rezalt;
}