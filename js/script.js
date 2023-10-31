function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    var imc = peso / (altura * altura);
    var resultado = "Seu IMC é " + imc.toFixed(2) + " - ";

    if (imc < 18.5) {
        resultado += "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado += "Peso Ideal";
    } else if (imc >= 25 && imc < 29.9) {
        resultado += "Levemente acima do peso";
    } else if (imc >= 30 && imc < 34.9) {
        resultado += "Obesidade Grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        resultado += "Obesidade Grau 2";
    } else {
        resultado += "Obesidade Grau 3";
    }

    document.getElementById("resultado").innerText = resultado;
}

document.getElementById("btnMulher").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "violet";
    document.getElementById("imgGenero").src='img/mulher.png';
}, false);
document.getElementById("btnHomem").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "blue";
    document.getElementById("imgGenero").src='img/homem.png';
}, false);