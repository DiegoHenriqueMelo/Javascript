function soma(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function multiplicacao(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}

let parametro1 = parseFloat(prompt('Insira o primeiro numero'))
let parametro2 = parseFloat(prompt('Insira o segundo numero'))
let operacao = prompt('Escolha a operação, digite 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão')


if (operacao === '1'){
    alert(soma(parametro1,parametro2))
}else if(operacao === '2'){
    alert(subtração(parametro1,parametro2))
}else if(operacao === '3'){
    alert(multiplicacao(parametro1,parametro2))
}else if(operação === '4'){
    alert(dividir(parametro1, parametro2))
}else{
    alert("Coloque os Numeros indicados")
}