/**
 * Advanced Callback Functions Demo
 * Demonstrates: async callbacks, error handling, advanced array methods,
 * callback hell vs promises, and event-driven callbacks
 */

// Array per le operazioni avanzate
const numeriAvanzati = [5, 12, 8, 130, 44, 3, 21, 7, 99, 1];

// Variabile per tracciare l'intervallo
let intervalId = null;
let contatore = 0;

/**
 * Esegue una divisione con callback per gestione errori
 * Pattern: error-first callback (err, result) => {}
 * @param {Number} a - Dividendo
 * @param {Number} b - Divisore
 * @param {Function} callback - Callback con gestione errore
 */
function dividiConCallback(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error('Divisione per zero non consentita!'), null);
        } else {
            callback(null, a / b);
        }
    }, 500);
}

/**
 * Esegue operazione con ritardo usando callback
 * @param {Function} callback - Funzione da eseguire
 * @param {Number} ritardoMs - Millisecondi di attesa
 */
function eseguiDopo(callback, ritardoMs) {
    console.log(`Operazione programmata tra ${ritardoMs}ms...`);
    return setTimeout(() => {
        callback();
        console.log('Timeout eseguito!');
    }, ritardoMs);
}

/**
 * Avvia un intervallo che esegue callback ripetutamente
 * @param {Function} callback - Funzione da eseguire ad ogni intervallo
 * @param {Number} intervalloMs - Millisecondi tra esecuzioni
 */
function avviaIntervallo(callback, intervalloMs) {
    if (intervalId) {
        console.log('Intervallo già attivo!');
        return null;
    }
    
    contatore = 0;
    intervalId = setInterval(() => {
        contatore++;
        callback(contatore);
    }, intervalloMs);
    
    return intervalId;
}

/**
 * Ferma l'intervallo attivo
 */
function fermaIntervallo() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        console.log('Intervallo fermato');
        return true;
    }
    return false;
}

// ============================================
// ARRAY METHODS AVANZATI CON CALLBACK
// ============================================

function trovaElemento(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}

function almenoUno(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

function tutti(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

function ordinaConCallback(arr, compareFn) {
    return [...arr].sort(compareFn);
}

// ============================================
// CALLBACK HELL vs PROMISES
// ============================================

function operazioneAsync(dati, callback, delay = 500) {
    setTimeout(() => {
        callback(dati);
    }, delay);
}

function esempioCallbackHell(callbackFinale) {
    console.log('Inizio operazioni...');
    
    operazioneAsync('Step 1', (risultato1) => {
        console.log(risultato1);
        
        operazioneAsync('Step 2', (risultato2) => {
            console.log(risultato2);
            
            operazioneAsync('Step 3', (risultato3) => {
                console.log(risultato3);
                
                operazioneAsync('Step 4', (risultato4) => {
                    console.log(risultato4);
                    callbackFinale('Completato!');
                }, 300);
            }, 300);
        }, 300);
    }, 300);
}

function operazionePromise(dati, delay = 500) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dati);
        }, delay);
    });
}

function esempioPromiseChain() {
    console.log('Inizio operazioni con Promise...');
    
    return operazionePromise('Step 1 Promise', 300)
        .then(r1 => {
            console.log(r1);
            return operazionePromise('Step 2 Promise', 300);
        })
        .then(r2 => {
            console.log(r2);
            return operazionePromise('Step 3 Promise', 300);
        })
        .then(r3 => {
            console.log(r3);
            return operazionePromise('Step 4 Promise', 300);
        })
        .then(r4 => {
            console.log(r4);
            return 'Completato con Promise!';
        });
}

// ============================================
// ESEMPI CONSOLE
// ============================================

console.log('=== Advanced Callback Functions Demo ===');
console.log('Array avanzato:', numeriAvanzati);

console.log('--- find (> 50) ---');
const trovato = trovaElemento(numeriAvanzati, n => n > 50);
console.log('Primo elemento > 50:', trovato);

console.log('--- some (> 100) ---');
const haMaggioreDi100 = almenoUno(numeriAvanzati, n => n > 100);
console.log('C è almeno un elemento > 100?', haMaggioreDi100);

console.log('--- every (> 0) ---');
const tuttiPositivi = tutti(numeriAvanzati, n => n > 0);
console.log('Tutti gli elementi sono > 0?', tuttiPositivi);

console.log('--- sort (decrescente) ---');
const ordinati = ordinaConCallback(numeriAvanzati, (a, b) => b - a);
console.log('Ordinati decrescente:', ordinati);

console.log('--- Error-first callback ---');
dividiConCallback(10, 0, (errore, risultato) => {
    if (errore) {
        console.log('Errore:', errore.message);
    } else {
        console.log('Risultato:', risultato);
    }
});

