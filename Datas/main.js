//Datas

//Para manipular e realizar consultas, verificações ou chamadas que usam as datas, horários, locais, etc, usa-se a classe interna Date.

//Com ela é possível buscar e usar a hora atual, as datas, os segundos e minutos, o local do usuário, entre outros.

//Os exemplos a seguir imprimem na página várias aplicações dos métodos com o objeto Date, que é atribuído a variável data.

let data = new Date();

//Dia de mês:
function diaDoMes(){
	document.getElementById('diaDoMes').innerHTML = data.getDate();  //Método getDate (Retorno: inteiro, 1 a 31)
}

//Mês:
function mes(){
	let m = data.getMonth();  //Método getMonth (Retorno: inteiro, 0 a 11)
	let text = "";
	switch(m){
		case 0:
			text += m+1 + " - Janeiro";
			break;
		case 1:
			text += m+1 + " - Fevereiro";
			break;
		case 2:
			text += m+1 + " - Março";
			break;
		case 3:
			text += m+1 + " - Abril";
			break;
		case 4:
			text += m+1 + " - Maio";
			break;
		case 5:
			text += m+1 + " - Junho";
			break;
		case 6:
			text += m+1 + " - Julho";
			break;
		case 7:
			text += m+1 + " - Agosto";
			break;
		case 8:
			text += m+1 + " - Setembro";
			break;
		case 9:
			text += m+1 + " - Outubro";
			break;
		case 10:
			text += m+1 + " - Novembro";
			break;
		case 11:
			text += m+1 + " - Dezembro";
			break;
	}
	document.getElementById("mes").innerHTML = text;  
}

//Dia da semana:
function diaDaSemana(){
	let dia;
	const d = data.getDay();   //Método getDay (Retorno: inteiro, 0 a 6)
	switch(d){
		case 0: 
			dia = "Domingo";
			break;
		case 1: 
			dia = "Segunda";
			break;
		case 2: 
			dia = "Terça";
			break;
		case 3: 
			dia = "Quarta";
			break;
		case 4: 
			dia = "Quinta";
			break;
		case 5: 
			dia = "Sexta";
			break;
		case 6: 
			dia = "Sábado";
			break;
	}
	document.getElementById('diaDaSemana').innerHTML = dia;
}

//Ano:
function ano(){
	document.getElementById("ano").innerHTML = data.getFullYear();  //Método getFullYear (Retorno: inteiro com 4 dígitos [> 1900])
}

//Número de milissegundos desde o último segundo:
function millisec(){
	document.getElementById("millisec").innerHTML = data.getMilliseconds();  //Método getMilliseconds (Retorno: inteiro, 0 a 999)
}

//Número de minutos desde a última hora:
function minuto(){
	document.getElementById("minuto").innerHTML = data.getMinutes();  //Método getMinutes (Retorno: inteiro, 0 a 59)
}

//Segundos desde o último minuto:
function sec(){
	document.getElementById("sec").innerHTML = data.getSeconds();  //Método getSeconds (Retorno: inteiro, 0 a 59) 
}

//Número de milissegundos desde a meia noite de 1º de janeiro de 1970:
function allTime(){
	document.getElementById("allTime").innerHTML = data.getTime();  //Método getTime (Retorno: inteiro) 
}

//A data e hora GMT-3 em formato de string, a cada segundo:
function gmt(){
	d = new Date;
	document.getElementById("gmt").innerHTML = d.toString();
	setTimeout(gmt, 1000);
}

/*
Outros métodos:

setDate()	        Define o dia, dado o número entre 1 e 31	          Data em milissegundos
setUTCDate()	    Data em milissegundos
setFullYear()	    Data em milissegundos
setUTCFullYear()	Data em milissegundos
setHours()	        Define a hora, dado um número entre 0 e 23	          Data em milissegundos
setUTCHours()
setMilliseconds()	    Define os milissegundos, dado um número	          Data em milissegundos
setUTCMilliseconds()	Data em milissegundos
setMinutes()	        Define os minutos, dado um número entre 0 e 59	  Data em milissegundos
setUTCMinutes()
setMonth()	            Define o mês, dado um número entre 0 e 11.	      Data em milissegundos
setUTCMonth()
setSeconds()	        Define os segundos, dado um número entre 0 e 59	Data em milissegundos
setUTCSeconds()
setTime()	            Define uma data, dado um número de milissegundos desde janeiro de 1970	  Data em milissegundos
setYear()	            Define o ano, dado um número de dois ou quatro dígitos	                  Data em milissegundos
toGMTString()	        A data e hora GMT em formato de string	                                  Day dd mmm yyyy, hh:mm:ss GMT
UTC()	                Sendo dada uma data no formato de ano, mês e dia 
                        (e horas, minutos, segundos e milissegundos opcionais), 
                        retorna o número de milissegundos desde a meia noite de 1º de jan. de 1970	    Data em milissegundos

valueOf()	            Número de milissegundos desde a meia noite de 1º de janeiro de 1970	            Data em milissegundos
*/