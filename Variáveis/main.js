alert("Variáveis")  //Mostra um alerta na página (não é muito utilizado pois trava o carregamento da página)

//Variáveis em JS
//JS usa o conjunto Unicode e é case-sensitive (diferencia maiúsculas e minúsculas)

//Comando var: cria variáveis que podem ser acessadas em qualquer escopo do código, inicializadas ou não, e alteráveis
var palavra = 'carro'
var num

if(true){
	console.log(palavra)  //comando console.log imprime uma mensagem na aba Console das ferramentas do desenvolvedor (devtools do navegador)  
}
console.log(num)  //variáveis não inicializadas tem o valor inicial 'undefined'

//Comando let: cria variáveis que só podem ser acessadas no bloco onde foram declaradas, inicializadas ou não, e alteráveis
b = 0
if(true){
	let a = 5
	let b = 9
	
}
//console.log(a)
/* 			Erro: a não foi declarada
			main.js:19 Uncaught ReferenceError: a is not defined
				at main.js:19:7
*/
// O erro ocorre porque a variável foi declarada fora deste escopo
console.log(b)  //b não assumirá o valor 8 porque esta atribuição ocorreu apenas para uma nova variável b, criada no escopo do if
b = 1  //b pode ser alterada
console.log(b)

//Comando const: cria refereciadores constantes (variáveis inalteráveis) que podem ser acessadas apenas no bloco onde foram declaradas
const algo = 8
const letra = 'c'
const bool = true
if(bool){
	console.log(bool)
}
console.log(algo + letra)   //concatena os valores das variáveis
//algo = 9
/* 			Erro: algo é constante
			Uncaught TypeError: Assignment to constant variable.
    			at main.js:39:6
*/