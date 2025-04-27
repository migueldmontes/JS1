// 3-carrito-compra.js

let total = 0;

for (let i = 1; i <= 5; i++) {
    let precio = parseFloat(prompt(`Introduce el precio del producto ${i}:`));
    total += precio;
}

if (total >= 100) {
    let descuento = total * 0.15;
    let precioFinal = total - descuento;
    console.log(`Precio original: ${total.toFixed(2)}€`);
    console.log(`Precio final con 15% de descuento: ${precioFinal.toFixed(2)}€`);
} else {
    console.log(`Precio total: ${total.toFixed(2)}€`);
}
