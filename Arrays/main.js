//Arrays: conjunto ou arranjo de elementos (≡ listas, vetores, matrizes)
  //atribuídos com os tipos semelhantes às variáveis, mas com os seus elementos definidos ou à instância de Array destacada:

let listaNomes = ['Lucas','Júlia','Carlos','Ana','João'];
var listNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const coisas = [25, true, false, 'Palavra', listNum];   //os valores podem ser qualquer tipo, inclusive, outros Arrays (como elemento único)

//Para acessar elementos. basta especificar o índice:
console.log(listaNomes[0])
console.log(listNum[9])

console.log(listaNomes);  //o ponto e vírgula é opcional em JS
console.log(listNum);
console.log(coisas);      //o Array adicionado em 'coisas' torna-se um elemento único deste, denominado Array(10) -> instância de Array de tamanho 10
console.log(coisas[3])    //para expandir o Array interno, é preciso especificar o índice (o fazer algo semelhante)
console.log(coisas[7])    //como não existe valor com esse índice, o tipo será 'undefined'

//Os Arrays terão o tipo 'object', enquanto seus elementos tem o tipo referente às suas formatações:
console.log(typeof listaNomes)  //object
console.log(typeof coisas)      //object
console.log(typeof listNum[0])  //number
console.log(typeof coisas[3])   //string
console.log(typeof coisas[4])   //object
console.log(typeof coisas[1])   //boolean
console.log(typeof coisas[7])   //undefined (também é o tipo, já que não há valor neste índice)

//Para iterar um Array, pode-se usar um laço ForEach como método:
listaNomes.forEach(
	function(item,indice,array){  //os parâmetros da função nesse caso são: elemento, índice e array (este, é a instância do Array 'listNum')
		console.log(item, indice)  //serão impresso os valores dos elementos e em seguida seus índices
	}
);
//O comando acima poderia ser escrito numa única linha

//Para adicionar itens:
let frutas = ["Maçã","Banana","Manga","Limão"]
frutas.push("Laranja")          //No final do array
frutas.unshift("Morango")       //No início do array
console.log(frutas)

//Para remover itens:
console.log(frutas.pop())     //Retorna o último elemento e o exclui do array
console.log(frutas)						
console.log(frutas.shift())   //Retorna o primeiro elemento e o exclui do array
console.log(frutas)

//Para encontrar o índice de um elemento:
console.log(frutas.indexOf("Banana"))

//Método splice: remove x elementos a partir do índice y, e insere o elemento de valor z:
//	Sintaxe: array.splice(y,x,z)
console.log(frutas.splice(1,0,"Pêra"))  //Retorna um array vazio, já que nenhum elementos foi removido, e adiciona 'Pêra' no índice 1
console.log(frutas)
console.log(frutas.splice(3,2,"Cajú"))  //Retorna os 2 valores excluídos a partir do índice 3, e adiciona 1 no lugar destes, sendo este, o valor 'Cajú'
console.log(frutas)

//Para copíar um array:
var arr = [0,'a',true]
copia1 = arr            //Isso não é uma cópia em si, mas uma cópia da instância de 'arr'
console.log(copia1)
copia2 = arr.slice()    //Isso é uma cópia real, que atribui à esta variável um array com os mesmos valores do que foi requisitado
console.log(copia2)

//Propriedades de arrays:
var a = Array.length     //Propriedade de comprimento do construtor Array, cujo valor é 1.
console.log(a)
var b = Array.prototype  //Permite a adição de propriedades para todos os objetos array (descreve funções satisfatíveis para arrays)
console.log(b)
var c = Array[Symbol.species];     //Função de Arrays usada para criar objetos derivados 
console.log(c)

//Métodos de arrays:
var nome = "Lucas"
let nums = (0,2,4,6,8)
const prop = true

x = Array.from(nome)  //Cria uma nova instância de Array a partir de um objeto semelhante ou iterável
console.log(x)
y = Array.isArray(nums)  //Retorna true se a variável é um array e false caso contrário
console.log(y)
z = Array.of(prop,nome,nums)  //Cria uma nova instância de Array com um número variável de argumentos, independentemente do número ou tipo dos argumentos
console.log(z)

//Métodos desenvolvidos a partir da propriedade Prototype:

//concat: juntar arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);

const a1 = ["Cecilie", "Lone"];
const a2 = ["Emil", "Tobias", "Linus"];
const a3 = ["Robin"];
const chi = a1.concat(a2, a3);
console.log(chi);

//constructor: retorna a função que criou o protótipo Array
const fru = ["Banana", "Laranja", "Maçã", "Manga"];
let text = fru.constructor;
console.log(text)

//entries: retorna um objeto Array Iterator com pares chave/valor
const fruits = ["Banana", "Laranja", "Maçã", "Manga"];
const f = fruits.entries();
console.log(f);

//every: retorna verdadeiro caso uma função retornar verdadeiro para todos os elementos e falso caso algum elemento retorna falso (erro caso array seja vazio).
const ids = [32, 33, 16, 40];
console.log(ids.every(verificarIdade));
function verificarIdade(idade) {
  return idade > 18;
}

//fill: substitui um ou mais valores de elementos por um novo valor atribuído
const fr = ["Banana", "Laranja", "Maçã", "Manga"];
fr.fill("Kiui");
console.log(fr);

let fs = ["Banana", "Laranja", "Maçã", "Manga"];
fs.fill("Kiui", 2, 4);
console.log(fs);

//filter: cria um novo array preenchido com elementos que passam em um teste fornecido por uma função, sem alterar o array original
	//Sintaxe: array.filter(function(currentValue, index, arr), thisValue)
const ages = [32, 33, 16, 40, 18, 13, 90];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

//findIndex: retorna o índice do primeiro elemento que passa por um teste
const nems = [3, 10, 18, 20];

console.log(nems.findIndex(elN))

function elN(v) {
  return v > 18;
}

//forEach: executa uma função para cada elemento de um array
	//Sintaxe: array.forEach(function(currentValue, index, arr), thisValue)
let sum = 0;
let nsd = [65, 44, 12, 4];
nsd.forEach(minhaF);

function minhaF(item) {
  sum += item;
}
console.log(sum);

//from: cria um array a partir e uma string
	//Sintaxe: Array.from(object, mapFunction, thisValue)
let stre = "AEIOU"
console.log(Array.from(stre));

//includes: verifica se um valor está contido num elemento de índice definido:
let palavra = "Palavra"
console.log(Array.from(palavra).includes("a",3));

//join: retorna um array como uma String
const fruto = ["Banana", "Laranja", "Maçã", "Manga"];
let jt = fruto.join(" e ");
console.log(jt);

//map:
const numb = [4, 9, 16, 25];
const newArrN = numb.map(Math.sqrt)
console.log(newArrN)

//Outros métodos:
//find: retorna o valor do primeiro elemento que passa em um teste, retornando undefined se não houver, e sem mudar o array original
//keys: retorna um objeto Array Iterator com as chaves de um array

//isArray
//lastIndexOf()
//length
//toString()
//reverse()
