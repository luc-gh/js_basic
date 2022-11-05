// Temporizadores (timers)

//Agora um exemplo de temporizador que executa algo repetidamente em intervalos de tempo.

//Para este tipo de temporizador utiliza-se o método setInterval() que retorna valores 
// em intervalos de tempo pré-definidos em milissegundos indefinidamente. 

/*

A sintaxe geral para esta função:

SEM VARIÁVEL:
setInterval(function() { definir a função }, tempo em milissegundos);

COM VARIÁVEL: 
var nome_variável = setInterval(nome_função, tempo em milisegundos)

function nome_função() {
  ... definir ação ...
} 

*/

//E para interromper o processo de repetição podemos utilizar o método clearInterval(): clearInterval(nome_variavel);

//Exemplo 1: altera horário mostrado a cada segundo:
function meuRelogio() {
    setInterval (function() {
        var hora = new Date().toLocaleTimeString();  //mostra hora do sistema
        document.getElementById('rel').innerHTML = hora;
    }, 1000);
}    