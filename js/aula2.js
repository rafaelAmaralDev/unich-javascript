const prompt = require('prompt-sync')();

let consumo = parseFloat(prompt("Digite o consumo em kWh: ")); isNaN(consumo) ? console.log("Valor inválido. Por favor, digite um número.") : null;

if (consumo <= 100) {
    let valor = consumo * 0.60;
    console.log("Valor a pagar: R$ " + valor.toFixed(2));
} else if (consumo <= 300) {
    let valor = consumo * 0.75;
    console.log("Valor a pagar: R$ " + valor.toFixed(2));
} else {
    let valor = consumo * 0.90;
    console.log("Valor a pagar: R$ " + valor.toFixed(2));
}