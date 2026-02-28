//Esercizio: Età magiore

/* Traccia:
chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande
*/

// Input for person 1
const name_person_1 = (prompt("Type name person 1"))
const age_person_1 = parseInt(prompt("Type age person 1"))

// Input for person 2
const name_person_2 = (prompt("Type name person 2"))
const age_person_2 = parseInt(prompt("Type age person 2"))

//Check person older

if (age_person_1 > age_person_2){
    let age_difference = age_person_1 - age_person_2
    console.log(`${name_person_1} is ${age_difference} older than ${name_person_2}`)
}
else if (age_person_2 > age_person_1){
    let age_difference = age_person_2 - age_person_1
    console.log(`${name_person_2} is ${age_difference} older than ${name_person_1}`)
}
else {
    console.log(`${name_person_1} and ${name_person_2} are the same age`)
}