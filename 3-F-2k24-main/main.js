
const botoes=document.querySelectorAll(".botao");
const conteudo  = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");

const tempoObjetivo1= new Date(2027,5,9,17,49);
const tempoObjetivo2= new Date(2027,10,18,14,29);
const tempoObjetivo3= new Date(2025,3,9,10,30);
const tempoObjetivo4= new Date(2024,10,9,17,20);

function calculoTempo(tempoObjetivo){
    let segundos
    let minutos
    let horas
    let dias
    segundos=(tempoObjetivo1-agora)/1000;
    minutos= segundos/60;
    horas= minutos/60;
    dias= horas/24;
    segundos = Math.floor(segundos)
    minutos = Math.floor(minutos)
    horas = math.floor(horas) 
    dias = math.floor(dias)
}
let contadorPrimeiro = calculoTempo(tempoObjetivo1)
contador[0].textContent = `faltam ${contadorPimeiro[0]} dias, faltam ${contadorPrimeiro[1]}
let contador = calculaTempo(tempoObjetivo2)
contador[1].textContex = `faltam ${contadorSegundo[0]} dias, ${contadorSegundo[1]}

for (let i = )
 let agora=new Date();
 let segundos
 let minutos
 let horas
 let dia

  Math.floor ()
  segundos=(tempoObjetivo1-agora)/1000;
  minutos= segundos/60;
  horas= minutos/60;
  dias= horas/24;   

  segundos = Math.floor (segundos);
  minutos = Math.floor (minutos);
  horas = Math.floor (horas);
  dias = Math.floor (dias); 
  
  segundos = segundos %60;
  minutos = minutos %60;
  horas = horas %24;




  contador[0].textContent=`Faltam ${dias} dias, ${horas} horas,${minutos} minutos e ${segundos} segundos`
  
  contador[1].textContent=tempoObjetivo2-agora
  contador[2].textContent=tempoObjetivo3-agora
  contador[3].textContent=tempoObjetivo4-agora  


for (let  i = 0 ; i < botoes.length; i++){
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")

    }
}