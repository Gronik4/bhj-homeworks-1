const progres = document.getElementById('progress');
    
document.getElementById('form').onsubmit = function(e) {
    e.preventDefault();
    let input = this.elements.file;
    let file1 = input.files[0];
 
    if(file1) {
        load(file1);
    }
}
    
function load(file1) {
    let xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
        let fate = event.loaded/event.total;
        progres.setAttribute('value', fate);
    }
    let formData = new FormData();
    formData.append('file', file1);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
}
