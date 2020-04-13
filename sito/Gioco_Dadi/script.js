const bottone_lancio=document.getElementById("bottone_1")
const bottone_scelta=document.getElementById("bottone_2")
let somma=0
let contatore=0
let valore=0
let scelta_pc=0
const obbiettivo=100


function LancioDadi(){
    if(somma===obbiettivo){
        Verifica(valore, scelta_pc,contatore)
    }
    else{    for(i=0;i<6;i++){
         let lancio = Math.floor(Math.random() * 6) + 1
        somma+=lancio 
    }
    contatore+=1
    console.log("il totale dopo "+ contatore + " tiri è " + somma)  
    }
}

function Verifica (a, b, count){
    if(a===count){
        console.log("HAI VINTO")
    }
    if (b===count){
        console.log("HAI PERSO")
    }
}


function Registra(){
    const valore = document.getElementById("exampleInputPassword1").value
    console.log(valore)
}

bottone_scelta.onclick=Registra    
bottone_lancio.onclick=LancioDadi






