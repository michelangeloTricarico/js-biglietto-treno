//Esercizio: Quanto manca

/* Traccia:
utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.
*/

const actual_data = new Date() // to take actual data
const hour = actual_data.getHours() //take hour by actual data
const minutes = actual_data.getMinutes() //take hour minute

let minute_to_next_hour = 60 - minutes // take minute to next hour 
console.log(`Are the  ${hour}:${minutes}; ${minute_to_next_hour} to next hour`)
 