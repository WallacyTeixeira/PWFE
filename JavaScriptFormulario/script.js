function MostrarNome() {
    let Nome = document.getElementById('pNome').value;
    let Sobrenome = document.getElementById('pSobre').value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert(' Olá ' + NomeCompleto);

    let numero1 = document.getElementById('pNumero1').value;
    let numero2 = document.getElementById('pNumero2').value;
    let resposta = document.getElementById('pResultado').value;

    resposta = parseInt(numero1) + parseInt(numero2);

    document.write('o resultado da soma é', resposta);

    switch (operacao) {
        case ("+"): digital.write(parseInt(numero1) + parseInt(numero2));
            break;
        case ("-"): digital.write(parseInt(numero1) - parseInt(numero2));
            break;
        case ("*"): digital.write(parseInt(numero1) * parseInt(numero2));
            break;
        case ("/"):
            if (numero2 == 0) {
                document.write("Não Dividirás por Zero. DEUS DISSE");
            } else {
                document.write(parseFloat(numero1) / parseFloat(numero2));
            }
            break;
        default: document.write("Escolha uma Operação Válida")
    }
}