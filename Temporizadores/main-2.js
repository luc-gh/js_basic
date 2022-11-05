// Temporizadores (timers)

/*

É possível utilizar o método setTimeout() atribuindo-o à uma variável:


var nome_variável = setTimout(nome_função, tempo em milisegundos)

function nome_função() {
  ... definir ação ...
}

*/

//A seguir, um código que faz o mesmo que no primeiro exemplo, porém com uma variável recebendo a função:

var temporizador = setTimeout(meuRelogio, 3000);  //perceba que nessa sintaxe, não é preciso indicar a função no html (onload) 

function meuRelogio() {
  var hora = new Date().toLocaleTimeString();
  document.getElementById('rel').innerHTML = hora;
}