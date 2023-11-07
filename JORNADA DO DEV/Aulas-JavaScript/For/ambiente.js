// USADO PARA ESTRUTURAS DE REPETIÇÃO
// for(inicializador; consiçãoDeSaida; expressãoFinal){
//  COLOCAR ENTRE PONTO E VIRGULA (;) CADA VALOR
// }

let notas = [2, 5, 10, 25, 50, 100, 2, 5, 10, 25, 50, 100, 2, 5, 10, 25, 50, 100,2, 5, 10, 25, 50, 100,2, 5, 10, 25, 50, 100,2, 5, 10, 25, 50, 100,2, 5, 10, 25, 50, 100,2, 5, 10, 25, 50, 100]
let total = 0

for (let repeticoes = 0; repeticoes < notas.length; repeticoes ++){
    // (FOR) CHAMAMOS A ACAO
    // (LET REPETICOES) DECLARAMOS A MARIAVEL QUE VAI REPETIR
    // (REPETICOES < NOTAS.LENGTH) DECLARAMOS QUE A REPETICAO SO VAI PARAR, QUANDO O LENGTH(NUMEROS DE CASAS) DA VARIAVEL NOTAS ACABAREM
    // (REPETICOES++) CADA VALOR ADICIONADO NA VARIAVEL NOTAS, O FOR VAI SER EXECUTADO MAIS UMA VEZ
    total = total + notas[repeticoes]
}

console.log(`O total do seu dineheiro é ${total}`)