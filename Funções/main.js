// Funções

// Funções são blocos de construção que guardam uma série de comandos que podem ser executados a qualquer momento.
// Elas podem requisitar parâmetros (valores pré-definidos) e podem também retornar valores
// Sintaxe: function nomeDaFunção (parâmetros) {...}

// No exemplo a seguir, é passado um valor primitivo para aa função:
function square(n){
	return n*n;
}
var a = 8;
// Para chamar as funções, basta digitar o nome da função e passar os parâmtros necessários (se não forem, colocar '()')
console.log(square(a));  // Como 'a' é de tipo primitivo, seu valor não é alterado pela função, globalmente.
console.log(a);

//Já no próximo exemplo, a função recebe um objeto (visto noutro código):
function minhaFuncao(objeto) {
  objeto.make = "Toyota";
}

var meucarro = {make: "Honda", model: "Accord", year: 1998};
var x, y;
console.log(meucarro);

x = meucarro.make;     // x recebe o valor "Honda"

minhaFuncao(meucarro);
y = meucarro.make;     // y recebe o valor "Toyota" (a propriedade make foi alterada pela função)
console.log(meucarro);

//Expressão de função: variável que recebe uma função anônima (sem nome) ou auto-referenciativa (tem nome, mas apenas para chamar-se).
//Exemplo com função anônima:
var cubo = function(num){return num*num*num};  // cubo é o nome que servirá para chamar está função
console.log(cubo(3));  //27
//Exemplo com função auto-referenciativa:
let fatorial = function fac(n){return n < 2 ? 1 : n * fac(n-1)};  //Também é chamada pelo nome da variável, mas usa seu nome nela mesma
console.log(fatorial(6));  //720

/*
As expressões de função são convenientes ao passar uma função como um argumento para outra função.
O exemplo a seguir mostra uma função map sendo definida e, em seguida, chamada com uma função anônima como seu primeiro parâmetro:
*/
function map(f,a) {
  var result = []; // Cria um novo Array
  var i;
  for (i = 0; i != a.length; i++){  // Para cada elemento do array recebido,
  	result[i] = f(a[i]);            // o array 'result' receberá o retorno da função 'f', que também foi um parâmetro passado
  }
  return result;
}
console.log(map(function(x) {return x * x * x}, [0, 1, 2, 5, 7, 9, 10]));  // Perceba que a função recebe outra função como parâmetro e um array


/*
Os argumentos de uma função não estão limitados a strings e números. Você pode passar objetos para uma função.
Um função pode chamar a si mesma. Por exemplo, a função que calcula os fatoriais recursivamente:
*/
function fat(n){
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * fat(n - 1));
}
console.log(fat(5));   //120

/*
Em JavaScript, os escopos são hierarquicos, e não independentes como em Python, logo variáveis globais podem ser acessadas em qualquer 
escopo, e variáveis locais só podem ser acessadas no seu local especificado ou em escopos mais internos. Isso vale para funções aninhadas:
*/
var a = 5;
function calc(n1){
	var m = 10;
	function soma(a,b){
		return(a+b);
	}
	return(soma(n1,m));
}
//console.log(m);      //Erro
console.log(calc(a));  //15 (5 + 10)

//Recursão: as 3 formas de chamar uma função nela mesma são: 
//	com o nome da função, com o método 'arguments.callee()' e com a variável no escopo que se refere a função.
//Ex: considere:
var foo = function bar() {
	/*
		Aqui, os seguintes chamadas são equivalentes:
			bar()
			arguments.callee()
	 		foo()
	*/
};

/*
Uma função que chama a si mesma é chamada de função recursiva. Em alguns casos, a recursividade é análoga a um laço. 
Ambos executam o código várias vezes, e ambos necessitam de uma condição (para evitar um laço infinito, ou melhor, recursão infinita, neste caso). 
Por exemplo, o seguinte laço:
*/
var x10 = 0;
while (x10 < 10) {   //"x < 10" a condição do laço
  //faça coisas
  console.log(x10);  //perceba a ordem dos comandos
  x10++;             //iteração
}

//Esse laço pode ser convertido na seguinte função recursiva:
function loop(x) {
  if (x >= 10)     //"x >= 10" a condição de parada (equivalente a "!(x < 10)")
     return;
  //faça coisas
  console.log(x);  //perceba a ordem dos comandos
  loop(x + 1);     //chamada recursiva
}
loop(0);

/*
Em comparação ao laço da função, cada chamada recursiva realiza outras chamadas recursivas.

É possível converter qualquer algoritmo recursivo para um não recursivo, mas muitas vezes a lógica é muito mais complexa e exige o uso de pilhas.
Na verdade a própria recursão usa pilha: a pilha de função.

O comportamento da pilha pode ser vista a seguir no exemplo:
*/
function fooo(i) {
   if (i < 0)
      return;
   document.writeln('início:' + i);  //escreve na página html
   fooo(i - 1);
   document.writeln('fim:' + i);
}
fooo(3);

//Funções aninhadas e cláusuras
//Funções dentro de funções (internas) são acessadas a partir de declarações da função externa, e podem usar todos os argumentos da externa.
 //Exemplo 1: 
function addSquares(a,b) {  //função externa, que recebe dois valores
   function square(x) {     //função interna, que recebe um
      return x * x;
   }
   return square(a) + square(b);  //a função interna é chamada dentro da externa e com os argumentos desta
}
a1 = addSquares(2,3); // retorna 13  (2² + 3²)
b1 = addSquares(3,4); // retorna 25  (3² + 4²)
c1 = addSquares(4,5); // retorna 41  (4² + 5²)
console.log(a1);
console.log(b1);
console.log(c1);

