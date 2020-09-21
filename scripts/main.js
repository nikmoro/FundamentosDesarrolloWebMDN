const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo! desde Mozilla Developer Network";

let myImage = document.querySelector("img");
myImage.onclick = function () {
  // una función sin nombre (una función «anónima»)
  let miSrc = myImage.getAttribute("src");
  if (miSrc === "images/cmd.jpg") {
    myImage.setAttribute("src", "images/tomato.png");
  } else {
    myImage.setAttribute("src", "images/cmd.jpg");
  }
};

let mensaje = "Hola, me llamo Osiel."
alert(mensaje);

let arreglo = [1, "Osiel", 2, "Nicolás", 3, "Morales", 4, "Rosales"];
if (arreglo.length >= 9) {
  alert("El arreglo es mayor o igual a 8 caracteres");
} else {
  alert("El arreglo es menor a 8 caracteres");
}

function restar(n1, n2) {
  let restar = n1 - n2;
  if (n1 > n2) {
    alert(`La resta de 5 - 3 es:  ${restar}`); // `` Acento Grave: para impresiones de mensajes con variables (interpolación)
    return restar; // y usar HTML en JS o mensajes con múltiples de líneas
  } else {
    alert("No se mostrán números negativos");
  }
}

restar(5, 3);

// Eventos
let myEvent = document.querySelector("p"); // querySelector() para obtener una referencia al título y almacenarla en una variable llamada miTitulo.
myEvent.onclick = function () {
  alert("¡Ouch! ¡Deja de pincharme!");
};
// Equivalente: document.querySelector('p').onclick = function() { alert('¡Ouch! ¡Deja de pincharme!') }

let myBtn = document.querySelector("button");
let myTitle = document.querySelector("h1");

//  Función para poner el saludo personalizado
function setUserName() {
  let myName = prompt("Por favor, ingresa tu nombre."); // prompt(), que crea un cuadro de diálogo como lo hace alert(), pero esta pide un dato (Como el scanf en C o input en Python)
  localStorage.setItem("nombre", myName);
  myTitle.textContent = "Mozilla es genial, " + myName;
}

// para comprobar si el elemento 'nombre' existe
if (!localStorage.getItem("nombre")) {
  setUserName();
} else {
  let storageName = localStorage.getItem("nombre");
  myTitle.textContent = "Mozilla es genial, " + storageName;
}

myBtn.onclick = function () {
  setUserName();
};
