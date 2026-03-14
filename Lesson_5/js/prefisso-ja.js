/* ============================================
   ES6 - Prefisso Ja
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const parolaInput = document.getElementById('parolaInput');
    const trasformaBtn = document.getElementById('trasformaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    function trasforma() {
        let parola = parolaInput.value.trim();
        
        if (parola === '') {
            risultatoOutput.textContent = 'Inserisci una parola';
            return;
        }
        
        // Verifica se inizia con "Ja" (case insensitive)
        if (!parola.toLowerCase().startsWith('ja')) {
            parola = 'Ja' + parola;
        }
        
        risultatoOutput.textContent = parola;
    }
    
    trasformaBtn.addEventListener('click', trasforma);
    
    parolaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            trasforma();
        }
    });
    
});
