/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

/*
Questo codice è un ciclo for: ciclo che conta i numeri da 0 a 5 e gli attribuisce un indice (i), e per ogni elemento presente ne stampa in console la sua posizione all'interno dell'array   
L'errore è: i > 5, in quanto per scorrere l'array i deve essere minore della lnghezza del'array stesso: 
*/
// Soluzione
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

/*
Questo codice è una funzione che accetta come argomento un numero (num), e nel caso in cui questo sia pari, ovvero se diviso per 2 il risultato avrà resto 0 (num % 2 === 0), restituirà il numero stesso più 5.
Gli errori sono a riga 29
*/
// Soluzione
function addIfEven(num) {
    if (num % 2 === 0) {  // === per comparazione
        return num + 5;
    }
    return num;
}

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

/*
Questo codice è una funzione che stampa in console i numeri da 0 a 4.
L'errore sta nelle virgole ',' al posto del punto e virgola ';' nella dichiarazione del ciclo all'interno della funzione
*/
// Soluzione
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/*
Funzione che, da un array di numeri estrae i numeri pari, li pusha in un altro e restituisce il nuovo array con i numeri pari 
*/
// Soluzione 
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
};
console.log(displayEvenNumbers());