// ============================================
// DOM INTERACTION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const logOutput = document.getElementById('logOutput2');
    const timerOutput = document.getElementById('timerOutput');
    const divideOutput = document.getElementById('divideOutput');
    const advancedArrayOutput = document.getElementById('advancedArrayOutput');
    const chainOutput = document.getElementById('chainOutput');
    
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
    
    function logToChain(message) {
        chainOutput.innerHTML += `<div>${message}</div>`;
        chainOutput.scrollTop = chainOutput.scrollHeight;
    }
    
    document.getElementById('btnClearLog').addEventListener('click', () => {
        logOutput.innerHTML = 'Log pulito...';
    });
    
    document.getElementById('btnTimeout').addEventListener('click', () => {
        const delay = parseInt(document.getElementById('delayInput').value);
        log(`Programmato timeout per ${delay}ms`);
        timerOutput.textContent = 'In attesa...';
        
        eseguiDopo(() => {
            timerOutput.textContent = `Eseguito dopo ${delay}ms!`;
            log(`Timeout eseguito dopo ${delay}ms`);
        }, delay);
    });
    
    document.getElementById('btnInterval').addEventListener('click', () => {
        if (intervalId) {
            log('Intervallo già attivo!');
            return;
        }
        
        const delay = parseInt(document.getElementById('delayInput').value);
        log(`Avviato intervallo ogni ${delay}ms`);
        
        avviaIntervallo((count) => {
            timerOutput.textContent = `Contatore: ${count}`;
            if (count % 5 === 0) {
                log(`Intervallo: contatore a ${count}`);
            }
        }, delay);
    });
    
    document.getElementById('btnStopInterval').addEventListener('click', () => {
        if (fermaIntervallo()) {
            timerOutput.textContent += ' (FERMATO)';
            log('Intervallo fermato');
        } else {
            log('Nessun intervallo attivo');
        }
    });
    
    document.getElementById('btnDivide').addEventListener('click', () => {
        const a = parseFloat(document.getElementById('divideNum1').value);
        const b = parseFloat(document.getElementById('divideNum2').value);
        
        log(`Richiesta divisione: ${a} / ${b}`);
        divideOutput.textContent = 'Calcolo...';
        
        dividiConCallback(a, b, (errore, risultato) => {
            if (errore) {
                divideOutput.innerHTML = `<span style="color: #922b21;">Errore: ${errore.message}</span>`;
                log(`Errore divisione: ${errore.message}`);
            } else {
                divideOutput.textContent = `${a} / ${b} = ${risultato}`;
                log(`Divisione completata: ${risultato}`);
            }
        });
    });
    
    document.getElementById('btnFind').addEventListener('click', () => {
        log('Operazione: find (> 50)');
        const risultato = trovaElemento(numeriAvanzati, n => n > 50);
        advancedArrayOutput.innerHTML = `<strong>find (> 50):</strong> ${risultato !== undefined ? risultato : 'Nessun risultato'}`;
        log(`Risultato find: ${risultato}`);
    });
    
    document.getElementById('btnSome').addEventListener('click', () => {
        log('Operazione: some (> 100)');
        const risultato = almenoUno(numeriAvanzati, n => n > 100);
        advancedArrayOutput.innerHTML = `<strong>some (> 100):</strong> ${risultato} (c'è almeno uno > 100?)`;
        log(`Risultato some: ${risultato}`);
    });
    
    document.getElementById('btnEvery').addEventListener('click', () => {
        log('Operazione: every (> 0)');
        const risultato = tutti(numeriAvanzati, n => n > 0);
        advancedArrayOutput.innerHTML = `<strong>every (> 0):</strong> ${risultato} (tutti > 0?)`;
        log(`Risultato every: ${risultato}`);
    });
    
    document.getElementById('btnSort').addEventListener('click', () => {
        log('Operazione: sort (decrescente)');
        const risultato = ordinaConCallback(numeriAvanzati, (a, b) => b - a);
        advancedArrayOutput.innerHTML = `<strong>sort (decrescente):</strong><br>[${risultato.join(', ')}]`;
        log(`Array ordinato: [${risultato.join(', ')}]`);
    });
    
    document.getElementById('btnCallbackHell').addEventListener('click', () => {
        chainOutput.innerHTML = '';
        logToChain('Avvio Callback Hell...');
        log('Avvio esempio Callback Hell');
        
        esempioCallbackHell((messaggio) => {
            logToChain(`OK ${messaggio}`);
            log('Callback Hell completato');
        });
    });
    
    document.getElementById('btnPromiseChain').addEventListener('click', () => {
        chainOutput.innerHTML = '';
        logToChain('Avvio Promise Chain...');
        log('Avvio esempio Promise Chain');
        
        esempioPromiseChain()
            .then((messaggio) => {
                logToChain(`OK ${messaggio}`);
                log('Promise Chain completata');
            });
    });
});

// ============================================
// ESEMPI AGGIUNTIVI
// ============================================

console.log('=== Event-Driven Callbacks ===');

function processaDati(dati, onSuccess, onError, onProgress) {
    let progresso = 0;
    
    const intervallo = setInterval(() => {
        progresso += 25;
        
        if (onProgress) {
            onProgress(progresso);
        }
        
        if (progresso >= 100) {
            clearInterval(intervallo);
            
            if (dati && dati.length > 0) {
                onSuccess(`Processati ${dati.length} elementi`);
            } else {
                onError('Nessun dato da processare');
            }
        }
    }, 200);
}

console.log('Processo dati con callbacks...');
processaDati(
    [1, 2, 3],
    (msg) => console.log('Successo:', msg),
    (err) => console.log('Errore:', err),
    (prog) => console.log(`Progresso: ${prog}%`)
);
