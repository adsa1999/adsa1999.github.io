var miHTML = document.querySelector('html');
var miBody = document.querySelector('body');
//var miImage = document.querySelector('img');

//miImage.onclick = function () {
//    var miSrc = miImage.getAttribute('src');
//    if (miSrc === 'images/firefox-logo.png') {
//        miImage.setAttribute('src', 'images/firefox-dev-logo.png');
//        miHTML.setAttribute('background', '#FFFF00');
//    }
//    else {
//        miImage.setAttribute('src', 'images/firefox-logo.png');
//    }
//}

var miButton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es Cool,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    establecerNombreUsuario;
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es Cool, ' + nombreAlmacenado;
}

miButton.onclick = function () {
    establecerNombreUsuario();
}
    