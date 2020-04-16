const badge_punteggi= document.getElementById('contatore_punteggi')
let counter=0
const carte = ["reginacuori.png", "assofiori.jpg", "assopicche.jpg"]
const lista = shuffle(carte)
const posizioni = ["primacarta", "secondacarta", "terzacarta"]    


function Inizializzazione(){
    for(i=0;i<3;i++){
      let immagine = document.createElement("img");
      immagine.src = "retrocarte.jpg"
      document.getElementById(posizioni[i]).appendChild(immagine)

    } 
}
  

function Scopri(posto){
  let immagine = document.createElement("img");
  console.log(lista)
  let carta = posizioni[posto]   
  immagine.src = lista[posto]
if (counter!=2){
  if (lista[posto]== "reginacuori.png"){
      console.log("Hai vinto!")
      counter+=3
     
  } 
  else{
      counter+=1
      console.log("Riprova")
      badge_punteggi.innerHTML= "Riprova"
  }  
  document.getElementById(carta).innerHTML = ""
  document.getElementById(carta).appendChild(immagine)
}

if (counter>=3){
badge_punteggi.innerHTML= "Hai vinto!!!"
  }

if (counter===2){
  badge_punteggi.innerHTML= "HAI PERSO!!!"
}


}


function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

