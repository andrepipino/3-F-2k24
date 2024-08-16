const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");


contador[0].textContent = "Olá"
const tempoObjetivo1 = new Date(2024,11,31,23,59)
const tempoObjetivo2 = new Date(2024,11,31,23,59)
const tempoObjetivo3 = new Date(2024,11,31,23,59)
const tempoObjetivo4 = new Date(2024,11,31,23,59)

function calculTempo(tempoObjetivo){
    const agora = new Date()
    let segundos
    let minutos
    let horas
    let dia
    segundos = (tempoObjetivo1-agora)/1000
    minutos = segundos/60
    horas = minutos/60
    dias = horas/24
    segundos = Math.floor(segundos);
    minutos = Math.floor(minutos);
    horas = Math.floor(horas)
    dia = Math.floor(dias)
    return `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`


}



for (let i = 0 ; i < botoes.length ; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length ; j++){
        botoes[j].classList.remove("ativo");
        conteudo[j].classList.remove('ativo')
        }
        botoes[i].classList.add("ativo");
        conteudo[i].classList.add("ativo")
    }
}
