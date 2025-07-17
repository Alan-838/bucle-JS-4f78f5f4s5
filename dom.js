// Existe dentro JavaSript el document que es un atributo de JavaScript que permite obtener elementos de html
// Esto lo vamos a obtener por su id, tagname (nombre de etique), clase
// hemos creado 3 elemento y vamos a acceder a cada uno de ellos de diferentes formas

// existen partes importantes o tambien llamados selectores 

// selectores

const inputs = document.getElementsByTagName("input");
console.log("inputs", inputs);

// para poder iterarlos tengo que convertir el htmlCollection en un Array

const newInputs = Array.from(inputs);
console.log(newInputs);

// Selector por id

