/* CREDITOS BY SAJ THC */
$(document).ready(function () {
    $("#callCreditos").click(function () {
        $("#modalCreditos").modal("show");
    });
    $("#callCreditosHome").click(function () {
        $("#modalCreditos").modal("show");
    });
});

/* VARIABLES GLOBALES */
let inputDolar;
let inputArs;
let inputReales;
let inputEuro;
let pesoArgTotal = 0;

/* SISTEMA DE CALCULO DE IMPUESTOS DE TARJETAS */
function calcular() {
    let valorDolar = 194;
    let usdToArs;
    let totalImpPs;
    let totalImpGan;
    let impPais;
    let impGan;

    let impuestoPais = 30 / 100;
    let impuestoGanancia = 45 / 100;
    let numInput = $("#numInput").val();


    usdToArs = numInput * valorDolar;

    totalImpGan = usdToArs + (usdToArs * impuestoGanancia);

    totalImpPs = usdToArs + (usdToArs * impuestoPais);

    impPais = totalImpPs - usdToArs;

    impGan = totalImpGan - usdToArs;

    total = usdToArs + (usdToArs * impuestoPais) + (usdToArs * impuestoGanancia);


    document.getElementById("usdToArs").innerHTML = '$' + usdToArs.toFixed(2);

    document.getElementById("impPais").innerHTML = '$' + impPais.toFixed(2);

    document.getElementById("impGan").innerHTML = '$' + impGan.toFixed(2);

    document.getElementById("total").innerHTML = '$' + total.toFixed(2);

}


/* SISTEMA DE CONVERSOR DOLAR BLUE - By THC */
/* BLUE -> ARS */
let cotizacionBlueC = 377;
let cotizacionBlueV = 381;
document.getElementById("precioCompraBlue").innerHTML = '$' + cotizacionBlueC.toFixed(2);
document.getElementById("precioVentaBlue").innerHTML = '$' + cotizacionBlueV.toFixed(2);


let dolarBlueTotal = 0;
function calcularBlueBToArs() {
    inputDolar = $("#inputDolar").val();

    let pesoArgTotal = inputDolar * cotizacionBlueC;

    document.getElementById("pesoArgTotal").innerHTML = 'AR$: $' + pesoArgTotal.toFixed(2);
}
/* ARS -> BLUE */
function calcularArsToUsdB(){
    inputArs = $("#inputArs").val();
    let dolarBlueTotal = inputArs / cotizacionBlueC;

    document.getElementById("dolarBlueTotal").innerHTML = 'U$D: $' + dolarBlueTotal.toFixed(2);
}

/* SISTEMA DE CONVERSOR DE REALES - By THC */
/* BLUE -> ARS */
let cotizacionRealC = 37.04;
let cotizacionRealV = 37.05;
document.getElementById("precioCompraReal").innerHTML = '$' + cotizacionRealC.toFixed(2);
document.getElementById("precioVentaReal").innerHTML = '$' + cotizacionRealV.toFixed(2);

let dolarRealTotal = 0;
function calcularBlueBToArs() {
    inputReal = $("#inputReal").val();

    let pesoArgTotal = inputReal * cotizacionRealC;

    document.getElementById("pesoArgTotal").innerHTML = 'AR$: $' + pesoArgTotal.toFixed(2);
}
/* ARS -> BLUE */
function calcularArsToUsdB(){
    inputArs = $("#inputArs").val();
    let dolarRealTotal = inputArs / cotizacionRealV;

    document.getElementById("realTotal").innerHTML = 'R$: $' + dolarRealTotal.toFixed(2);
}


/* SISTEMA DE CONVERSOR DE REALES - By THC
/* BLUE -> ARS 
$206,23
$206,33
let cotizacionRealC = 37.04;
let cotizacionRealV = 37.05;
document.getElementById("precioCompraReal").innerHTML = 'R$' + cotizacionBlueC.toFixed(2);
document.getElementById("precioVentaReal").innerHTML = 'R$' + cotizacionBlueV.toFixed(2);


let dolarRealTotal = 0;
function calcularBlueBToArs() {
    inputReal = $("#inputReal").val();

    let pesoArgTotal = inputReal * cotizacionRealC;

    document.getElementById("pesoArgTotal").innerHTML = 'AR$: $' + pesoArgTotal.toFixed(2);
}
/* ARS -> BLUE 
function calcularArsToUsdB(){
    inputArs = $("#inputArs").val();
    let dolarRealTotal = inputArs / cotizacionRealV;

    document.getElementById("realTotal").innerHTML = 'R$: $' + dolarRealTotal.toFixed(2);
}
*/

