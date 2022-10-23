//Estruturas de repetição e iteração

//Declaração for: repete um bloco de código (bc) de acordo com um iterador, uma condição e um incremento/decremento.
// Sintaxe: for ([expressaoInicial]; [condicao]; [incremento]) {comandos;}
var passo;
for (passo = 0; passo < 5; passo++) {  // Executa 5 vezes, com os valores de 0 a 4.
  console.log("Passo: " + passo);
}

//Declaração do...while: executa um bc ao menos uma vez e repete sua exucução de acordo com uma condição
// Sintaxe: do {comandos;} while (condicao);
let s = 0;
do {
  s += 1;
  console.log("s: " + s);
} while (s < 5);

//Declaração while: excuta um bc casoo uma condição seja verdadeira; evite laços infinitos.
// Sintaxe: while (condicao) {comandos;}
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log("n: " + n + "; x: " + x + ";")
}

//Declaração label: permite a criação de um marcador que referencia um laço e pode ser chamado em qualquer ponto do programa
// Sintaxe: label : laço (parâmetros) {comandos;}
//Os exemplo de label podem ser vistos com break e continue, a seguir.

//Declaração break: encerra um laço (pode um label, basta referenciá-lo)
var allPass = true;
var i, j;
let items = [0, "a", "carro", false, 12, [0,1], true, {}];
let tests = [1, -1];
top:
for (i = 0; items.length; i++){
	for (j = 0; j < tests.length; j++){
		console.log("i[" + i + "]: " + items[i]);
		console.log("j[" + j + "]: " + tests[j]);
	    if(tests[j] == items[i]){                  //loop para quando i é true e j é 1, pois tem valor lógico igual
	      console.log("Stop top");
	      allPass = false;
	      break top;
	    }
	}
}

//Declaração continue: faz com que um laço seja reiniciado imediatamente
var a, b;

loop1:
for (a = 0; a < 3; a++) {      //O primeiro 'for' é etiquetado com "loop1"
   loop2:
   for (b = 0; b < 3; b++) {   //O segundo é etiquetado com "loop2"
      if (a == 1 && b == 1) {
         continue loop1;
      } else {
         console.log("a = " + a + ", b = " + b);
      }
   }
}


//Declaração for...in: age sobre os elementos de uma lista interagindo com seus índices
// Sintaxe: for (variavel in objeto) {comandos}
var times = ['FLA','CAM', 'COR', 'FLU', 'SPO', 'SPT', 'BAH', 'INT', 'PAL', 'SAN', 'ACG', 'CAP', 'AME', 'FOR', 'CEA', 'JUV', 'GRE'];
for(var n in times){console.log(n);}

//Declaração for...of: age sobre os elementos de uma lista interagindo com seus valores
for(var t of times){console.log(t);}
