const bottone_lancio=document.getElementById("bottone_1")
const bottone_scelta=document.getElementById("bottone_2")
const dialogo=document.getElementById("spazio_scritte")
let somma=0
let contatore=0
let valore=0
let scelta_pc=0 
const obbiettivo=100


function LancioDadi(){ 
    if(somma > obbiettivo){
        Verifica(valore, contatore)
    }
    else{
        contatore+=1    
        for(i=0;i<6;i++){
         let lancio = Math.floor(Math.random() * 6) + 1
            somma+=lancio 
        }
        console.log("il totale dopo "+ contatore + " tiri è " + somma)
        dialogo.innerHTML= "il totale dopo "+ contatore + " tiri è " + somma  
    }
}

function ErroreCalcolato(){
    scelta_pc=contatore
    const k= Math.floor(Math.random() * 6)
    const random=Math.floor(Math.random() * 2) +1
    if(random===1){scelta_pc-=k}
    else {scelta_pc+=k}
    if(scelta_pc<0){scelta_pc= -scelta_pc}
    console.log("Bene, abbiamo finito, avevo scommesso ci saresti riuscito in "+ scelta_pc + " tiri, vediamo chi si è  avvicinato di più")
    dialogo.innerHTML= "Bene, abbiamo finito, avevo scommesso ci saresti riuscito in "+ scelta_pc + " tiri, vediamo chi si è  avvicinato di più" 
    return(scelta_pc)
}

function Verifica (a, count){
    let errore_giocatore=a-count
    if (errore_giocatore < 0){
        errore_giocatore = -errore_giocatore       
    }
    const falso_errore = ErroreCalcolato()
    console.log("il computer ha sbagliato di "+ falso_errore)
    console.log("il player ha sbagliato di "+ errore_giocatore)
    if(errore_giocatore < falso_errore){
        console.log("Ottimo lavoro, hai vinto!")
        dialogo.innerHTML="Ottimo lavoro, avevi ragione e sei riuscito abattermi!"
    }
    else if(falso_errore < errore_giocatore){
        console.log("A quanto pare avevo ragione io")
        dialogo.innerHTML="Peccato, non sei riuscito a vincere"
    }
    else{
        console.log("parità")
        dialogo.innerHTML="Impossibile?! Come hai fatto a capire cosa stessi pensando?"
    }
}


function Registra(){
    valore = document.getElementById("display_puntata").value
    console.log("Ebbene, credi di farcela in "+ valore + " tiri?")
    dialogo.innerHTML="Ebbene, credi di farcela in "+ valore + " tiri? Perfetto, chi tra noi si avvicinerà maggiormente al numero estto di tiri vincerà"
}

bottone_scelta.onclick=Registra    
bottone_lancio.onclick=LancioDadi






