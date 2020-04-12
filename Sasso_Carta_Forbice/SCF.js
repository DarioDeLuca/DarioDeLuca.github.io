const button1 = document.getElementById('bottone_1')
const button2 = document.getElementById('bottone_2')
const button3 = document.getElementById('bottone_3')

let contatore_giocatore=0
let contatore_ia=0
let selezione = null

function VincitaGiocatore(){
    contatore_giocatore+=1
    console.log("Hai vinto questo round; il tuo punteggio è ora di "+ contatore_giocatore + " a " + contatore_ia)
}
function SconfittaGiocatore(){
    contatore_ia+=1
    console.log("Hai perso questo round; il tuo punteggio è ora di "+ contatore_giocatore + " a " + contatore_ia)
}

let Risultato = function (scelta_giocatore, scelta_ia) { 
    if(contatore_ia===10){
        console.log("Fine dei giochi, vince il computer!")
    }
    if (contatore_giocatore===10) {
    	console.log("Fine dei giochi, vince il player!")
    }
    else{
        if(scelta_giocatore === scelta_ia){
            console.log("Pareggio!, nessuno riceve un punto")
        }
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
    selezione=MossaComputer()
    Risultato("Sasso", selezione)
}

document.getElementById('bottone_2').onclick = Carta
function Carta(){
    console.log ("Hai scelto Carta")
    selezione=MossaComputer()
    Risultato("Carta", selezione)
}

document.getElementById('bottone_3').onclick = Forbice
function Forbice(){
    console.log ("Hai scelto Forbice")
    selezione=MossaComputer()
    Risultato("Forbice", selezione)
}

function SelezionaImmagine(){
   
    if (selezione==="Sasso"){

        immagine="https://vikings.help/users/vikings/imgExtCatalog/big/m060.png"
       
    }

    if (selezione==="Forbice"){
        immagine="https://cdn.iconscout.com/icon/premium/png-256-thumb/forbice-365179.png"
        

    }

    if (selezione==="Carta"){
        immagine="https://lh3.googleusercontent.com/proxy/ku4j6NnIwpSuSFjos81qIV-J4VIYdYn9fz8zQNh2aNW1jtjtId1djjMgEnMfXz3YXrHNMeR-qb6jNBYHp7SBtffUGJ6EKm9BaoyIj-GhlLyhnHvLZiubCq0q7b9Pu3SNINzATz8G" 
       
    }

    return immagine

}


 
     // <img name="prova" src="https://vikings.help/users/vikings/imgExtCatalog/big/m060.png">

      