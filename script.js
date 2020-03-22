const button1 = document.getElementById('bottone_1')
const button2 = document.getElementById('bottone_2')
const button3 = document.getElementById('bottone_3')
const button4 = document.getElementById('bottone_4')

const selezione = () => {

	const lista = ["Sasso", "Carta", "Forbice"]
	const scelta =lista[Math.floor(Math.random() * 3)];
	return(scelta)
}
console.log(selezione()