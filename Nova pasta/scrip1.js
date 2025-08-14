let num1 = prompt("Numero 2: ");
let num2 = prompt("numero 1: ");

let operacao = prompt("Digite a operação que deseja (+, -, *, /):");

let resultado;

if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    if (num2 === 0) {
        resultado = "Erro: divisão por zero!";
    } else {
        resultado = num1 / num2;
    }
} else {
    resultado = "Operação inválida!";
}

alert("Resultado: " + resultado);
