//tomando datos
const form = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const btn = document.querySelector("#botton");

//captando evento submit y prevent
form.addEventListener("submit", function (event) {
	event.preventDefault();
	errorClear();
	let nombre = document.getElementById("#nombre").value;
	let asunto = document.getElementById("#asunto").value;
	let mensaje = document.getElementById("#mensaje").value;
	//llamado de funciones
	let resultado = validar(nombre, asunto, mensaje);

	if (resultado == true) {
		exito();
	}
});
function errorClear() {
	document.querySelector(".resultado").innerHTML = "";
	document.querySelector(".errorNombre").innerHTML = "";
	document.querySelector(".errorAsunto").innerHTML = "";
	document.querySelector(".errorMensaje").innerHTML = "";

}


// no pude generar la sintaxis correctamenrte sobre este ejercicio

function exito() {
	document.querySelector(".resultado").innerHTML =
	"Formulario paso la validacion";
}

function validarTexto(nombre, asunto, mensaje) {
	let validadcionExitosa = true;
	let validacionNombre = /[a-zA-Z]/gim;
	
	if (validacionNombre.test(nombre) == false) {
		document.querySelector(".errorNombre").innerHTML =
		"ingresar un nombre valido";
		validadcionExitosa = false;
	}
	
	let validacionAsunto = /[a-zA-Z]/gim;
	
	if (validacionAsunto.test(asunto) == false) {
		document.querySelector(".errorAsunto").innerHTML =
		"ingrese un asunto valido";
		
		console.log("es error en el asunto");
		validadcionExitosa = false;
	}
	let validacionMensaje = /[a-zA-Z]/gim;
	
	if (validacionMensaje.test(mensaje) == false) {
		document.querySelector(".errorMensaje").innerHTML =
		"ingrese un mensaje valido";
		
		console.log("es error en el mensaje");
		validadcionExitosa = false;
	}
	
	return validadcionExitosa;
}
