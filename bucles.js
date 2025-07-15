// Un bucle es un elemento repetitivo que hace muchas veces una tarea
// for = para
// itera = iterador indice 0
// i++
// i=i+1

for (let i = 0; i < 10; i++) {
    console.log("Iterador ", i);
}

for (let i = 0; i <= 10; i = i + 2) {
    console.log("Iterador ", i);
}

for (let i = 0; i <= 10; i += 2) {
    console.log("Iterador ", i);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let u = 0; u < numeros.length; u++) {
    if (numeros[u] % 2 == 0) {
        console.log("holis", numeros[u]);
    }
}

const laptops = [
    {
        marca: "Toshiba",
        modelo: "acm78",
        tienda: "cachina"
    },
    {
        marca: "xiaomi",
        modelo: "1pt",
        tienda: "Apple Store"
    },
    {
        marca: "apple",
        modelo: "lqt",
        tienda: "Xiaomi Store"
    }
];

for (let h = 0; h < laptops.length; h++) {
    console.log(laptops[h].marca);
}

// Escribe una función que pida una frase y escriba cuantas veces aparecen las vocales

const contarVocales = (frase) => {
    const fraseMayuscula = frase.toUpperCase();
    let contador = 0;

    for (let c = 0; c < fraseMayuscula.length; c++) {
        const letra = fraseMayuscula[c];

        if (
            letra === "A" ||
            letra === "E" ||
            letra === "I" ||
            letra === "O" ||
            letra === "U"
        ) {
            contador++;
        }
    }

    //return "La frase tiene " + contador + " vocales";
    return `La frase tiene ${contador} vocales`;
};

console.log(contarVocales("xiaomi"));


// bucle while

let a = 0;

while(a < 5) {
    console.log(a);
    a++;
}

// do...while

let b = 0;

do {
    console.log(b);
    b++;
} while(b < 5)