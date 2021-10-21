// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const elemento = document.getElementById("mio_id");

// chiedi quanti anni ha il passeggero.
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);

// chiedi quandi chilometri
const kilometres = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log(kilometres);

// calcola il prezzo del biglietto
let ticketPrize = kilometres * (0,21);

// sconti 
if (userAge < 18){
    let minDiscount = ticketPrize - (ticketPrize * 20 / 100);
    console.log(minDiscount);
    elemento.innerHTML = `Il prezzo del tuo biglietto è ${minDiscount}`
} else if (userAge > 65) {
    let overDiscount = ticketPrize - (ticketPrize * 40 / 100);
    console.log(overDiscount);
    elemento.innerHTML = `Il prezzo del tuo biglietto è ${overDiscount}`
} else {
    console.log(ticketPrize);
    elemento.innerHTML = `Il prezzo del tuo biglietto è ${ticketPrize}`
}



