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

let parolaSegreta = '';
let tentativi = 0;
const MAX_TENTATIVI = 7;
let giocoFinito = false;

// Random-select
function scegliParola() {
    const indice = Math.floor(Math.random() * PAROLE.length);
    return PAROLE[indice];
}

//Griglia
function creaGriglia() {
    const griglia = document.getElementById('wordleGrid');
    griglia.innerHTML = '';
    
    //7 rows
    for (let riga = 0; riga < MAX_TENTATIVI; riga++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'wordle-row';
        rowDiv.id = 'row-' + riga;
        
        //5 columns
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            cell.className = 'wordle-cell';
            cell.id = 'cell-' + riga + '-' + col;
            rowDiv.appendChild(cell);
        }
        
        griglia.appendChild(rowDiv);
    }
}


function creaAlfabeto() {
    const alfabetoDiv = document.getElementById('triedLetters');
    alfabetoDiv.innerHTML = '';
    
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

//Control
function controllaParola() {

    if (giocoFinito) {
        return;
    }
    

    const input = document.getElementById('wordInput');
    const parolaInserita = input.value.toUpperCase().trim();
    
    //Control-lenght
    if (parolaInserita.length !== 5) {
        alert('Inserisci una parola di esattamente 5 lettere!');
        return;
    }
    
    //Check each letter
    for (let i = 0; i < 5; i++) {
        const lettera = parolaInserita[i];
        const cella = document.getElementById('cell-' + tentativi + '-' + i);
        
       
        cella.textContent = lettera;
        
        
        if (lettera === parolaSegreta[i]) {
           
            cella.classList.add('correct');
            aggiornaLettera(lettera, 'correct');
        } else if (parolaSegreta.includes(lettera)) {
            
            cella.classList.add('present');
            aggiornaLettera(lettera, 'present');
        } else {
            
            cella.classList.add('absent');
            aggiornaLettera(lettera, 'absent');
        }
    }
    
   
    tentativi++;
    
    
    document.getElementById('triesLeft').textContent = MAX_TENTATIVI - tentativi;
    
    
    input.value = '';
    input.focus();
    
    
    if (parolaInserita === parolaSegreta) {
        mostraMessaggio('Hai vinto! La parola era: ' + parolaSegreta, 'win');
        giocoFinito = true;
        return;
    }
    
    
    if (tentativi >= MAX_TENTATIVI) {
        mostraMessaggio('Hai perso! La parola era: ' + parolaSegreta, 'lose');
        giocoFinito = true;
        return;
    }
}


function aggiornaLettera(lettera, stato) {
    const letteraBox = document.getElementById('letter-' + lettera);
    
    if (letteraBox) {
        
        if (letteraBox.classList.contains('correct')) {
            return;
        }
        
        
        if (letteraBox.classList.contains('present') && stato === 'absent') {
            return;
        }
        
       
        letteraBox.className = 'letter-box ' + stato;
    }
}


function mostraMessaggio(testo, tipo) {
    const messaggioDiv = document.getElementById('gameMessage');
    messaggioDiv.textContent = testo;
    messaggioDiv.className = 'game-message ' + tipo;
}


function nuovaPartita() {
    
    parolaSegreta = scegliParola();
    console.log('Parola segreta (per debug):', parolaSegreta);
    
    
    tentativi = 0;
    giocoFinito = false;
    
   
    document.getElementById('gameMessage').classList.add('hidden');
    
    
    document.getElementById('triesLeft').textContent = MAX_TENTATIVI;
    
    
    document.getElementById('wordInput').value = '';
    
    
    creaGriglia();
    creaAlfabeto();
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    
    creaGriglia();
    creaAlfabeto();
    
    
    parolaSegreta = scegliParola();
    console.log('Parola segreta (per debug):', parolaSegreta);
    
   
    document.getElementById('btnGuess').addEventListener('click', controllaParola);
    
    
    document.getElementById('wordInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            controllaParola();
        }
    });
    
    
    document.getElementById('btnNewGame').addEventListener('click', nuovaPartita);
});
