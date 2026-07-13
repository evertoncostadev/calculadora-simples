function calcular(operacao) {
    // Captura os valores digitados no HTML
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    // Validação básica para campos vazios
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "Erro: Insira os dois números!";
        return; 
    }

    // Lógica da Soma e Subtração (O restante a sua dupla faz!)
    if (operacao === '+') {
        resultado = num1 + num2;
    } 
    else if (operacao === '-') {
        resultado = num1 - num2;
    } 
    else if (operacao === '*') {
        resultado = num1 * num2;
    }
    else if (operacao === '/') {
        // Validação para evitar divisão por zero
        if (num2 === 0) {
            document.getElementById('resultado').innerText = "Erro: Divisão por zero!";
            return;
        }
        resultado = num1 / num2;
    }

    // Envia o resultado final de volta para o HTML
    document.getElementById('resultado').innerText = resultado;
}
