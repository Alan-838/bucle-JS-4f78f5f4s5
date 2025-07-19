// Existe dentro JavaSript el document que es un atributo de JavaScript que permite obtener elementos de html
// Esto lo vamos a obtener por su id, tagname (nombre de etique), clase
// hemos creado 3 elemento y vamos a acceder a cada uno de ellos de diferentes formas

// existen partes importantes o tambien llamados selectores
// tambien existen los fuel selector

// selectores

const inputs = document.getElementsByTagName("input");
console.log("inputs", inputs);

// para poder iterarlos tengo que convertir el htmlCollection en un Array

const newInputs = Array.from(inputs);
console.log(newInputs);

// Itera el Array de inputs - cada uno de los elementos

newInputs.forEach((item) => {
    console.log(item);
});

// Selector por id

const input2 = document.getElementById("pass");
console.log(input2);

// Nombre de sus clases

const input3 = document.getElementsByClassName("input_mail");
console.log(input3);

// querySelectorAll-plural

const input4 = document.querySelectorAll("input");
console.log(input4);

for(let a = 0; a < input4.length; a++) {
    console.log(input4[a]);
}

// querySelector-singular

const input5 = document.querySelector(".input_mail");
console.log(input5);

//

const botonDeRegistro = document.querySelector("button");

botonDeRegistro.innerText = "Holi"
botonDeRegistro.style.backgroundColor = "skyblue";
botonDeRegistro.style.color = "white";
botonDeRegistro.style.padding = "10px"

console.log(botonDeRegistro);

//
const input_correo = document.querySelector(".input_mail");

input_correo.style.padding = "20px";
input_correo.style.border = "green, solid";
input_correo.style.backgroundColor = "yellow";

console.log(input_correo);

//

const inputPass = document.querySelector("#pass");

inputPass.style.padding = "20px";
inputPass.style.backgroundColor = "rgb(249, 231, 159)";
inputPass.style.border = "rgb(105, 205, 59), solid";

console.log(inputPass);

//

const inputNombre = document.querySelector("form > input:nth-child(3)");

inputNombre.style.padding = "20px";
inputNombre.style.backgroundColor = "rgb(244, 250, 73)";
inputNombre.style.border = "rgb(184, 236, 160), solid";

console.log(inputNombre);

// 

const formFlex = document.querySelector("form");

formFlex.style.display = "flex";
formFlex.style.flexDirection = "column";
formFlex.style.gap = "10px";
