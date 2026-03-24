/* ---------------------------------- ES 1 ---------------------------------- */
// Dichiara una funzione con all'interno una variabile e stampa il suo valore.
// Dichiara una variabile globale. Dichiara una funzione che stampa il valore di questa variabile. 
// Sposta il richiamo della funzione prima e dopo la variabile per capire cosa accade.

console.log('ES1 Scope Demo loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const outputDiv = document.getElementById('output');
    const consoleDiv = document.getElementById('consoleOutput');
    
    function logToConsole(message) {
        console.log(message);
        const line = document.createElement('div');
        line.className = 'console-line';
        line.textContent = '> ' + message;
        consoleDiv.appendChild(line);
    }
    
    // PART 1: Function with local variable
    function funzioneConVariabileLocale() {
        const variabileLocale = 'Sono una variabile locale!';
        return variabileLocale;
    }
    
    // PART 2: Global variable demonstration
    // Chiamata PRIMA della dichiarazione della variabile globale
    logToConsole('=== Test 1: Chiamata funzione PRIMA della variabile globale ===');
    
    try {
        const risultatoPrima = stampaGlobale();
        logToConsole('Risultato: ' + risultatoPrima);
    } catch (e) {
        logToConsole('Errore: ' + e.message);
    }
    
    // Dichiarazione della variabile globale
    const variabileGlobale = 'Sono una variabile globale!';
    
    // Funzione che usa la variabile globale
    function stampaGlobale() {
        return variabileGlobale;
    }
    
    // Chiamata DOPO la dichiarazione
    logToConsole('=== Test 2: Chiamata funzione DOPO la variabile globale ===');
    logToConsole('Risultato: ' + stampaGlobale());
    
    // PART 3: Demo button functionality
    document.getElementById('btnLocal').addEventListener('click', function() {
        const result = funzioneConVariabileLocale();
        outputDiv.innerHTML = '<strong>Variabile Locale:</strong> ' + result;
        logToConsole('Funzione chiamata: funzioneConVariabileLocale()');
        logToConsole('Valore: ' + result);
    });
    
    document.getElementById('btnGlobal').addEventListener('click', function() {
        const result = stampaGlobale();
        outputDiv.innerHTML = '<strong>Variabile Globale:</strong> ' + result;
        logToConsole('Funzione chiamata: stampaGlobale()');
        logToConsole('Valore: ' + result);
    });
    
    document.getElementById('btnClear').addEventListener('click', function() {
        consoleDiv.innerHTML = '';
        outputDiv.innerHTML = '<em>Clicca un pulsante per vedere il risultato...</em>';
    });
});
