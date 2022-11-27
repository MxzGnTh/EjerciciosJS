//Seleccion

const btnSuma = document.querySelector("#btnSumar");
const btnResta = document.querySelector("#btnResta");
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("span");
const mensaje = document.getElementById("mensaje");
//funcion para calcular suma y resta
function sumar() {
	resultado.innerHTML = parseInt(valor1.value) + parseInt(valor2.value);
	console.log("sumar");
}

function resta() {
	let resultadoResta = parseInt(valor1.value) - parseInt(valor2.value);

	//se identifica  un resultado negativo
	if (resultadoResta < 0) {
		mensaje.innerHTML = "Resultado negativo";
		mensaje.style.color = "red";
		resultado.innerHTML = 0;
	} else {
		resultado.innerHTML = resultadoResta;
	}
}



let restar = (a,b) => a - b;