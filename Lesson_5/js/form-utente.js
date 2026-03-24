/* ---------------------------------- ES 10 --------------------------------- */
// Crea i seguenti campi input in html: 
// - nome
// - cognome
// - data di Nascita
// - età
// - corso frequentato
// Con un pulsante "mostra info" recupera tutte le informazioni dai campi e stampale 
// sotto in un div come se volessi presentare l'utente che ha appena compilato i campi.
// Attenzione: crea una funzione che accetta in ingresso tanti parametri per quanti 
// sono i campi input creati

console.log('ES10 Form Utente loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputNome = document.getElementById('inputNome');
    const inputCognome = document.getElementById('inputCognome');
    const inputDataNascita = document.getElementById('inputDataNascita');
    const inputEta = document.getElementById('inputEta');
    const inputCorso = document.getElementById('inputCorso');
    const btnMostra = document.getElementById('btnMostra');
    const btnClear = document.getElementById('btnClear');
    const resultDiv = document.getElementById('result');
    const functionCallDiv = document.getElementById('functionCall');
    
    // Function that accepts multiple parameters (as required)
    function creaProfiloUtente(nome, cognome, dataNascita, eta, corso) {
        // Calculate age from birth date if eta is empty
        let etaCalcolata = eta;
        if (!eta && dataNascita) {
            const oggi = new Date();
            const nascita = new Date(dataNascita);
            etaCalcolata = oggi.getFullYear() - nascita.getFullYear();
            const meseDiff = oggi.getMonth() - nascita.getMonth();
            if (meseDiff < 0 || (meseDiff === 0 && oggi.getDate() < nascita.getDate())) {
                etaCalcolata--;
            }
        }
        
        // Format date for display
        let dataFormattata = dataNascita;
        if (dataNascita) {
            const date = new Date(dataNascita);
            dataFormattata = date.toLocaleDateString('it-IT');
        }
        
        return {
            nome: nome || 'Non specificato',
            cognome: cognome || 'Non specificato',
            dataNascita: dataFormattata || 'Non specificata',
            eta: etaCalcolata || 'Non specificata',
            corso: corso || 'Non specificato',
            nomeCompleto: `${nome || ''} ${cognome || ''}`.trim() || 'Anonimo'
        };
    }
    
    function mostraInfoUtente(utente) {
        const dataAttuale = new Date().toLocaleDateString('it-IT', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        return `
            <div class="user-card">
                <div class="user-header">
                    <div class="user-avatar">${utente.nome.charAt(0)}${utente.cognome.charAt(0)}</div>
                    <div class="user-title">
                        <h3>${utente.nomeCompleto}</h3>
                        <span class="user-course">${utente.corso}</span>
                    </div>
                </div>
                <div class="user-details">
                    <div class="detail-row">
                        <span class="detail-label">Nome:</span>
                        <span class="detail-value">${utente.nome}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Cognome:</span>
                        <span class="detail-value">${utente.cognome}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Data di nascita:</span>
                        <span class="detail-value">${utente.dataNascita}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Età:</span>
                        <span class="detail-value">${utente.eta} anni</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Corso:</span>
                        <span class="detail-value">${utente.corso}</span>
                    </div>
                </div>
                <div class="user-footer">
                    Registrato il: ${dataAttuale}
                </div>
            </div>
        `;
    }
    
    btnMostra.addEventListener('click', function() {
        const nome = inputNome.value.trim();
        const cognome = inputCognome.value.trim();
        const dataNascita = inputDataNascita.value;
        const eta = inputEta.value.trim();
        const corso = inputCorso.value.trim();
        
        // Show function call
        functionCallDiv.innerHTML = `
            <code>creaProfiloUtente(
                "${nome}", 
                "${cognome}", 
                "${dataNascita}", 
                "${eta}", 
                "${corso}"
            )</code>
        `;
        
        // Call the function with all parameters
        const utente = creaProfiloUtente(nome, cognome, dataNascita, eta, corso);
        
        // Display the result
        resultDiv.innerHTML = mostraInfoUtente(utente);
    });
    
    btnClear.addEventListener('click', function() {
        inputNome.value = '';
        inputCognome.value = '';
        inputDataNascita.value = '';
        inputEta.value = '';
        inputCorso.value = '';
        resultDiv.innerHTML = '<em>Compila il form e clicca "Mostra Info"...</em>';
        functionCallDiv.innerHTML = '';
    });
    
    // Auto-fill example
    inputNome.value = 'Mario';
    inputCognome.value = 'Rossi';
    inputCorso.value = 'Web Developer';
});
