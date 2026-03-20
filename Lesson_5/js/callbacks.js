/**
 * Callback Functions Demo
 * Demonstrates the use of callback functions with map, filter, and reduce
 */

// Array di partenza
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Esegue un'operazione su ogni elemento dell'array usando un callback
 * @param {Array} arr - Array da processare
 * @param {Function} callback - Funzione da applicare a ogni elemento
 * @returns {Array} Nuovo array con i risultati
 */
function eseguiSuOgniElemento(arr, callback) {
    const risultato = [];
    for (let i = 0; i < arr.length; i++) {
        risultato.push(callback(arr[i], i, arr));
    }
    return risultato;
}

/**
 * Filtra elementi dell'array usando un callback come condizione
 * @param {Array} arr - Array da filtrare
 * @param {Function} callback - Funzione che restituisce true/false
 * @returns {Array} Nuovo array con solo gli elementi che soddisfano la condizione
 */
function filtraArray(arr, callback) {
    const risultato = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            risultato.push(arr[i]);
        }
    }
    return risultato;
}

/**
 * Riduce un array a un singolo valore usando un callback
 * @param {Array} arr - Array da ridurre
 * @param {Function} callback - Funzione che accumula il risultato
 * @param {*} valoreIniziale - Valore iniziale dell'accumulatore
 * @returns {*} Il valore finale accumulato
 */
function riduciArray(arr, callback, valoreIniziale) {
    let accumulatore = valoreIniziale;
    for (let i = 0; i < arr.length; i++) {
        accumulatore = callback(accumulatore, arr[i], i, arr);
    }
    return accumulatore;
}

// Callback functions di esempio
const raddoppia = (n) => n * 2;
const triplica = (n) => n * 3;
const isPari = (n) => n % 2 === 0;
const isMaggioreDi5 = (n) => n > 5;
const somma = (acc, curr) => acc + curr;
const moltiplica = (acc, curr) => acc * curr;

// Test delle funzioni con callback
console.log('=== Callback Functions Demo ===');
console.log('Array originale:', numeri);

console.log('\n--- Raddoppia (map) ---');
const raddoppiati = eseguiSuOgniElemento(numeri, raddoppia);
console.log('Risultato:', raddoppiati);

console.log('\n--- Filtra Pari (filter) ---');
const pari = filtraArray(numeri, isPari);
console.log('Numeri pari:', pari);

console.log('\n--- Somma (reduce) ---');
const sommaTotale = riduciArray(numeri, somma, 0);
console.log('Somma totale:', sommaTotale);

console.log('\n--- Prodotto (reduce) ---');
const prodottoTotale = riduciArray(numeri, moltiplica, 1);
console.log('Prodotto totale:', prodottoTotale);

console.log('\n--- Chaining: Raddoppia e filtra > 10 ---');
const chainResult = filtraArray(
    eseguiSuOgniElemento(numeri, raddoppia),
    (n) => n > 10
);
console.log('Doppi > 10:', chainResult);

// DOM Interaction
document.addEventListener('DOMContentLoaded', function() {
    const resultOutput = document.getElementById('resultOutput');
    const logOutput = document.getElementById('logOutput');
    
    function log(message) {
        const timestamp = new Date().toLocaleTimeString('it-IT', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        logOutput.innerHTML += `<div>[${timestamp}] ${message}</div>`;
        logOutput.scrollTop = logOutput.scrollHeight;
    }
    
    function clearLog() {
        logOutput.innerHTML = '';
    }
    
    // Raddoppia button
    document.getElementById('btnDouble').addEventListener('click', function() {
        clearLog();
        log('Operazione: Raddoppia usando callback map');
        log(`Input: [${numeri.join(', ')}]`);
        
        const risultato = eseguiSuOgniElemento(numeri, raddoppia);
        
        log(`Callback: n => n * 2`);
        log(`Output: [${risultato.join(', ')}]`);
        
        resultOutput.innerHTML = `<strong>Raddoppia (map):</strong><br>[${risultato.join(', ')}]`;
    });
    
    // Filtra Pari button
    document.getElementById('btnFilterEven').addEventListener('click', function() {
        clearLog();
        log('Operazione: Filtra numeri pari usando callback filter');
        log(`Input: [${numeri.join(', ')}]`);
        
        const risultato = filtraArray(numeri, isPari);
        
        log(`Callback: n => n % 2 === 0`);
        log(`Output: [${risultato.join(', ')}]`);
        
        resultOutput.innerHTML = `<strong>Filtra Pari (filter):</strong><br>[${risultato.join(', ')}]`;
    });
    
    // Somma button
    document.getElementById('btnSum').addEventListener('click', function() {
        clearLog();
        log('Operazione: Somma usando callback reduce');
        log(`Input: [${numeri.join(', ')}]`);
        
        const risultato = riduciArray(numeri, somma, 0);
        
        log(`Callback: (acc, curr) => acc + curr`);
        log(`Valore iniziale: 0`);
        log(`Output: ${risultato}`);
        
        resultOutput.innerHTML = `<strong>Somma (reduce):</strong><br>${risultato}`;
    });
    
    // Chain button
    document.getElementById('btnChain').addEventListener('click', function() {
        clearLog();
        log('Operazione: Chain - Raddoppia poi filtra > 5');
        log(`Input: [${numeri.join(', ')}]`);
        
        const doppi = eseguiSuOgniElemento(numeri, raddoppia);
        log(`Step 1 - Raddoppia: [${doppi.join(', ')}]`);
        
        const risultato = filtraArray(doppi, isMaggioreDi5);
        log(`Step 2 - Filtra > 5: [${risultato.join(', ')}]`);
        
        resultOutput.innerHTML = `<strong>Chain (map + filter):</strong><br>[${risultato.join(', ')}]`;
    });
});

// Esempi aggiuntivi con setTimeout (async callbacks)
console.log('\n=== Async Callbacks (setTimeout) ===');

function eseguiDopoRitardo(callback, ritardoMs) {
    console.log(`Programmazione esecuzione tra ${ritardoMs}ms...`);
    setTimeout(callback, ritardoMs);
}

// Esempio di callback asincrono
eseguiDopoRitardo(() => {
    console.log('Callback asincrono eseguito!');
}, 2000);

console.log('Codice continuato senza aspettare...');
