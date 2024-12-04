// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// 1 - Far sciegliere all'utente pari o dispari
const sceltaUtente = prompt("Scegli pari o dispari");
// 2 - Far inserire un numero all'utente (da 1 a 5)
const numeroUtente = Number(prompt("Inserisci un numero da 1 a 5"));
// 3 - Creo una funzione che genera un numero random per il computer (da 1 a 5)
function numeroComputer() {
    const numero = Math.floor(Math.random() * 5) + 1;
    return numero;
    }
// 4 - Stampo il numero generato per il computer
alert("Il numero del computer è: ", numeroComputer(numero));