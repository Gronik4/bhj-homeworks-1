const tests = document.getElementById('editor');
const del = document.getElementById('del');
window.addEventListener('load', () => {
   if(localStorage.text) {
      tests.value = localStorage.text;
   }
})

window.addEventListener('beforeunload', () => {
   if(tests.value) {
      localStorage.text = tests.value;
   } 
})

del.addEventListener('click', () => {
   tests.value = " ";
   localStorage.removeItem('text');
})