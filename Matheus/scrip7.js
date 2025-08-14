let primeiro = prompt("Qual o preço do produto: ");
let desconto = 0;
let soma = 0;

primeiro = Number(primeiro);
desconto = Number(desconto);

desconto = primeiro * 5 / 100

soma = primeiro - desconto


console.log("O desconto é igual à: ", soma );