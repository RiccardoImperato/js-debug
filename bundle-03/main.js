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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }, // virogola mancante
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter((auto) => auto.type.toLocaleLowerCase() === 'benzina'); // freccia 

const dieselCars = cars.filter((auto) => {
    return auto.type.toLocaleLowerCase() === 'diesel'; // return mancante
});

const otherCars = cars.filter((auto) => {
    return auto.type.toLocaleLowerCase() !== 'benzina' && auto.type.toLocaleLowerCase() !== 'diesel'; // operatore and (&&) al posto di or (||)
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

/*
Questo codice è un array di oggetti (auto), ognuno con chiavi manufacturer, model e type.
Con il metodo filter vengono creati altri tre array, per auto diesel, benzina o altro. 
Errori: manca una virgola nell'array tra un oggetto e l'altro ariga 59, a riga 67 la freccia della arrow function è scritta male, manca la proprietà .toLowerCase ad auto.type visto che alcune chiavi hanno lettere maiuscole e altre no , a riga 70 manca il return e a riga 74 l'operatore da usare è && e non ||. 
*/