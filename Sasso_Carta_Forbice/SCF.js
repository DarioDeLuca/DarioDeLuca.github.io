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
    var immagine_player = document.createElement("img");
    immagine_player.src="https://vikings.help/users/vikings/imgExtCatalog/big/m060.png"
    document.getElementById("scelta_giocatore").appendChild(immagine_player)
    selezione=MossaComputer()
    Risultato("Sasso", selezione)
}

document.getElementById('bottone_2').onclick = Carta
function Carta(){
    console.log ("Hai scelto Carta")
    var immagine_player = document.createElement("img");
    immagine_player.src="https://pngimage.net/wp-content/uploads/2018/06/foglio-di-carta-png.png"
    document.getElementById("scelta_giocatore").appendChild(immagine_player)
    selezione=MossaComputer()
    Risultato("Carta", selezione)
}

document.getElementById('bottone_3').onclick = Forbice
function Forbice(){
    console.log ("Hai scelto Forbice")
    var immagine_player = document.createElement("img");
    immagine_player.src="https://mikadoitalia.com/wp-content/uploads/scissors-2.png"
    document.getElementById("scelta_giocatore").appendChild(immagine_player)
    selezione=MossaComputer()
    Risultato("Forbice", selezione)
}


 


function SelezionaImmagine(){
    var immagine = document.createElement("img");
    
    if (selezione==="Sasso"){

        immagine.src="https://vikings.help/users/vikings/imgExtCatalog/big/m060.png"
        document.getElementById("scelta_computer").appendChild(immagine)
    }

    if (selezione==="Forbice"){
        immagine.src="https://mikadoitalia.com/wp-content/uploads/scissors-2.png"
        document.getElementById("scelta_computer").appendChild(immagine)

    }

    if (selezione==="Carta"){
        immagine.src="https://pngimage.net/wp-content/uploads/2018/06/foglio-di-carta-png.png" 
        document.getElementById("scelta_computer").appendChild(immagine)
    }

   

}





 
     // <img name="prova" src="https://vikings.help/users/vikings/imgExtCatalog/big/m060.png">

      