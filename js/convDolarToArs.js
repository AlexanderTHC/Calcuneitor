/* SISTEMA DE CONVERSOR DOLAR BLUE - By THC */
/* BLUE -> ARS */
let cotizacionDolarC = 187.00;
let cotizacionDolarV = 195.00;
document.getElementById("precioCompraDolar").innerHTML = '$' + cotizacionDolarC.toFixed(2);
document.getElementById("precioVentaDolar").innerHTML = '$' + cotizacionDolarV.toFixed(2);


let dolarBlueTotal = 0;
function calcularDolarToArs() {
    let inputDolar = $("#inputDolar").val();

    let pesoArgTotal = inputDolar * cotizacionDolarC;

    document.getElementById("pesoArgTotal").innerHTML = 'AR$: $' + pesoArgTotal.toFixed(2);
}
/* ARS -> BLUE */
function calcularArsToDolar(){
   let inputArs = $("#inputArs").val();
    let dolarTotal = inputArs / cotizacionDolarC;

    document.getElementById("dolarTotal").innerHTML = 'U$D: $' + dolarTotal.toFixed(2);
}
