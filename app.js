// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array que almacena los nombres de los amigos.

let listaDeAmigos = [];

// Función que agrega un amigo a la lista.

function agregarAmigo() {
    
// Obtiene el valor del input.
    
const inputAmigo = document.getElementById('amigo');
const nombreAmigo = inputAmigo.value.trim();
    
// Valida que el campo no esté vacío.
    
if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
// Agrega el nombre al array.
    
listaDeAmigos.push(nombreAmigo);
    
// Muestra el nombre en la lista visual.
    
const listaVisual = document.getElementById('listaAmigos');
const nuevoAmigo = document.createElement('li');
nuevoAmigo.textContent = nombreAmigo;
listaVisual.appendChild(nuevoAmigo);
    
// Limpia el input después de agregar.
    
inputAmigo.value = '';
}

// Función que sortea un amigo aleatorio.

function sortearAmigo() {
    
// Verifica que haya amigos en la lista.
    
if (listaDeAmigos.length === 0) {
alert('Debes agregar al menos un amigo para realizar el sorteo');
return;
}
    
// Genera un índice aleatorio.

const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
// Obtiene el amigo seleccionado.

const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
    
// Muestr el resultado.

const resultadoElement = document.getElementById('resultado');
resultadoElement.innerHTML = `<li>El nombre del amigo secreto es: ${amigoSeleccionado}</li>`;
}