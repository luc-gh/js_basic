//Temporizadores (timers)

//Já no caso a seguir, será usado o método setInterval() com botões para iniciar e interromper uma ação.

//Nesse caso, a funções são chamadas nas tags dos botões no arquivo html.

//No caso, foram usadas duas funções para iniciar e interromper o temporizador através dos métodos setInterval() e clearInterval().
//Observe que atribui-se o método setInterval() a variável temporizador:

var temporizador;

function iniciarRelogio() {
    temporizador = setInterval(meuRelogio, 1000);  //Inicia a chamada da função meuRelogio
}

function meuRelogio() {  //envia horário atual do sistema
    var hora = new Date().toLocaleTimeString();
    document.getElementById('rel').innerHTML = hora;
}

function pararRelogio() {  //OBS: a função não retira o valor do horário da tela, apenas para de enviar a hora cada segundo
    clearInterval(temporizador);  
}