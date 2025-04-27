// 2-pares-entre-dos-numeros.js

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

// Asegurarse de que num1 sea el menor
if (num1 > num2) {
    [num1, num2] = [num2, num1];
}

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
