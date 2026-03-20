/**
 * Parameters Demo - Function Parameters Exercise
 * Demonstrates how to use function parameters and arguments
 */

/**
 * Saluta una persona usando il nome fornito
 * @param {String} nome - Il nome della persona da salutare
 */
function saluta(nome) {
    console.log(`Ciao ${nome.toUpperCase()}!`);
}

// Test della funzione saluta
saluta("Anna");
saluta("Mario");

/**
 * Crea una stringa di presentazione per uno studente
 * @param {String} nome - Nome dello studente
 * @param {String} cognome - Cognome dello studente
 * @param {Number} eta - Eta dello studente
 * @param {String} email - Email dello studente
 * @returns {String} Stringa formattata con i dati dello studente
 */
function salutaStudente(nome, cognome, eta, email) {
    return `Ciao, mi chiamo ${nome} ${cognome} e ho ${eta} anni. La mia email e ${email}`;
}

// Test della funzione salutaStudente
console.log(salutaStudente("Mario", "Rossi", 25, "mario@rossi.it"));

/**
 * Recupera i dati dagli input utente e mostra il risultato
 */
function recuperaDaUser() {
    const nome = document.getElementById('nome').value.trim();
    const cognome = document.getElementById('cognome').value.trim();
    const email = document.getElementById('email').value.trim();
    const eta = document.getElementById('eta').value.trim();
    const demoOutput = document.getElementById('demo');
    
 
    
    // Validazione base
    if (!nome || !cognome || !email || !eta) {
        demoOutput.textContent = 'Errore: tutti i campi sono obbligatori!';
        demoOutput.style.color = '#922b21';
        return;
    }
    
    // Chiama la funzione con i parametri
    const messaggio = salutaStudente(nome, cognome, eta, email);
    
    // Mostra il risultato
    demoOutput.textContent = messaggio;
    demoOutput.style.color = '#1a1714';
    
    // Log in console
    console.log('Dati registrati:', { nome, cognome, email, eta });
}

// Event listener per il bottone
document.addEventListener('DOMContentLoaded', function() {
    const btnReg = document.getElementById('btnReg');
    if (btnReg) {
        btnReg.addEventListener('click', recuperaDaUser);
    }
    
    // Permetti anche l'invio con Enter
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                recuperaDaUser();
            }
        });
    });
});
