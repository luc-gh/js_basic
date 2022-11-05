// Temporizadores (timers)

/*
Temporizadores são funções embutidas no JavaScript (built-in timer functions) para chamar funções de retorno após um determinado tempo.
Na prática, podemos usar os temporizadores para que um certo algoritmo seja executado em intervalos de tempo ou que um algoritmo 
 espere um determinado tempo para dar algum retorno ao usuário.

É basicamente um método para controlar retornos ao usuário de acordo com o tempo.
*/

//Exemplo 1: espera de um determinado tempo para retornar uma ação
//Aqui, será usado o método setTimeout(), que retorna uma função após um determinado tempo (em milissegundos) e apenas uma única vez.
//Sintaxe: setTimeout(function() { definir a função }, tempo em milissegundos);

//A função a seguir faz com que a página mostre a hora atual para o usuário só depois de 3 segundos de carregamento:
function meuRelogio() {
  setTimeout(function() {
  		var x = new Date().toLocaleTimeString();       //toLocaleTimeString() pega a hora atual do sistema
        document.getElementById('rel').innerHTML = x;  //innerHTML adiciona o item atrbuído ao elemento HTML indicado
  }, 3000);  //é definido um intervalo (delay) de 3s (3000 ms) 
}