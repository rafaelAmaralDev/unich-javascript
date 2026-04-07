const prompt = require('prompt-sync')();

// Função para obter consumo válido
function obterConsumoValido() {
    while (true) {
        let input = prompt("Digite o consumo em kWh: ");
        let consumo = parseFloat(input);
        if (isNaN(consumo) || consumo < 0) {
            console.log("Valor inválido. Por favor, digite um número positivo.");
        } else {
            return consumo;
        }
    }
}

let consumo = obterConsumoValido();

// Tarifas por faixa
const TARIFA_BAIXA = 0.60; // Até 100 kWh
const TARIFA_MEDIA = 0.75; // De 101 a 300 kWh
const TARIFA_ALTA = 0.90;  // Acima de 300 kWh

let valor;

if (consumo <= 100) {
    valor = consumo * TARIFA_BAIXA;
} else if (consumo <= 300) {
    valor = consumo * TARIFA_MEDIA;
} else {
    valor = consumo * TARIFA_ALTA;
}

console.log("Valor a pagar: R$ " + valor.toFixed(2));