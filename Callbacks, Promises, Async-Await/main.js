//Arquitetura assíncrona de execução

//https://blog.loginradius.com/engineering/callback-vs-promises-vs-async-await/

//A diferença fundamental entre uma arquitetura síncrona e assícrona é a seguinte:
/*
-> Num processo síncrono, quando uma thread (ou linha/encadeamento de execução) recebe uma requisição (request, ela leva esta até 
   o servidor ou qualquer coisa responsável pela resposta (response) e espera até que esta esteja pronta. Quando a resposta está 
   concluída, a thread retorna ao usuário inicial com a resposta para a requisição. 
   E só a partir daí, pode ser usada para outra requisição.

-> Já num processo assíncrono, uma thread pode receber uma requisição, enviar ao destinatário que vai processar a resposta e enquanto
   isso ocorre, pode buscar outras requisições e enviá-las a seus destinatários, sejam eles os mesmos ou não. Dessa forma, uma única
   linha de execução pode receber e enviar várias requisições e devolver várias respostas. Entretanto, isso faz com que a ordem entre  
   requisições e resspostas não seja necessariamente a mesma, já que uma requisição secundária pode ter a sua resposta antes de uma
   primeira, então processos dependentes de outros devem ser estruturados com cuidado.
*/

//As maneiras de estruturar um código assíncrono em JS se constroem com as estruturas: Callbacks, Promises e Async-await.

//CALLBACKS
//Em JS, funções são objeos, então podem receber outros objetos como parâmetros.
//Também é possível passar funções como parâmetros de outras funções e chamar funções dentro de funções.
//Uma callback (ou chamada de retorno) é uma função chamada ou passada para outra.
//A seguir o exemplo mostra uma função que contém outra internamente:
function printString1(){
	console.log("Tom");        //comando no escopo da função externa
   setTimeout(function(){     //setTimeout é um comando que executa uma função de forma assíncrona
      console.log("Jacob");   //corpo de função interna
   }, 300);                   //3 segundos de espera 
   console.log("Mark");       //comando no escopo da função externa
}

printString1();  

/*
Os comandos da função externa acima serão executados em sequência, mas setTimeout irá impedir a execução do seu comando interno 
 porque tem como regra esperar um determinado evento (nesse caso, 3 segundos se passarem) para executar seus comandos.
Mas a função setTimeout, por ser assíncrona, não impede que a execução anterior continue, então os comandos seguintes a ela ocorrem
 normalmente, enquanto ela espera pelos 3 segundos.

OBS: caso a execução dos comandos subsequentes demorasse mais de 3 segundos, a função interna seria executada da mesma forma e sem
 interferir nas outras execuções.
*/

//Callback como um função setada (Arrow Function):
function printString2(){
   console.log("Tom"); 
   setTimeout(() =>  { console.log("Jacob"); }, 300);  //Essa estrutura simples substitui funções com comandos únicos
   console.log("Mark")
}

printString2();  //O resultado será o mesmo do exemplo anterior


//Um problema com o uso das Callbacks é chamado "Inferno de callbacks". 
//Acontece quando muitas funções são aninhadas umas dentro de outras, tornando a compreensão de código árdua e cansativa.
//As Promises são um recurso para fugir desse problema.


//PROMISES
//As Promises são como promessas na vida real. São ações planejadas para o futuro, que podem ser cumpridas, ou não.
//Em JS, as Promises são usadas para manipular o resultado assíncrono de uma operação.

//Como JS não foi desenvolvido para esperar uma operação assíncrona ser concluída para executar blocos de código síncronos,
//pode-se usar as Promises para adiar a execução de um bloco síncrono até que uma solicitação assíncrona seja concluída.

//Dessa forma, outras operações podem continuar em execução sem interrupção.

//As Promises tem três estados possíveis:

//1. Pendente (pending) - estado inicial, à espera de um resultado
//2. Resolvido (fulfilled) - promessa cumprida, operação concluída com sucesso
//3. Rejeitado (rejected) - promessa descumprida, falha na operação

//Estrutura: as Promises são criadas com um construtor que tem dois parâmetros: um para sucesso (2) e outro para falha (3)

/*

Sintaxe:

const myPromise = new Promise((resolve, reject) => {  
    // condition
});

*/


var condicao1 = false, condicao2 = true;  //condições de exemplo (variáveis globais)

//Criado uma Promise:
const primeiraPromessa = new Promise((resolve, reject) => {   //função setada 
    if(condicao1) {  //condição para retornar resultado (nesse caso, a falsa)
         setTimeout(function(){ 
             resolve("Promise foi resolvida!");   //Resolve indica que a promessa foi resolvida
        }, 300);
    } else {    
        reject('Promise foi rejeitada!');  //Reject indica que a promessa não foi resolvida ou houve falha
    }
});

//Criado outra Promise:
const segundaPromessa = new Promise((resolve, reject) => {   //função setada 
    if(condicao2) {  //condição para retornar resultado (nesse caso, a verdadeira)
         setTimeout(function(){ 
             resolve("Promise foi resolvida!");   //Resolve indica que a promessa foi resolvida
        }, 300);
    } else {    
        reject('Promise foi rejeitada!');  //Reject indica que a promessa não foi resolvida ou houve falha
    }
});

