/* SISTEMA DE CONVERSOR DOLAR BLUE - By THC */
/* BLUE -> ARS */
let cotizacionBlueC = 377;
let cotizacionBlueV = 381;
document.getElementById("precioCompraBlue").innerHTML = '$' + cotizacionBlueC.toFixed(2);
document.getElementById("precioVentaBlue").innerHTML = '$' + cotizacionBlueV.toFixed(2);


let dolarBlueTotal = 0;
function calcularBlueBToArs() {
    let inputDolar = $("#inputDolar").val();

    let pesoArgTotal = inputDolar * cotizacionBlueC;

    document.getElementById("pesoArgTotal").innerHTML = 'AR$: $' + pesoArgTotal.toFixed(2);
}
/* ARS -> BLUE */
function calcularArsToUsdB(){
   let inputArs = $("#inputArs").val();
    let dolarBlueTotal = inputArs / cotizacionBlueC;

    document.getElementById("dolarBlueTotal").innerHTML = 'U$D: $' + dolarBlueTotal.toFixed(2);
}
