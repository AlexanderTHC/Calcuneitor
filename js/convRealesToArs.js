/* SISTEMA DE CONVERSOR DE REALES - By THC */
/* BLUE -> ARS */
let cotizacionRealC = 37.04;
let cotizacionRealV = 37.05;
document.getElementById("precioCompraReal").innerHTML = 'R$' + cotizacionRealC.toFixed(2);
document.getElementById("precioVentaReal").innerHTML = 'R$' + cotizacionRealV.toFixed(2);

function calcularRealToArs() {
    let inputReal = $("#inputReal").val();

    let pesoArgTotal = inputReal * cotizacionRealC;

    document.getElementById("pesoArgTotal").innerHTML = 'AR$: $' + pesoArgTotal.toFixed(2);
}
/* ARS -> BLUE */
function calcularArsToReal(){
    let inputArs = $("#inputArs").val();
    let realTotal = inputArs / cotizacionRealC;

    document.getElementById("realTotal").innerHTML = 'R$: $' + realTotal.toFixed(2);
}

