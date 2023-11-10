// MANIPULAR HTML PELO JAVASCRIPT

// PELO ID
let titulo1 = document.getElementById('h1#titulo1')


// PELA CLASSE
let titulo2 = document.getElementsByClassName('h1.titulo2')


// PELA TAG
let tags = document.getElementsByTagName('h1')

// PARA INSERIR CONTEUDO
let novoElemento = document.createElement('h2')
novoElemento.innerHTML = 'Olá, mundo'
document.body.appendChild(novoElemento)