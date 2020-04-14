const button1 = document.getElementById('bottone_1')
const button2 = document.getElementById('bottone_2')
const button3 = document.getElementById('bottone_3')

let contatore_giocatore=0
let contatore_ia=0

function VincitaGiocatore(){
    contatore_giocatore+=1
    console.log("Hai vinto questo round; il tuo punteggio è ora di "+ contatore_giocatore + " a " + contatore_ia)
}
function SconfittaGiocatore(){
    contatore_ia+=1
    console.log("Hai perso questo round; il tuo punteggio è ora di "+ contatore_giocatore + " a " + contatore_ia)
}
let Risultato = function (scelta_giocatore, scelta_ia) { 
    
    if(contatore_ia===10 || contatore_giocatore===10){
        console.log("Fine dei giochi, abbiamo un vincitore!")
    }
    else{
        if(scelta_giocatore === scelta_ia){console.log("Pareggio!, nessuno riceve un punto")}
        else{
            if(scelta_giocatore==="Sasso"){
                if(scelta_ia==="Forbice"){VincitaGiocatore()}//vince il player (sasso rompe forbice)
                else{SconfittaGiocatore()} //vince l'ia (carta avvolge sasso)
            }
            if(scelta_giocatore==="Forbice"){
                if(scelta_ia==="Carta"){VincitaGiocatore()}//vince il player (forbice taglia carta)
                else{SconfittaGiocatore()}//vince l'ia (sasso rompe forbice)
            }
            if(scelta_giocatore==="Carta"){
                if(scelta_ia==="Sasso"){VincitaGiocatore()}//vince il player (carta avvolge sasso)
                else{SconfittaGiocatore()}//vince l'ia (forbice taglia carta)
            }
        }   
    }     
}
   
function MossaComputer(){
	const lista = ["Sasso", "Carta", "Forbice"]
    const scelta =lista[Math.floor(Math.random() * lista.length)];
    console.log("il pc ha scelto " + scelta)
    return scelta
}


document.getElementById('bottone_1').onclick = Sasso
function Sasso(){
    console.log ("Hai scelto Sasso")
    Risultato("Sasso", MossaComputer())
}

document.getElementById('bottone_2').onclick = Carta
function Carta(){
    console.log ("Hai scelto Carta")
    Risultato("Carta", MossaComputer())
}

document.getElementById('bottone_3').onclick = Forbice
function Forbice(){
    console.log ("Hai scelto Forbice")
    Risultato("Forbice", MossaComputer())
}
