/* ============================================
   P2-ES3 - Somma da 1 a 100
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const calcolaForBtn = document.getElementById('calcolaForBtn');
    const calcolaFormulaBtn = document.getElementById('calcolaFormulaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    const dettaglioOutput = document.getElementById('dettaglioOutput');
    
    function calcolaConFor() {
        let somma = 0;
        let dettaglio = '';
        
        for (let i = 1; i <= 100; i++) {
            somma += i;
            dettaglio += i;
            if (i < 100) {
                dettaglio += ' + ';
            }
        }
        
        risultatoOutput.textContent = somma;
        dettaglioOutput.textContent = dettaglio.substring(0, 200) + '... = ' + somma;
    }
    
    function calcolaConFormula() {
        // Formula di Gauss: n(n+1)/2
        const somma = (100 * 101) / 2;
        
        risultatoOutput.textContent = somma;
        dettaglioOutput.textContent = 'Formula: 100 x 101 / 2 = ' + somma;
    }
    
    calcolaForBtn.addEventListener('click', calcolaConFor);
    calcolaFormulaBtn.addEventListener('click', calcolaConFormula);
    
});
