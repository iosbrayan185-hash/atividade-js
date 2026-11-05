const formularioImc = document.getElementById('formulario-imc');
const resultado = document.getElementById('resultado');
const valorImc = document.getElementById('valor-imc');
const classificacao = document.getElementById('classificacao');
const faixaPeso = document.getElementById('faixa-peso');

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    }
    if (imc < 25) {
        return 'Peso adequado';
    }
    if (imc < 30) {
        return 'Sobrepeso';
    }
    if (imc < 35) {
        return 'Obesidade grau I';
    }
    if (imc < 40) {
        return 'Obesidade grau II';
    }
    return 'Obesidade grau III';
}

formularioImc.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const peso = Number(document.getElementById('peso').value);
    const alturaEmCm = Number(document.getElementById('altura').value);

    if (!Number.isFinite(peso) || !Number.isFinite(alturaEmCm) || peso <= 0 || alturaEmCm <= 0) {
        formularioImc.reportValidity();
        return;
    }

    const alturaEmMetros = alturaEmCm / 100;
    const imc = peso / (alturaEmMetros * alturaEmMetros);
    const pesoMinimo = 18.5 * alturaEmMetros * alturaEmMetros;
    const pesoMaximo = 24.9 * alturaEmMetros * alturaEmMetros;

    valorImc.textContent = `IMC: ${imc.toFixed(1)}`;
    classificacao.textContent = `Classificação: ${classificarImc(imc)}`;
    faixaPeso.textContent = `Faixa de peso correspondente ao IMC adequado para sua altura: ${pesoMinimo.toFixed(1)} kg a ${pesoMaximo.toFixed(1)} kg.`;
    resultado.hidden = false;
});
