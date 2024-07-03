const formulario = document.querySelector(".formulario"); 

formulario.onsubmit = function(e) { 

  e.preventDefault();      // agrege a e.prevent a e.preventDefault para prevenir el envio del formulario
  //Se agrego input, selec y el nombre de las variables completas.
  const inputNombre = formulario.elements[0]
  const inputEdad = formulario.elements[1]
  const SelecNacionalidad = formulario.elements[2]

  const nombre = inputNombre.value; // cambie el nombre de las variables
  const edad = parseInt(inputEdad.value); //Agrege parseInt porque quiero un dato númerico y datos en el parentesis

  const i = SelecNacionalidad.selectedIndex //Cambie Nombre variable
  const nacionalidad = SelecNacionalidad.options[i].value //agrege selec a la variable, porque le cambie el nombre arriba
  console.log(nombre, edad)
  console.log(nacionalidad)

  inputNombre.classList.remove("error");//Agregue estos dos para limpiar errores previos
  inputEdad.classList.remove("error");

  if (nombre.length === 0) {
    inputNombre.classList.add("error");// se cambio el nombre de las variables como corregi arriba, en estas dos
  }
  if (edad < 18 || edad > 120) {
    inputEdad.classList.add("error")
  }

if (nombre.length > 0 && (edad > 18 && edad < 120)) {
  agregarInvitado(nombre, edad, nacionalidad); //Agrege punto y coma
  }
}; //Agrege punto y coma

const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados")

const elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}

//Todavía no está acabado