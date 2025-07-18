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