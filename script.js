
//VARIABLES
//El programa selecciona un numero entre el 1 al 100.
let numAzar = Math.floor(Math.random()*100)+ 1
let numEntrada = document.getElementById('numEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0;

//FUNCIONES
// Esta funcion se ejecuta cuando se toque el boton chequear
function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numIngresado = parseInt(numEntrada.value);
    //condicional para que este entre valores del 1 al 100
    if(numIngresado < 1 || numIngresado > 100 || isNaN(numIngresado)){
        mensaje.textContent = "Por favor, introduce un numero valido entre 1 y 100";
        mensaje.style.color = 'Black';
        return
    }
    //Condicionales para aclarar si es correcto o no, si es mas bajo o mas alto el numero
    if(numIngresado === numAzar){
        mensaje.textContent = "¡Felicitaciones! ¡Adivinaste el numero!";
        mensaje.style.color = 'green';
        numEntrada.disabled = true;
    }else if(numIngresado < numAzar){
        mensaje.textContent = '¡Mas Alto! El numero es mayor al que introduciste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡Mas Bajo! El numero es menor al que introduciste';
        mensaje.style.color = 'red';
    }




}