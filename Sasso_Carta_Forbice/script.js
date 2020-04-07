const button1 = document.getElementById('bottone_1')
const button2 = document.getElementById('bottone_2')
const button3 = document.getElementById('bottone_3')
const button4 = document.getElementById('bottone_4')

const selezione_bot = () => {
	const lista = ["Sasso", "Carta", "Forbice"]
	const scelta =lista[Math.floor(Math.random() * 3)]
	return(scelta)
}

const selezione_player_Sasso = () => {
	const scelta_player = "Sasso"
	return(scelta_player)
}

const selezione_player_Carta = () => {
	const scelta_player = "Carta"
	return(scelta_player)
}

const selezione_player_Forbice = () => {
	const scelta_player = "Forbice"
	return(scelta_player)
}

console.log(selezione_bot())
console.log(selezione_player_Forbice())
console.log(selezione_player_Carta())
console.log(selezione_player_Sasso())
