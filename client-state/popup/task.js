const modal = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

window.onload = function() {
    /*
    Это нагуглил и оставил для себя. Можно??
    if (navigator.cookieEnabled === false){
        alert("Cookies отключены!");
    } else {alert('Включены');}
    */
    if(cookValue("key") == "noModal"){return;}
    modal.classList.add('modal_active');
}

close.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'key=noModal';
})

const cookValue = (name) => {
    const value = ";" + document.cookie;
    let parts = value.split(";" + name +"=");
    if(parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();
    }
}