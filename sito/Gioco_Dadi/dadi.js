const bottone_lancio=document.getElementById("bottone_1")
const bottone_scelta=document.getElementById("bottone_2")
const dialogo=document.getElementById("spazio_scritte")
const dadi=["dado1.jpg","dado2.png","dado3.png","dado4.png","dado5.png","dado6.png",]
const posizioni=["primodado","secondodado","terzodado","quartodado","quintodado","sestodado"]
let somma=0
let contatore=0
let valore=0
let scelta_pc=0 
const obbiettivo=150


function LancioDadi(){ 
	
	if(somma > obbiettivo){
		Verifica(valore, contatore)
	}
	else{
		contatore+=1    
		for(i=0;i<6;i++){
			let immagine = document.createElement("img");
			let lancio = Math.floor(Math.random() * 6) + 1
			somma+=lancio 
			immagine.src=dadi[lancio-1]
			let posizione=posizioni[i]
			console.log(lancio)
			document.getElementById(posizione).innerHTML = ""
			document.getElementById(posizione).appendChild(immagine)
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
	return(k)
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
		dialogo.innerHTML="Ottimo lavoro, avevi ragione e sei riuscito a battermi, non avrei dovuto scommettere su "+scelta_pc+" tiri"
		document.getElementById('bottone_1').disabled=true
		document.getElementById('bottone_2').disabled=true
	}
	else if(falso_errore < errore_giocatore){
		console.log("A quanto pare avevo ragione io")
		dialogo.innerHTML="Peccato, non sei riuscito a vincere, sapevo avrei vinto puntando su "+scelta_pc+" tiri"
		document.getElementById('bottone_1').disabled=true
		document.getElementById('bottone_2').disabled=true
	}
	if(a===scelta_pc){

		console.log("parità")
		dialogo.innerHTML="Impossibile?! Come hai fatto a capire volessi scommettere su "+scelta_pc+" tiri?"
		document.getElementById('bottone_1').disabled=true
		document.getElementById('bottone_2').disabled=true
	}
}


function Registra(){
	valore = document.getElementById("display_puntata").value
	let scelta=parseInt(valore)
	if ((scelta/1)===scelta ){
		console.log("Ebbene, credi di farcela in "+ valore + " tiri?")
		dialogo.innerHTML="Ebbene, credi di farcela in "+ valore + " tiri? Perfetto, chi tra noi si avvicinerà maggiormente al numero esatto di tiri vincerà"
		document.getElementById('bottone_1').disabled=false
	}
	else{
		dialogo.innerHTML="Tu devi essere quello simpatico della famiglia..."
		document.getElementById('bottone_1').disabled=true
	}
}
bottone_scelta.onclick=Registra    
bottone_lancio.onclick=LancioDadi


