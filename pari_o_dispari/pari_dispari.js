//Esercizio: Pari o dispari

/* Traccia:
chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
*/
//To type input in web page
const num_type =(prompt("Type 'pari' or 'dispari'")).toUpperCase()
const num_input = parseInt(prompt("Type a number between 1 and 9"))

// Number extraction
const num_extracted = 5 //Math.floor(Math.random() * 9) + 1 // Math.random give a number 0 ≤ x < 1, Math.floor round down (to pass from a float to a int)
console.log("Number extracted: "+num_extracted)

// Sum number extracted with number in input
let sum_number = num_input + num_extracted

// Check if the two numbers sum is pari or dispari and write in console result
if (Math.floor(sum_number / 2) * 2 == sum_number && num_type == "PARI"){
    console.log("Congratulation! You win!")
}
else if (Math.floor(sum_number / 2) * 2 != sum_number && num_type == "DISPARI"){
    console.log("Congratulation! You win!")
} 
else{
    console.log("Retray! You didn't win")
}
