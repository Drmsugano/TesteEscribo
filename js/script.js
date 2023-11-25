function soma(numero) {
    let soma = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

function somaNum(){
    let numero = document.getElementById("numero").value;
    numero = parseInt(numero)
    let resultado = soma(numero)
    document.getElementById("resultado").innerHTML = resultado;
}