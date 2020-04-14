const badge_punteggi= document.getElementById('contatore_punteggi')
let contatore_giocatore=0
let contatore_ia=0
const carte = ["retrocarte.jpg", "retrocarte.jpg", "retrocarte.jpg"]

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



        
            
           
function Inizializzazione1(){
    let immagine = document.createElement("img");
    immagine.src = "retrocarte.jpg"
    document.getElementById("primacarta").appendChild(immagine)
   

}
   function Inizializzazione2(){
    let immagine = document.createElement("img");
    immagine.src = "retrocarte.jpg"
    document.getElementById("secondacarta").appendChild(immagine)
   

}    
function Inizializzazione3(){
    let immagine = document.createElement("img");
    immagine.src = "retrocarte.jpg"
    document.getElementById("terzacarta").appendChild(immagine)

}


function Disposizione(){
    Inizializzazione1()
    Inizializzazione2()
    Inizializzazione3()
} 
  
//function SelezioneCarta(){
  //  let immagine = document.createElement("img");
 //   const lista = carte
  //  let indice = [];
  //  const posizione=["primacarta", "secondacarta", "terzacarta"]
  ///  while(indice.length < 3){
 //       var r = Math.floor(Math.random() * 3 ) ;
 //       if(indice.indexOf(r) === -1) 
//            indice.push(r);
 //   }  
 //   console.log(indice);    
 //   for (let i = 0; i < indice.length; i++) {
 //       const scelta = lista[indice[i]];
  //      immagine.src = scelta
  //      document.getElementById(posizione[i]).appendChild(immagine)
       
//}   
//}            
   //