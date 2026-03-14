/* ============================================
   P2-ES7 - Triangolo Crescente
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const altezzaInput = document.getElementById('altezzaInput');
    const disegnaBtn = document.getElementById('disegnaBtn');
    const outputArea = document.getElementById('outputArea');
    
    function disegna() {
        const altezza = parseInt(altezzaInput.value);
        
        if (isNaN(altezza) || altezza < 2) {
            outputArea.textContent = 'Inserisci un valore valido (minimo 2)';
            return;
        }
        
        let output = '';
        
        for (let i = 1; i <= altezza; i++) {
            let riga = '';
            for (let j = 1; j <= i; j++) {
                riga += j + ' ';
            }
            output += riga + '\n';
        }
        
        outputArea.textContent = output;
    }
    
    disegnaBtn.addEventListener('click', disegna);
    
});