//Usando a Promise:
const resultado = function(){  //variável que recebe função que imprime resultado das Promises 1 e 2
   primeiraPromessa            //chamada da Promise
   .then((sucesso) => {        //then é usado para indicar o resultado para uma Promise resolvida 
      console.log("Sucesso: " + sucesso);  //mensagem da sucesso é impressa
   })
   .catch((falha) => {         //catch é usado para indicar o resultado para uma Promise rejeitada
      console.log("Falha: " + falha);      //mensagem da falha é impressa
   })

   segundaPromessa             //chamada da Promise
   .then((sucesso) => {        //then é usado para indicar o resultado para uma Promise resolvida 
      console.log("Sucesso: " + sucesso);  //mensagem da sucesso é impressa
   })
   .catch((falha) => {         //catch é usado para indicar o resultado para uma Promise rejeitada
      console.log("Falha: " + falha);      //mensagem da falha é impressa
   })
}

//Chamada:
resultado();

/*  ----> OBSERVAÇÃO:  (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Veja que a execução deste código mostra que a primeiraPromise (que é rejeitada) é executada antes das Callbacks,
enquanto a segundaPromise (que é resolvida) é executada após aquelas.

Isso ocorre porque a resolução com sucesso de uma Promise infere uma operação assíncrona, que é definida na escopo .then.
Logo essa operação permite a execução de outros blocos de código síncronos antes da própria.

Porém, a resolução como falha de uma Promise infere uma ação síncrona, que é definida no escopo .catch, e é executada 
sequencialmente as outras do código, impedindo que outras operações assíncronas sejam executadas antes dela.

*/

//ENCADEAMENTO (Chaining)
//Às vezes é necessário chamar múltiplas requisições assíncronas, e para isso, depois que uma primeira Promise é resolvida 
//(ou rejeitada), define-se um novo processo que iniciará a resolução de uma nova Promise, por um método chamado encadeamento.

//O exemplo a seguir executa duas Promises em sequência a partir de uma mesma chamada de função, e mostra o resultado da última:

const mensagem1 = new Promise((resolve, reject) => {
    const m = "Promise resolvida.";
    resolve(m);
})

const mensagem2 = function(){
   return new Promise((resolve,reject) => {
      let p = "Promise rejeitada.";
      reject(p);
   });
}

const demoPromise = function() {
  mensagem1
  .then(mensagem2)
  .then((successMsg) => {
      console.log("Sucesso: " + successMsg);
  })
  .catch((errorMsg) => { 
      console.log("Erro: " + errorMsg);
  })
}

demoPromise();  //Imprime "Erro: Promise rejeitada.", de forma síncrona.
//Como a Promise mensagem1 é encadeada com o .then, a mensagem impressa é resultado do envio da segunda citada (com .then).


//ASYNC-AWAIT
//É um método de escrita mais doce das Promises. Torna o código mais próximo ao de estruturas síncronas, mais legível.
/*

Sintaxe:

async function imprimirAsync(){
  await printString("um")
  await printString("dois")
  await printString("três")
}

Veja que a palavra-chave “async” para a função wrapper printMyAsync. Isso permite que o JavaScript saiba que estamos usando a sintaxe async/await e é necessário se você quiser usar Await. Isso significa que você não pode usar Await em nível global. Ele sempre precisa de uma função wrapper. Ou podemos dizer que await é usado apenas com uma função assíncrona.

A palavra-chave await é usada em uma função assíncrona para garantir que todas as promessas retornadas na função assíncrona 
 sejam sincronizadas, ou seja. eles esperam um pelo outro. 

Await elimina o uso de callbacks em .then() e .catch(). 
Ao usar async e await, async é anexado ao retornar uma promessa, await é anexado ao chamar uma promessa. 

Try e catch também são usados para obter o valor de rejeição de uma função assíncrona.

*/


/*
No exemplo a seguir, aguardamos sucessivamente duas promessas. O progresso se move através da função fooem três estágios.

   A primeira linha do corpo da função foo é executada de forma síncrona, com a expressão await configurada com a promessa pendente. 
   A execução de foo é então suspensa e o controle é devolvido à função que chamou foo.
   Algum tempo depois, quando a primeira promessa foi cumprida ou rejeitada, o controle volta para foo. 
   O resultado do primeiro cumprimento de promessa (se não foi rejeitado) é retornado da expressão await. 
   Aqui, 1 é atribuído a result1.

   O progresso continua e a segunda expressão de espera é avaliada. Mais uma vez, o progresso fooé suspenso e o controle é rendido.
   Algum tempo depois, quando a segunda promessa foi cumprida ou rejeitada, o controle entra novamente foo. 
   O resultado da segunda resolução de promessa é retornado da segunda expressão de espera. 
   Aqui, 2 é atribuído a result2.

   O controle se move para a expressão de retorno (se houver). 
   O valor de retorno padrão de undefinedé retornado como o valor de resolução da promessa atual.
*/
async function foo() {
   const result1 = await new Promise((resolve) =>
      setTimeout(() => resolve("1"))
   );
   const result2 = await new Promise((resolve) =>
      setTimeout(() => resolve("2"))
   );
   console.log(result1);  //ambas estas impressões são síncronas
   console.log(result2);
}

foo();

//Observe como o encadeamento de Promises não é construído de uma só vez. 
//Em vez disso, a cadeia é construída em etapas à medida que o controle é sucessivamente gerado e retornado à função assíncrona. 
//Como resultado, devemos estar atentos ao comportamento de manipulação de erros ao lidar com operações assíncronas simultâneas.