//Operadores

//valores para testar
let x = 1, y = -1, z = 0
const f = -5.5, g = 2.0
var a, b = 0, c = 0, d = 1, e = 1, h = 5, i = 2, j = 4, k = 3, l = 5


//Operadores de atribuição -----------

a = x            //atribuição simples
console.log(a)

b += z           //atribuição aditiva
console.log(b)

c -= f           //atribuição subtrativa
console.log(c)

d *= -f          //atribuição produtiva (de multiplicação)
console.log(d)

e /= g           //atribuição racional (de divisão)
console.log(e)

h %= g           //atribuição de resto
console.log(h)

k **= i          //atribuição exponencial
console.log(k)

l <<= j          //atribuição bit-a-bit por deslocamento à esquerda
console.log(l)

j >>= h          //atribuição bit-a-bit por deslocamento à direita
console.log(j)

e >>>= d         //atribuição de bit-a-bit deslocamento à direita não assinado
console.log(e)

x &= y           //atribuição AND bit-a-bit
console.log(x)

a |= b           //atribuição OR bit-a-bit
console.log(a)

l ^= k           //atribuição XOR bit-a-bit
console.log(l)


//Operadores de comparação -----------
let r = null, s = null, t = null, u = null

s = ("3" == '3' && 3 == '3')  //Igualdade: valores iguais, desconsiderando tipo de dado (s receberá 'true')
console.log(s)

t = (4 != '4')         //Desigualdade ou não-igualdade: valores diferentes (t receberá 'false')
console.log(t)

u = (3 === '3')        //Igualdade restrita: valores e tipos iguais (u recebe 'false')
console.log(u)

r = (4 !== '4')        //Desigualdade restrita: valores e/ou tipos diferentes (r recebe 'true')
console.log(r)

s = ('12' > '15')      //Maior que
console.log(s)

t = (15 < 22)          //Menor que
console.log(t)

u = (25 <= '25')       //Menor ou igual à
console.log(u)

r = (-49 >= 17)        //Maior ou igual à
console.log(r)


//Operadores aritméticos:
let m = 1, n = -1, o = 2
console.log(7 + 8.8)     //adição (mais)
console.log(9 - 1)       //subtração (menos)
console.log(m * n)       //multiplicação (vezes)
console.log(m / 2)       //divisão (barra/razão/sobre)
console.log(o ** (1/2))  //potenciação/exponenciação (vezes vezes)
console.log(-o)          //oposição/negação (menos unário)
console.log(o++)         //pós-incremento (mais mais depois)
console.log(n--)         //pós-decremento (menos menos depois)
console.log(++n)         //pré-incremento (mais mais antes)
console.log(--m)         //pré-decremento (menos menos antes)
console.log(+"2")        //conversão (mais antes)
console.log(+true)       // * usado para converter tipos mais facilmente
console.log(7%2)         //resto da divisão (percentagem) 


//Operadores bit a bit
let v = 15, w = 9        //variáveis
console.log(v & w)       // &: retorna um 1 para cada posição em que os bits da posição correspondente de ambos operandos sejam uns. 
console.log(v | w)       // |: retorna um 0 para cada posição em que os bits da posição correspondente de ambos os operandos sejam zeros.
console.log(v ^ w)       // ^: retorna um 0 para cada posição em que os bits da posição correspondente são os mesmos. 
console.log(~v)          // ~: inverte os bits do operando.
console.log(v << w)      // <<: desloca a em representação binária b bits à esquerda, preenchendo com zeros à direita.
console.log(~w >> v)     // >>: desloca a em representação binária b bits à direita, descartando bits excedentes.
console.log(v >>> ~w)    // >>>: desloca a em repr. binária b bits à direita, descartando bits excedentes e preenchendo com zeros à esquerda.


//Operadores lógicos: lógica proposicional associada à matemática
console.log(4 == 3 && 8 != 9)        // E lógico (&&)   --> false
console.log(9 == '9' || 8 == 8.1)    // OU lógico (||)  --> true
console.log(!(9 === '9'))            // NÃO lógico (!)  --> true			 - Valores sempre são verdade e têm prioridade:
console.log('Gato' && 'Cão')         // V e V retorna V (segunda expressão)  	--> Cão
console.log(false && 'Gato')         // F e V retorna F                     	--> false
console.log(true && 'Cão')           // V e V retorna V (valor)              	--> Cão
console.log('Gato' || false)         // V ou F retorna V (valor)             	--> Gato
console.log('Gato' || !('Cão'))      // V ou ~(V) retorna V (valor)          	--> Gato
console.log('Cão' || true)           // V ou V retorna V (valor)            	--> Cão


//Operador condicional (ternário): if-else reduzido
	//Sintaxe: condição ? valor1 : valor2
idade = 18
var status = (idade >= 18) ? "adulto" : "menor de idade";  //status assumirá o valor 'adulto'


//Operador vírgula (separador)
mat = [][]
for (var i = 0, j = 9; i <= 9; i++, j--)  //permite que multiplas variáveis sejam atualizadas cada vez através do laço
  console.log("m[" + i + "][" + j + "]= " + m[i][j]);


//Operadores unários: realiza operações com apenas um operando

//Delete: apaga um objeto, uma propriedade de um objeto ou um elemento no índice especificado de uma matriz. 
/*
	Sintaxe:
		delete nomeObjeto;
		delete nomeObjeto.propriedade;
		delete nomeObjeto[indice];
		delete propriedade; // válido apenas dentro de uma declaração with
*/

//Type of: é utilizado em qualquer uma das seguintes formas para mostrar o tipo de dado dos operandos:
	//typeof operando
	//typeof (operando)

//Void: especifica que uma expressão deve ser avaliada sem retorno de valor
	//void (expressao)
	//void expressao


//Operadores relacionais: verificam a presença ou característica de um objeto com relação à outro:

// in: verifica se um objeto está incluído em outro

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
console.log(0 in arvores)         // retorna verdadeiro
console.log(3 in arvores)         // retorna verdadeiro
console.log(6 in arvores)         // retorna falso
console.log("cedro" in arvores)   // retorna falso (você deve especificar o número do índice, não o valor naquele índice)
console.log("length" in arvores)  // retorna verdadeiro (length é uma propriedade de Array)

// Objetos predefinidos
console.log("PI" in Math)            // retorna verdadeiro
var minhaString = new String("coral");
console.log("length" in minhaString) // retorna verdadeiro

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
console.log("marca" in meucarro)   // retorna verdadeiro
console.log("modelo" in meucarro)  // retorna verdadeiro

// instance of: retorna verdadeiro se o objeto especificado for do tipo de objeto especificado

var dia = new Date(1995, 12, 17);
if (dia instanceof Date) {
  console.log('SIM')
}