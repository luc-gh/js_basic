/*
Classes - Parte 1

Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

As Classes são, de fato, "funções especiais", e, assim como você pode definir "function expressions" e "function declarations", 
 a sintaxe de uma classe possui dois componentes: "class expressions" e "class declarations".
*/

//Declaração de classes: comando 'class'
class Retangulo{
  constructor(altura, largura){  //construtor de dois parâmetros
    this.altura = altura;
    this.largura = largura;
  }
}

//Instâncias de classes:
let ret = new Retangulo(7,8);  //nova instância de classes atribuída à variável 'ret'
console.log(ret);

//Declaração pré-referenciada (Hoisting): classes não podem ser chamadas antes de serem declaradas:
//var s = new classeP();  //ERRO: Uncaught ReferenceError: Cannot access 'classeP' before initialization
class classeP{}
console.log(new classeP);

//Expressão de classes: classes, assim como funções, podem ter uma declaração como atribuição à uma variável, e podem ter nome ou não.
let Circulo = class {                //Classe sem nome
  constructor(raio) {
    this.raio = raio;
  }
};

let Triangulo = class Triangulo {    //Classe nomeada
  constructor(altura, base) {
    this.altura = altura;
    this.base = base;
  }
};

console.log(new Circulo(8));         //Os parâmetros (atributos) da classe são passados como argumentos através da variável a qual a 
console.log(new Triangulo(2,3));     //classe foi atribuída, e o nome da classe pode ser usado nela própria, como auto-referência. 


//Corpo de uma classe: tudo que está entre as chaves {}

//CONSTRUTOR
//O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
//Só pode existir um método especial com o nome "constructor" dentro da classe.
//Um construtor pode usar a palavra-chave super para chamar o construtor de uma classe pai.
class Poligono {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  constructor(height, width) {
    this.name = 'Poligono';
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // declaration
  sayName() {
    ChromeSamples.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    ChromeSamples.log('"Poligono" is derived from the Greek polus (many) ' + 'and gonia (angle).');
  }

  // We will look at static and subclassed methods shortly
}

class Square extends Poligono {
  constructor(comprimento) {
    
    // super chama o construtor da classe pai que vai atribuir comprimento para
    // os atributos comprimento e altura herdados pela nossa classe filha Quadrado
    super(comprimento, comprimento);
    
    // Nas classes filhas, super() deve ser chamado antes de usar o this. Sem ele
    // vai ocorrer um erro de referência. O this agora se refere a classe filha Quadrado
    this.nome = 'Square';
  }

  // os atributos a seguir são herdados da classe pai Poligono: altura, comprimento e area.

  get area() {
    return this.altura * this.comprimento;
  }

  set area(valor) {
    this.area = valor;
  }
}

console.log(new Square(5));  //nova instância da classe Square


//CLASSE DENTRO DE CLASSE: classes internas podem ser chamadas como atributos da classe externa.
//Assim, a classe interna deve ser referenciada como uma função, no argumento da classe externa, e pode se auto-referenciar.
//No caso a seguir, a classe Quadrado tem a classe Perimetro
class Quadrado {
  constructor(lado) {   //Método construtor, que define os atributos que devem ser recebidos pela classe e os inicializa
    this.lado = lado;   //Inicialização: variável lado deve ser passada como primeiro argumento
    class perimetro {
      constructor(Perimetro) {
        this.Perimetro = Perimetro;  //Inicialização de Perimetro
      }
    }
    this.Perimetro = 4*lado;  //Esse construtor não poderia ser colocado antes da declaração desta classe (Hoisting)
    //Inicialização: a classe perimetro deve receber uma função que pode receber ela mesma ou realizar outros cálculos
  }
}

console.log(new Quadrado(this));  //this referencia os inicializadores com um valor padrão para o lado e para a classe interna
// > Quadrado {lado: Window, Perimetro: NaN}

//Podem ser passados quaisquer argumentos para a classe interna, basta que eles sejam válidos (não sejam undefined ou null):
console.log(new Quadrado(8, function(){}));  // > Quadrado {lado: 8, perimetro: 32}
console.log(new Quadrado(5, 9));             // > Quadrado {lado: 5, perimetro: 20}


//MÉTODOS PROTÓTIPOS
//São métodos que só podem ser chamados a partir de uma instâcnia da classe e que só utilizam os atributos construídos nela.
class Peso{
  constructor(massa){   //Construtor do atributo massa
    this.massa = massa;
  }

  get peso(){  //Método get, que permite a detecção do retorno desse método
    return this.calcularPeso();
  }

  calcularPeso(){  //Função que é chamada no método get e que calcula o Peso
    return this.massa * 9.8;
  }
}

const pessoa = new Peso(65);
console.log("Peso: " + pessoa.peso + " N (kg m/s²");  //o método é chamado a partir da instância 'pessoa'

//MÉTODOS ESTÁTICOS
//A palavra-chave static define um método estático de uma classe.
//étodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada.
//Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.
class Ponto {
    constructor(x, y) {  //recebe os atributos que correspondem as coordenadas dos pontos
        this.x = x;
        this.y = y;
    }

    static distancia(a, b) {  //a e b são variáveis que receberão coordenadas (um Objeto com duas propriedades: x e y)
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Ponto(5, 5);     //perceba que ao criar um novo 'Ponto', não é possível calcular uma distância, pois uma 
const p2 = new Ponto(10, 10);   //distãncia só pode existir com dois pontos

p1.distancia; //undefined  -  o método não funciona com um único ponto
p2.distancia; //undefined

console.log(typeof p1);
console.log(typeof p2);
console.log(p1);
console.log(p2);
console.log(Ponto.distancia(p1, p2));  //com os dois pontos (sem instâncias), o método funciona



//OBSERVAÇÃO: Empacotamento com protótipos e métodos estáticos
/*
Quando um método estático ou protótipo é chamado sem um objeto "this" configurado (ou com "this" como boolean, string, number, 
 undefined ou null), então o valor "this" será undefined dentro da função chamada.

Autoboxing não vai acontecer. O comportamento será o mesmo se escrevemos o código no modo não-estrito. 
*/

class Animal1 {
  falar1() {
    return this;
  }
  static comer1() {
    return this;
  }
}

let obj1 = new Animal1();
console.log(obj1.falar1()); // Animal1 {}
let falar1 = obj1.falar1;
console.log(falar1()); // undefined

Animal1.comer1(); // class Animal1
let comer1 = Animal1.comer1;
console.log(comer1()); // undefined

//Se escrevemos o código acima usando classes baseadas em função tradicional, 
// então o autoboxing acontecerá com base no valor de "this" para o qual a função foi chamada:

function Animal2() {}

Animal2.prototype.falar2 = function() {
  return this;
}

Animal2.comer2 = function() {
  return this;
}

let obj2 = new Animal2();
let falar2 = obj2.falar2;
console.log(falar2()); // objeto global
console.log(falar2);   // f() this

let comer2 = Animal2.comer2;
console.log(comer2()); // objeto global
console.log(comer2);   //f() this
