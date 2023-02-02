/* SISTEMA DE CALCULO DE IMPUESTOS DE TARJETAS */
function calcular() {
    let valorDolar = 194;

    let impuestoPais = 30 / 100;
    let impuestoGanancia = 45 / 100;
    let numInput = $("#numInput").val();


    let usdToArs = numInput * valorDolar;

    let totalImpGan = usdToArs + (usdToArs * impuestoGanancia);

    let totalImpPs = usdToArs + (usdToArs * impuestoPais);

    let impPais = totalImpPs - usdToArs;

    let impGan = totalImpGan - usdToArs;

    let total = usdToArs + (usdToArs * impuestoPais) + (usdToArs * impuestoGanancia);


    document.getElementById("usdToArs").innerHTML = '$' + usdToArs.toFixed(2);

    document.getElementById("impPais").innerHTML = '$' + impPais.toFixed(2);

    document.getElementById("impGan").innerHTML = '$' + impGan.toFixed(2);

    document.getElementById("total").innerHTML = '$' + total.toFixed(2);

}