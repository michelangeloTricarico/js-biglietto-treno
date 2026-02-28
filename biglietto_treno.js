//Esercizio: Biglietto del treno

/* Traccia:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60
*/

let km_number = 100 // variable for number of km
let age_passeger = 70// passenger age to verify if a reduction will be applied
let cost  // initialization variable for cost

// check if a reduction can be applied  
if (age_passeger <= 18) {
    cost=(km_number * 0.21) * (1 - 20 / 100) // to consider 20%
}
else if (age_passeger>=65){
    cost=(km_number * 0.21) * (1 - 40 / 100) // to consider 40%
}
else {
    cost=(km_number * 0.21)
}


console.log("€"+cost.toFixed(2)) //to print output