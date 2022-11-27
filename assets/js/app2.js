console.log("funciona");

//botones lineal
const caja = document.querySelector("#caja");
const botones = document.querySelectorAll("#botones");
const btnRojo = document.querySelector("#btn-1");
const btnNaranjo = document.querySelector("#btn-2");
const btnAmarillo = document.querySelector("#btn-3");
const btnVerde = document.querySelector("#btn-4");
const btnCeleste = document.querySelector("#btn-5");
const btnMagenta = document.querySelector("#btn-6");

//evento("funcion botones")
//Click boton
//caja se activa con color seleccionado
btnRojo.addEventListener("click", () => {
	caja.style.backgroundColor = "#e53e3e";
	console.log("color rojo!");
});

btnNaranjo.addEventListener("click", () => {
	caja.style.backgroundColor = "#dd6b20";
	console.log("color Naranjo!");
});

btnAmarillo.addEventListener("click", () => {
	caja.style.backgroundColor = "#faf089";
	console.log("color Amarillo!");
});

btnVerde.addEventListener("click", () => {
	caja.style.backgroundColor = "#48bb78";
	console.log("color Verde!");
});

btnCeleste.addEventListener("click", () => {
	caja.style.backgroundColor = "#81e6d9";
	console.log("colorCeleste!");
});

btnMagenta.addEventListener("click", () => {
	caja.style.backgroundColor = "#d53f8c";
	console.log("color Magenta!");
});
