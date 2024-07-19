// las imagenes de las casa 
var apartments = [
    { img: "img/lamolina.jpg", constructor: "Constructora de las Casas", length: 15, width: 20, pricePerSquareMeter: 2000 },
    { img: "img/miraflores.jpg", constructor: "Los Maldinis", length: 15, width: 10, pricePerSquareMeter: 2200 },
    { img: "img/ate.jpg", constructor: "Gonzales", length: 15, width: 12, pricePerSquareMeter: 2100 },
    { img: "img/chosica.webp", constructor: "Constructor Rio", length: 25, width: 25, pricePerSquareMeter: 2000 },
    { img: "img/comas.jpeg", constructor: "Constructura Llamita", length: 10, width: 13, pricePerSquareMeter: 1900 },
    { img: "img/independencia.jpeg", constructor: "Constructora Sideral", length: 11, width: 12, pricePerSquareMeter: 2000 },
    { img: "img/Olivos.jpeg", constructor: "Sideral Lujan Carrion", length: 20, width: 10, pricePerSquareMeter: 2200 },
    { img: "img/puentepiedra.jpeg", constructor: "Constructora Volcano House", length: 12, width: 13, pricePerSquareMeter: 2300 },
    { img: "img/san isidro.webp", constructor: "Constructora Los Chalacos", length: 11, width: 12, pricePerSquareMeter: 2100 },
    { img: "img/sanjuandemiraflores.jpeg", constructor: "Construcora Montalban", length: 13, width: 14, pricePerSquareMeter: 2000 }
];
// apartamento actual
var currentIndex = 0;
// hay elementos DOM
var imageElement = document.getElementById('image'); //Elemento de imagen
var constructorElement = document.getElementById('constructor'); //Elemento del nombre del constructor
var priceElement = document.getElementById('price'); // Elemento del precio del apartamento
var areaElement = document.getElementById('area'); // Elemento del área del apartamento
var messageElement = document.getElementById('message'); // Elemento del mensaje 
var prevButton = document.getElementById('prev'); // Boton de atras
var nextButton = document.getElementById('next'); // Boton de siguiente

// para actualizar la informacion de la casa 
function updateApartment() {
    var apt = apartments[currentIndex];
    var area = apt.length * apt.width;
    var price = area * apt.pricePerSquareMeter;

    imageElement.src = apt.img;
    constructorElement.textContent = apt.constructor;
    priceElement.textContent = "$" + price;
    areaElement.textContent = area + " m²";
}

// mensaje
function showMessage(msg) {
    messageElement.textContent = msg;
    setTimeout(function() { messageElement.textContent = ''; }, 3000);
}

// boton para retroceder
prevButton.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateApartment();
    } else {
        showMessage('Has llegado al inicio de las imágenes.');
    }
};

// boton de siguiente 
nextButton.onclick = function() {
    if (currentIndex < apartments.length - 1) {
        currentIndex++;
        updateApartment();
    } else {
        showMessage('Has llegado al final de las imágenes.');
    }
};

// invocacion
updateApartment();
