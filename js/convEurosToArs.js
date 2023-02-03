/* SISTEMA DE CONVERSOR DE REALES - By THC */
/* BLUE -> ARS */
let cotizacionEuroC = 200.00;
let cotizacionEuroV = 209.00;
document.getElementById("precioCompraEuro").innerHTML = '$' + cotizacionEuroC.toFixed(2);
document.getElementById("precioVentaEuro").innerHTML = '$' + cotizacionEuroV.toFixed(2);

function calcularEuroToArs() {
    let inputEuro = $("#inputEuro").val();

    let pesoArgTotal = inputEuro * cotizacionEuroC;

    document.getElementById("pesoArgTotal").innerHTML = 'AR$: $' + pesoArgTotal.toFixed(2);
}
/* ARS -> BLUE */
function calcularArsToEuro(){
    let inputArs = $("#inputArs").val();
    let euroTotal = inputArs / cotizacionEuroC;

    document.getElementById("euroTotal").innerHTML = '€: ' + euroTotal.toFixed(2);
}

