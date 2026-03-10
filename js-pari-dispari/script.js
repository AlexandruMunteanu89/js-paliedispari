// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//Creiamo delle variabile dove chiedere all'utente di scegliere un numero e pari o dispari
const numeroUtente = parseInt(prompt("inserisci un numero compreso tra 1 e 5"));
const utentePariDispari = prompt("inserisci pari o dispari");
console.log(numeroUtente);

//Generiamo un numero random
const numeroPC = Math.floor(Math.random() * 5 + 1);
console.log(numeroPC);

//Sommiamo numero utente con il numero generato
let sommaNumeri = numeroUtente + numeroPC;
console.log(sommaNumeri);

//Creiamo una funzione che controla se la somma e pari o dispari
function pariDispari(somma){
    let result = '';
    if (somma % 2 === 0){
        result = "pari";
    } else {
        result = "dispari";
    };
    return result;
}
console.log(pariDispari(sommaNumeri));


