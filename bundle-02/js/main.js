/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

/*
Funzione che restituisce un messaggio in base all'età minore o maggiore di 18 anni
Errore di sintassi alla dischiarazione della variabile message, per essere riassegnata bisogna usare let
Errore logico, manca il return alla fine della funzione   
*/
//Soluzione
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message;
}
console.log(checkAge());

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

/*
Funzione che stampa in console un messaggio con il numero di elementi presenti all'interno di un array.
Scritto in questo modo il messaggio in console sarà: 'Nella mai palette ci sono undefined colori!', .length è scritto male 
*/
// Soluzione
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}

printColorsNumber();

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

/*
Funzione che chiede all'utente di inserire un numero tramite un prompt, salva in una nuova variabile il suo valore più 12 e stampa un messaggio in console con il riusltato.
L'errore è nella dichiarazione della variabile userNumber, per poter esserer sommato a 12 il valore all'interno del prompt deve essere trasformato in un numero, usando '+' o Number davanti al prompt.
*/
// Soluzione
function addNumbers() {
    const userNumber = +prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

/*
Funzione che verifica se all'interno di un array di email sia presente quella inserita dall'utente, in caso positivo stampa in console 'Accesso consentito' altrimenti 'Accesso negato'.
Errore nella dichiarazione e riassegnazione della variabile grantAccess, il valore booleano va scritto senza apici.
*/
// Soluzione
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');
    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
/*
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();
*/

/*
Funzione che verifica se all'interno di un array di email sia presente quella inserita dall'utente, in caso positivo stampa in console 'Accesso consentito' altrimenti 'Accesso negato'.
Errori nella dichiarazione dei valori booleani tra apici, le condizioni vanno definite fuori dal ciclo for per evitare che vengano ripetute per tutti gli elementi dell array,
e parentesi graffa per chiudere la funzione mancante.
*/

function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false; // booleani senza apici 

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true; // booleani senza apici 

            }

        }
    } // Condizioni fuori dal ciclo
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}; // Parentesi graffa per chiudere la funzione
checkAccessImproved();






























