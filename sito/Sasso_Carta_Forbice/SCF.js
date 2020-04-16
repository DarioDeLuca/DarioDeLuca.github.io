const button1 = document.getElementById('bottone_1')
const button2 = document.getElementById('bottone_2')
const button3 = document.getElementById('bottone_3')
const badge_punteggi= document.getElementById('contatore_punteggi')


let contatore_giocatore=0
let contatore_ia=0
let selezione = null

function VincitaGiocatore(){
    contatore_giocatore+=1
    console.log("Hai vinto questo round; il tuo punteggio è ora di "+ contatore_giocatore + " a " + contatore_ia)
    badge_punteggi.innerHTML= "Hai vinto questo round; il punteggio è ora di "+ contatore_giocatore + " a " + contatore_ia
    
}
function SconfittaGiocatore(){
    contatore_ia+=1
    console.log("Hai perso questo round; il tuo punteggio è ora di "+ contatore_giocatore + " a " + contatore_ia)
    badge_punteggi.innerHTML= "Hai perso questo round; il punteggio è ora di "+ contatore_giocatore + " a " + contatore_ia
    
}

let Risultato = function (scelta_giocatore, scelta_ia) { 
    let immagine = document.createElement("img");
    if (contatore_ia===10 || contatore_giocatore===10){
        if(contatore_ia===10){
        console.log("Fine dei giochi, vince il computer!")
        badge_punteggi.innerHTML= "Fine dei giochi, vince il computer!" 
       
    
        }   
        if (contatore_giocatore===10) {
        console.log("Fine dei giochi, vince il player!")
        badge_punteggi.innerHTML= "Fine dei giochi, vince il player!"
        }
        
        document.getElementById('bottone_1').disabled=true
        document.getElementById('bottone_2').disabled=true
        document.getElementById('bottone_3').disabled=true

    }
    
    else{
        if(scelta_giocatore === scelta_ia){
            if (scelta_ia==="Sasso"){
                immagine.src="https://vikings.help/users/vikings/imgExtCatalog/big/m060.png"
                document.getElementById("scelta_computer").innerHTML = ""
                document.getElementById("scelta_computer").appendChild(immagine)
            }

            if (scelta_ia==="Forbice"){
                immagine.src="https://mikadoitalia.com/wp-content/uploads/scissors-2.png"
                document.getElementById("scelta_computer").innerHTML = ""
                document.getElementById("scelta_computer").appendChild(immagine)

            }

            if (scelta_ia==="Carta"){
                immagine.src="https://pngimage.net/wp-content/uploads/2018/06/foglio-di-carta-png.png"
                document.getElementById("scelta_computer").innerHTML = ""
                document.getElementById("scelta_computer").appendChild(immagine)
            }
        console.log("Pareggio!, nessuno riceve un punto")
        badge_punteggi.innerHTML= "Pareggio!, nessuno riceve un punto"
        }

        else{
            if(scelta_ia==="Sasso"){

                immagine.src="https://vikings.help/users/vikings/imgExtCatalog/big/m060.png"
                document.getElementById("scelta_computer").innerHTML = ""
                document.getElementById("scelta_computer").appendChild(immagine)


                if(scelta_giocatore==="Forbice"){SconfittaGiocatore()}//vince il player (sasso rompe forbice)    
                else{VincitaGiocatore()} //vince l'ia (carta avvolge sasso)
            }

            if(scelta_ia==="Forbice"){

                immagine.src="https://mikadoitalia.com/wp-content/uploads/scissors-2.png"
                document.getElementById("scelta_computer").innerHTML = ""
                document.getElementById("scelta_computer").appendChild(immagine)

                if(scelta_giocatore==="Carta"){SconfittaGiocatore()}//vince il player (forbice taglia carta)
                else{VincitaGiocatore()}//vince l'ia (sasso rompe forbice)
            }
            if(scelta_ia==="Carta"){

                immagine.src="https://pngimage.net/wp-content/uploads/2018/06/foglio-di-carta-png.png" 
                document.getElementById("scelta_computer").innerHTML = ""
                document.getElementById("scelta_computer").appendChild(immagine)

                if(scelta_giocatore==="Sasso"){SconfittaGiocatore()}//vince il player (carta avvolge sasso)
                else{VincitaGiocatore()}//vince l'ia (forbice taglia carta)
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
    let immagine_player = document.createElement("img");
    immagine_player.src="https://vikings.help/users/vikings/imgExtCatalog/big/m060.png"
    document.getElementById("scelta_giocatore").innerHTML = "";
    document.getElementById("scelta_giocatore").appendChild(immagine_player)
    selezione=MossaComputer()
    Risultato("Sasso", selezione)
}

document.getElementById('bottone_2').onclick = Carta
function Carta(){
    console.log ("Hai scelto Carta")
    let immagine_player = document.createElement("img");
    immagine_player.src="https://pngimage.net/wp-content/uploads/2018/06/foglio-di-carta-png.png"
    document.getElementById("scelta_giocatore").innerHTML = "";
    document.getElementById("scelta_giocatore").appendChild(immagine_player)
    selezione=MossaComputer()
    Risultato("Carta", selezione)
}

document.getElementById('bottone_3').onclick = Forbice
function Forbice(){
    console.log ("Hai scelto Forbice")
    let immagine_player = document.createElement("img");
    immagine_player.src="https://mikadoitalia.com/wp-content/uploads/scissors-2.png"
    document.getElementById("scelta_giocatore").innerHTML = "";
    document.getElementById("scelta_giocatore").appendChild(immagine_player)
    selezione=MossaComputer()
    Risultato("Forbice", selezione)
}