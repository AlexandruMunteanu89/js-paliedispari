// Chiediamo all’utente di inserire una parola
const parola = prompt("inserisci una parola");
console.log(parola);

let parolaInvertita = '';

// Creiamo una funzione per invertire la parola
function invertiParola(str) {
    
    for (let i = str.length - 1; i >= 0; i--){
        parolaInvertita = parolaInvertita + str[i];
    }
    return parolaInvertita;
}
console.log(invertiParola(parola));

// Controlliamo se la parola è uguale a la parola invertita
if (parola === parolaInvertita){
    console.log("parola è palindroma")
} else {
    console.log("parola non è palindroma");
    
}

