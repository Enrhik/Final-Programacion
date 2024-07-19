// Seleccionar el boton de generar color y su elemento
const $generate = document.getElementById('generate'), 
    $showColor = document.querySelector('.color-hex');

// los valores hexadecimales
let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// ejecuta cuando se haga click
document.addEventListener('click', e => {
    // elemento clicado es el boton de generar color
    if (e.target === $generate) {
        let color = "#"; // inicia la variable color

        // Genera un color hexadecimal de 6 caracteres
        for (let i = 0; i < 6; i++) color += hex[randomNumber()]; //valor aleratorio del array hex
        //Muestra el color generado
        $showColor.innerHTML = color;
        //Cambia el fondo de la pagina al generar el color
        document.body.style.background = color;
    }
})
//Funcion que retorna un numero aleratorio entre 0 y la longitud del array hex
function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}