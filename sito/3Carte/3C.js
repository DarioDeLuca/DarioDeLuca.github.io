const badge_punteggi= document.getElementById('contatore_punteggi')
let counter=0
const carte = ["reginacuori.png", "assofiori.jpg", "assopicche.jpg"]
const posizioni = ["primacarta", "secondacarta", "terzacarta"]    
            
           
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
  

function Scopri(posto){
  let immagine = document.createElement("img");
  const lista = carte
  let carta = posizioni[posto]

  let indice =  Math.floor(Math.random() * 3 ) ;   
  immagine.src = lista[indice]
  if (lista[indice]== "reginacuori.png"){
      console.log("Hai vinto!")
      badge_punteggi.innerHTML= "Hai vinto!"
  } 
  else{
    console.log("Hai perso!")
    badge_punteggi.innerHTML= "Hai perso!"
  } 
  document.getElementById(carta).innerHTML = ""
  document.getElementById(carta).appendChild(immagine)

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