//JS é dinamicamente tipada:
//  Variáveis ou constantes não precisam ter tipo definido na inicialização e os tipos
//  podem ser alterados conforme a necessidade, apenas com uma reatribuição, por exemplo.

//Variáveis nulas ou indefinidas 
var n
if(!n == true){	 //Em contexto booleano, 'undefined' comporta-se como 'false';
	console.log("Mensagem impressa já que 'n' é falsa e foi invertida")
}  
console.log(n + 1)	// e em contexto numérico, comporta-se como 'NaN';

var nula = null  		//Já uma variável com valor nulo funciona da mesma forma que 'undefined' em contextos booleanos;
console.log(nula * 32)  //mas em contextos numéricos, assume o valor 0 (zero)


//Strings  
let a = "Hello world"
var tam = 'O tamanho de a é: '
//Haverá uma concatenação entra a String 'tam' e o valor numérico do tamanho da variável 'a', expresso com o método length:
console.log(tam + a.length) 

//Uma forma de concatenar (mais antiga) é usando o operador de adição:
var nome1 = 'Tottenham'  //Perceba que aspas simples ou duplas funcionam
const nome2 = "Hotspor"  //da masma maneira nesse tipo de aplicação
console.log(nome1 + ' ' + nome2)
//E a outra é usandos duas crases para delimitar a mensagem e usar ${} para especificar as variáveis (e assim mostrar seus valores)
console.log(`O nome é: ${nome1} ${nome2}`)

//Alguns métodos para strings:
let s = "Um texto qualquer  "
console.log(s.toUpperCase())     //Coloca todas as letras em formato MAIÚSCULO
console.log(s.toLowerCase())     //Coloca todas as letras em formato MINÚSCULO
console.log(s.charAt(5))         //Imprime caractere da posição indicada (a contagem de posições inicia em 0)
console.log(s.indexOf("a"))      //Imprime a posição de um caractere (primeira aparição)
console.log(s.substr(2,5))       //Imprime uma parte delimitada da String
console.log(s.slice(2,5))        //Faz o mesmo que substr, mas é mais utilizado com arrays
console.log(s.replace('q','t'))  //Substitui uma string (a primeira aparição) por outra
console.log(s.split(" "))        //Separa os elementos da String em um array, de acordo com o caractere definido (no caso foi um espaço " ")
console.log(s.trim())            //Retira os espaços do início e fim da String


//Números  
const number = 5 + 7        //inteiros (como a operação foi feita na atribuição, não há erro pois a constante recebe apenas o resultado)
var valor = 852 * (10**6)   //observe que operações já podem ser feitas na atribuição
let preco = 55.60           //racionais (float)

console.log(number)
console.log(valor)
console.log(preco)

//Conversão de strings para números:
let v = "14.22"
console.log(parseInt(v))     //Método que converte para inteiro
console.log(parseFloat(v))   //Método que converte para Float
console.log(+v + +'1.1')     //Uso do operador de adição (antes da String)

//Propriedades:
let maiorNum = Number.MAX_VALUE;
var menorNum = Number.MIN_VALUE;
let infinitoPositivo = Number.POSITIVE_INFINITY;
var infinitoNegativo = Number.NEGATIVE_INFINITY;
let naoENumero = Number.NaN;

console.log(`Maior número: ${maiorNum}\nMenor número: ${menorNum}\nInfinito positivo: ${infinitoPositivo}`)
console.log(`Infinito negativo: ${infinitoNegativo}\nNão é número (NaN): ${naoENumero}`)  //\n quebra uma linha

//Alguns metodos para números:
let x = 1.5
var y = 55
const z = 513.645871

console.log(typeof x)         //Comando typeof: mostra o tipo de dado
console.log(x.toString())     //Converte para uma String
console.log(typeof x)         //(agora, x é String)
console.log(parseFloat(y))    //Converte para Float
y += 0.1
console.log(y)
console.log(parseInt(y))      //Converte para Int
console.log(isNaN(y))         //Confere se é um número
console.log(y)                
console.log(z.toFixed())      //Aproximação direta sem decimais
console.log(z.toFixed(1))     //Aproximação contando os décimos
console.log(z.toFixed(2))     //Aproximação contando os centésimos
console.log(z.toFixed(9))     //Adiciona os zeros já que não há casas decimais tão distantes


//Boolenaos 
//Os booleanos são usados em comparações e/ou confirmações. São valores para operadores condicionais

let b = (1 == 2)  //O resultado da condição é atribuído à variável
const cond = false

if(cond){
	console.log("não impresso")  // Isso não será impresso pois a condição é falsa
}

console.log(b)   //false
console.log(!b)  //true, pois houve a inversão condicional