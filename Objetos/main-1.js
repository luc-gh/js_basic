/*
Objetos - Parte 1

JavaScript é projetada com base em um simples paradigma orientado a objeto. 

Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. 
Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.
(Esse conceito é similar ao implementado em linguagens como Java, C++, Dart, C#, Rust e outras)

Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos.


Como as variáveis em JavaScript, o nome do objeto (que poderia ser uma variável normal) e um nome de propriedade diferem em
 maiúsculas/minúsculas (por exemplo, cor e Cor são propriedades diferentes). 
Você pode definir uma propriedade atribuindo um valor a ela.
*/

//Exemplo: vamos criar um objeto chamado carro e atribuir as propriedades chamadas marca, sigla, modelo, e ano, a seguir:

var carro = new Object();  //nova instância da classe Object, da linguagem
carro.marca = "Volkswagen";
carro.modelo = "Gol";
carro.sigla = "VW-G";
carro.ano = "2011";
console.log(carro);  // > Object {Propriedades}

//Propriedades sem valor recebem a designação undefined:
console.log(carro.motor);

/*
Um nome de propriedade de um objeto pode ser qualquer string JavaScript válida, ou qualquer coisa que possa ser convertida em uma
 string, incluindo uma string vazia. 

No entanto, qualquer nome e propriedade que não é um identificador JavaScript válido (por exemplo, um nome de propriedade que tem um 
 espaço ou um hífen, ou que começa com um número) só pode ser acessado(a) usando-se a notação de colchetes.

Essa notação é também muito útil quando nomes de propriedades devem ser determinados dinamicamente 
    (quando o nome da propriedade não é determinado até o momento de execução). 
*/

//Exemplos são mostrados a seguir:
var meuObj = new Object(),
    str = "minhaString",
    aleat = Math.random(),
    obj = new Object();

meuObj.tipo               = "Sintaxe de ponto";
meuObj["data de criacao"] = "String com espaco";
meuObj[str]               = "valor de String";            //valor atribuído a propriedade já presente no Objeto
meuObj[aleat]             = "Numero Aleatorio";           //                       ||
meuObj[obj]               = "Objeto";                     //                       ||
meuObj[""]                = "Mesmo uma string vazia";

console.log(meuObj);


//Também pode-se acessar propriedades usando um valor de string que está armazenado em uma variável:
let meuCarro = new Object();
var nomeDaPropriedade = "fabricacao";
meuCarro[nomeDaPropriedade] = "Ford";
console.log(meuCarro);

nomeDaPropriedade = "modelo";
meuCarro[nomeDaPropriedade] = "Mustang";
console.log(meuCarro);

//Pode-se usar a notação de colchetes com o comando for...in para iterar por todas as propriedades enumeráveis de um objeto. 
//A seguinte função mostra as propriedades de um objeto quando você passa o objeto e o nome do objeto como argumentos para a função:
function mostrarProps(obj, nomeDoObj) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
    }
  }
  return resultado;
}
console.log(mostrarProps(meuCarro,"meuCarro"));


/*
Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de null e undefined - são tratados como objetos. 
Eles podem receber propriedades (atribuídas de alguns tipos não são persistentes), e possuem todas as características de objetos.
*/

//A seguinte função enumera todas as propriedades de um objeto:
function listarTodasAsPropriedades(o){
  var objeto;
  var resultado = [];

  for(objeto = o; objeto !== null; objeto = Object.getPrototypeOf(objeto)){
    resultado = resultado.concat(Object.getOwnPropertyNames(objeto));
  }

  return resultado;
}

let estojo = new Object(),
    esc = "Caneta",
    pin = "Lápis";

estojo.num = 7;
estojo[esc] = "Pincel";
estojo.apagador = "Borracha";

console.log(listarTodasAsPropriedades(estojo));

/*
Além de criar objetos usando uma função construtora, você pode criar objetos usando um inicializador de objeto. 
O uso de inicializadores de objeto é às vezes conhecido como criar objetos com notação literal. 
O termo "inicializador de objeto" é consistente com a terminologia usada por C++.
A estrutura é semelhante a um dicionário (dict) em Python.
*/
//A sintaxe para um objeto usando-se um inicializador de objeto é:
var obj = { 
    propriedade_1: "valor_1",     // propriedade_# pode ser um identificador...
    2: "valor_2",                 // ou um numero...
    // ...,
    "propriedade n": "valor_n"    // ou uma string
};
console.log(obj);
//  onde obj é o nome do novo objeto, cada propriedade_i é um identificador (um nome, um número, ou uma string literal), 
//  e cada valor_i é uma expressão cujo valor é atribuído à propriedade_i.
//  A referência 'obj' e a atribuição são opcionais;

/*
se você não precisa fazer referência a esse objeto em nenhum outro local, você não precisa atribuí-lo a uma variável. 
(Note que você pode precisar colocar o objeto literal entre parentêses se o objeto aparece onde um comando é esperado, de modo 
 a não confundir o literal com uma declaração de bloco.)

Se um objeto é criado com um inicializador de objeto em um script de alto nível, JavaScript interpreta o objeto a cada vez que avalia 
uma expressão contendo o objeto literal. Além disso, um inicializador usado em uma função é criado toda vez que a função é chamada.
*/

//O comando a seguir cria um objeto e o atribui à variável x1 somente se a expressão cond é verdadeira:
cond = true;
if (cond) var x1 = {hi: "there"};
console.log(x1);

//Já no exemplo a seguir cria minhaHonda com três propriedades. 
//Note que a propriedade motor é também um objeto com suas próprias propriedades:
var minhaHonda = {cor: "vermelho", rodas: 4, motor: {cilindros: 4, tamanho: 2.2}};
console.log(minhaHonda.cor);
console.log(minhaHonda.motor.cilindros);

