// Chiediamo all’utente di inserire una parola
const parola = prompt("inserisci una parola");
console.log(parola);

// Creiamo una funzione per invertire la parola
let parolaInvertita = '';
function invertiParola(str) {
    
    for (let i = str.length - 1; i >= 0; i--){
        parolaInvertita = parolaInvertita + str[i];
    }
    return parolaInvertita;
}
console.log(invertiParola(parola));



