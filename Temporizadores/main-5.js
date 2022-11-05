//Temporizadores

//Temporizador 3 - Ação executada repetidamente em intervalos de tempo - método setTimout() com chamada recursiva

//Utiliza-se o método setTimeout() que chama uma função recursiva para retornar valores em intervalos de tempo pré-definidos (ms).

//OBS: A vantagem de usar a função setTimeout() com chamada recursiva em relação à função setInterval() é a performance da aplicação.



/*
Sintaxe:

function função_recursiva() {
  ... definir ação recursiva ...
  setTimeout(funcção_recursiva, tempo em milisegundos);
}


Para interromper o processo de repetição pode-se utilizar a função clearTimeout(): clearTimout(nome_função);
*/

//Exemplo:
var temporizador;

function meuRelogio() {
	var hora = new Date().toLocaleTimeString();  //atribuição
    document.getElementById('rel').innerHTML = hora;  //envio
    temporizador = setTimeout(meuRelogio, 1000);  //recursividade
}

function pararRelogio() {
	clearTimeout(temporizador);  //parada
}