//Exemplo 2: é possível chamar a função externa e especificar argumentos para a função externa e interna:
function fora(x) {
   function dentro(y) {
      return x + y;
   }
   return dentro;
}
fn_inside = fora(3);     // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
result0 = fn_inside(5);  // retorna 8
result1 = fora(3)(5);    // retorna 8
result2 = fn_inside(9);  // retorna 12
console.log(result0);
console.log(result1);
console.log(result2);


//Closure (cláusura): criada quando uma função interna (aninhada) é disponibilizada fora do escopo da função externa.
//Exemplo 1:
var pet = function(nome) {          // A função externa define uma variável "nome"
    var getNome = function() {
      return nome;                // A função interna tem acesso à variável "nome"  da função externa
    }
  return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
}
myPet = pet("Bob");

var nb = myPet();   // Retorna "Bob"
console.log(nb);

/*
As variáveis internas da função interna atuam como armazenamento seguro para as funções internas.
Elas armazenam "persistentes", mas seguros, os dados com os quais as funções internas irão trabalhar.
As funções não tem que ser atribuídas a uma variável, ou ter um nome.
*/

//Exemplo 2:
var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // Um código que não queremos que pessoas de fora sejam capazes de modificar

  return function () {
    return secureCode;
  };
})();

let code = getCode();    // Retorna o secureCode
console.log(code);

/*
Os argumentos de uma função são mantidos em um objeto do tipo array.
Dentro de uma função, você pode endereçar os argumentos passados para ele conforme:

	arguments[i]

onde i é um número ordinal do argumento, começando com zero.
Então, o primeiro argumento passado para a função seria arguments[0].
O número total de argumentos é indicado por arguments.length.

Usando o objeto arguments, você pode chamar a função com mais argumentos do que o formalmente declarado.
Isso muitas vezes é útil se você não sabe de antemão quantos argumentos serão passados para a função. 
Você pode usar arguments.length para definir a quantidade de argumentos passados p/ a função, e acessar cada argumento usando o objeto arguments.

Por exemplo, considere uma função que concatena várias strings.
O argumento formal para a função é uma string que especifica os caracteres que separam os itens para concatenar.
*/
//A função definida como segue:
function myConcat(separador) {
   var result = "";// inicializa a lista
   for(let i = 1; i < arguments.length; i++){
      result += arguments[i] + separador;
   }
   return result;
}
console.log(myConcat(":","1","2","3","4","5"));
console.log(myConcat(", ", "Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"));

//OBS.: A variável arguments é "como um array", mas não é um array. 
	//Ela é como um array pois possui um índice numerado e a propriedade length. 
	//No entanto, não possui todos os métodos de manipulação de array.


//Parâmetros padrão:
function multiplicar(a, b = 1) {  //atribui 1 à variavel b, caso não seja passado um valor para ela por parâmetro
  return a*b;
}

console.log(multiplicar(5)); // 5


//Função de seta

//Funções curtas: Em alguns padrões funcionais, funções curtas são bem-vindas. Compare:
var a_1 = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a_2 = a_1.map(function(s){ return s.length });

var a_3 = a_1.map( s => s.length );

console.log(a_2);
console.log(a_3);


//Léxico this  -- outro código.


//Funções pré-definidas:


/*
eval()
O método eval() avalia código JavaScript representado como uma string.

uneval() Non-standard
O método uneval() cria uma representação de string do código-fonte de um Object.

isFinite()
A função global isFinite() determina se o valor passado é um número finito. Se necessário, o parâmetro é primeiro convertido para um número.

isNaN()
A função isNaN() determina se um valor é NaN ou não. Nota: coerção dentro da função isNaN tem regras interessantes; 
	você pode, alternativamente, querer usar Number.isNaN(), como definido no ECMAScript 6, 
	ou você pode usar typeof para determinar se o valor não é um número.

parseFloat()
A função parseFloat() analisa um argumento do tipo string e retorna um número de ponto flutuante.

parseInt()
A função parseInt() analisa um argumento do tipo string e retorna um inteiro da base especificada (base do sistema numérico).

decodeURI()
A função decodeURI() decodifica uma Uniform Resource Identifier (URI) criada anteriormente por encodeURI ou por uma rotina similar.

decodeURIComponent()
O método decodeURIComponent() decodifica um componente Uniform Resource Identifier (URI) criado anteriormente por encodeURIComponent ou por
 uma rotina similar.

encodeURI()
O método encodeURI() codifica um Uniform Resource Identifier (URI), substituindo cada ocorrência de determinados caracteres por um, dois,
 três, ou quatro sequências de escape que representa a codificação UTF-8 do caractere (só serão quatro sequências de escape para caracteres 
 compostos de dois caracteres "substitutos").

encodeURIComponent()
O método encodeURIComponent() codifica um componente Uniform Resource Identifier (URI), substituindo cada ocorrência de determinados caracteres
 por um, dois, três, ou quatro sequências de escape que representa a codificação UTF-8 do caractere (só serão quatro sequências de escape para
 caracteres compostos de dois caracteres "substitutos").

escape() Deprecated
O método obsoleto escape() calcula uma nova string na qual certos caracteres foram substituídos por uma sequência de escape hexadecimal.
Use encodeURI ou encodeURIComponent em vez disso.

unescape() Deprecated
O método obsoleto unescape() calcula uma nova string na qual sequências de escape hexadecimais são substituídas pelo caractere que ela representa.
As sequências de escape podem ser introduzidas por uma função como escape. Por unescape() estar obsoleto, use decodeURI() ou decodeURIComponent
 ao invés dele.










*/