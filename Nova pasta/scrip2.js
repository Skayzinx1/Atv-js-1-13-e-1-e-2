const filme1 = {
    nome: null , 
    nota: null
}

const filme2 = {
    nome: null , 
    nota: null
}

filme1.nome = prompt("Qual o nome do filme ? ")
filme1.nota = prompt("Qual a nota para o primeiro filme ? ")

filme2.nome = prompt("Qual o nome do filme ? ")
filme2.nota = prompt("Qual a nota do segundo filme ? ")

alert("O nome do primeiro filme é:   " + filme1.nome +" e a nota é   "+ filme1.nota)
alert("O nome do segundo filme é   "+ filme2.nome +" e a nota é   "+ filme2.nota)
if (filme1.nota > filme2.nota)
{
    alert("O filme com a maior nota é   "+ filme1.nota)
}else if (filme1.n1 < filme2.n2){
    alert("O filme com a maior nota é   "+  filme2.nota)
}else{
    alert("As notas sao iguais ")
}