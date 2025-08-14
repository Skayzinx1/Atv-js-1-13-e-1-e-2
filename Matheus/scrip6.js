let primeiro = prompt("Qual a primeira nota: ");
let segundo = prompt("Qual a segunda nota: ");
let terceira = prompt("Qual a terceira nota: ");
let peso1 = prompt("Qual o peso da primeira nota: ");
let peso2 = prompt("Qual o peso da segunda nota: ");
let peso3 = prompt("Qual o peso da terceira nota: ");


primeiro = Number(primeiro);
segundo = Number(segundo);
terceira = Number(terceira);
peso1 = Number(peso1);
peso2 = Number(peso2);
peso3 = Number(peso3);


let pesos = peso1 + peso2 + peso3;


let numeros = (primeiro * peso1) + (segundo * peso2) + (terceira * peso3);
let mediaPonderada = numeros / pesos;

console.log("A Média ponderada é igual a: ", mediaPonderada);