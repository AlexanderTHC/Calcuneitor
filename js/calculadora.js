/* CREDITOS BY SAJ THC */
$(document).ready(function () {
    $("#callCreditos").click(function () {
        $("#modalCreditos").modal("show");
    });
});


// CALCULO DE IMPUESTOS
let valorDolar = 194;
let usdToArs;
let totalImpPs;
let totalImpGan;
let impPais;
let impGan;

let impuestoPais = 30 / 100;
let impuestoGanancia = 45 / 100;

function calcular() {
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
