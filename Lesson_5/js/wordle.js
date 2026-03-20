/**
 * Wordle Game - Beginner Friendly Version
 * A simple word guessing game with 5-letter words and 7 tries
 */

// Lista di parole italiane da indovinare (5 lettere)
const PAROLE = [
    'CLOWN', 'COLPI', 'SULLA', 'DIGNO', 'LIBRI',
    'TAVOL', 'SEDIA', 'PORTA', 'DOPIA', 'SFILO',
    'GATTO', 'CANII', 'TAGLI', 'DUPLO', 'SMENA',
    'FERZO', 'MONTA', 'FIUME', 'FINTI', 'FORES',
    'FLETI', 'ZATTE', 'TAFFI', 'FEMMO', 'SLIDE',
    'ROSSO', 'VIRTU', 'VERDE', 'FABRO', 'RUSSO',
    'FOFFA', 'VINCO', 'SPORT', 'EVOCO', 'LIBRO',
    'PIZZA', 'PASTA', 'TATTO', 'FAUNA', 'CAFFE'
];

// Variabili del gioco
let parolaSegreta = '';
let tentativi = 0;
const MAX_TENTATIVI = 7;
let giocoFinito = false;

/**
 * Sceglie una parola casuale dalla lista
 */
function scegliParola() {
    const indice = Math.floor(Math.random() * PAROLE.length);
    return PAROLE[indice];
}

/**
 * Crea la griglia di gioco vuota
 */
function creaGriglia() {
    const griglia = document.getElementById('wordleGrid');
    griglia.innerHTML = '';
    
    // Crea 7 righe (una per ogni tentativo)
    for (let riga = 0; riga < MAX_TENTATIVI; riga++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'wordle-row';
        rowDiv.id = 'row-' + riga;
        
        // Crea 5 celle per ogni riga
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            cell.className = 'wordle-cell';
            cell.id = 'cell-' + riga + '-' + col;
            rowDiv.appendChild(cell);
        }
        
        griglia.appendChild(rowDiv);
    }
}

/**
 * Crea la visualizzazione delle lettere provate (alfabeto)
 */
function creaAlfabeto() {
    const alfabetoDiv = document.getElementById('triedLetters');
    alfabetoDiv.innerHTML = '';
    
    // Lettere dell'alfabeto italiano
    const lettere = 'ABCDEFGHILMNOPQRSTUVZ';
    
    for (let i = 0; i < lettere.length; i++) {
        const lettera = lettere[i];
        const box = document.createElement('div');
        box.className = 'letter-box untried';
        box.id = 'letter-' + lettera;
        box.textContent = lettera;
        alfabetoDiv.appendChild(box);
    }
}

/**
 * Controlla la parola inserita e mostra i risultati
 */
function controllaParola() {
    // Se il gioco e finito, non fare niente
    if (giocoFinito) {
        return;
    }
    
    // Prendi la parola dall'input
    const input = document.getElementById('wordInput');
    const parolaInserita = input.value.toUpperCase().trim();
    
    // Controlla che la parola sia di 5 lettere
    if (parolaInserita.length !== 5) {
        alert('Inserisci una parola di esattamente 5 lettere!');
        return;
    }
    
    // Controlla ogni lettera
    for (let i = 0; i < 5; i++) {
        const lettera = parolaInserita[i];
        const cella = document.getElementById('cell-' + tentativi + '-' + i);
        
        // Mostra la lettera nella cella
        cella.textContent = lettera;
        
        // Controlla se la lettera e corretta
        if (lettera === parolaSegreta[i]) {
            // Lettera corretta nella posizione giusta (VERDE)
            cella.classList.add('correct');
            aggiornaLettera(lettera, 'correct');
        } else if (parolaSegreta.includes(lettera)) {
            // Lettera presente ma posizione sbagliata (GIALLO)
            cella.classList.add('present');
            aggiornaLettera(lettera, 'present');
        } else {
            // Lettera non presente (GRIGIO)
            cella.classList.add('absent');
            aggiornaLettera(lettera, 'absent');
        }
    }
    
    // Incrementa il numero di tentativi
    tentativi++;
    
    // Aggiorna i tentativi rimasti
    document.getElementById('triesLeft').textContent = MAX_TENTATIVI - tentativi;
    
    // Pulisci l'input
    input.value = '';
    input.focus();
    
    // Controlla se ha vinto
    if (parolaInserita === parolaSegreta) {
        mostraMessaggio('Hai vinto! La parola era: ' + parolaSegreta, 'win');
        giocoFinito = true;
        return;
    }
    
    // Controlla se ha perso
    if (tentativi >= MAX_TENTATIVI) {
        mostraMessaggio('Hai perso! La parola era: ' + parolaSegreta, 'lose');
        giocoFinito = true;
        return;
    }
}

/**
 * Aggiorna lo stato di una lettera nell'alfabeto
 */
function aggiornaLettera(lettera, stato) {
    const letteraBox = document.getElementById('letter-' + lettera);
    
    if (letteraBox) {
        // Se la lettera e gia corretta, non cambiarla
        if (letteraBox.classList.contains('correct')) {
            return;
        }
        
        // Se la lettera e presente e vogliamo metterla assente, non cambiarla
        if (letteraBox.classList.contains('present') && stato === 'absent') {
            return;
        }
        
        // Altrimenti aggiorna la classe
        letteraBox.className = 'letter-box ' + stato;
    }
}

/**
 * Mostra un messaggio di vittoria o sconfitta
 */
function mostraMessaggio(testo, tipo) {
    const messaggioDiv = document.getElementById('gameMessage');
    messaggioDiv.textContent = testo;
    messaggioDiv.className = 'game-message ' + tipo;
}

/**
 * Inizia una nuova partita
 */
function nuovaPartita() {
    // Scegli una nuova parola
    parolaSegreta = scegliParola();
    console.log('Parola segreta (per debug):', parolaSegreta);
    
    // Resetta le variabili
    tentativi = 0;
    giocoFinito = false;
    
    // Nascondi il messaggio
    document.getElementById('gameMessage').classList.add('hidden');
    
    // Aggiorna i tentativi rimasti
    document.getElementById('triesLeft').textContent = MAX_TENTATIVI;
    
    // Pulisci l'input
    document.getElementById('wordInput').value = '';
    
    // Ricrea la griglia e l'alfabeto
    creaGriglia();
    creaAlfabeto();
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    // Crea la griglia e l'alfabeto all'avvio
    creaGriglia();
    creaAlfabeto();
    
    // Scegli la parola segreta
    parolaSegreta = scegliParola();
    console.log('Parola segreta (per debug):', parolaSegreta);
    
    // Bottone "Prova"
    document.getElementById('btnGuess').addEventListener('click', controllaParola);
    
    // Invio nella casella di input
    document.getElementById('wordInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            controllaParola();
        }
    });
    
    // Bottone "Nuova Partita"
    document.getElementById('btnNewGame').addEventListener('click', nuovaPartita);
});
