/* ============================================
   P2-ES6 - Rettangolo di Asterischi
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const righeInput = document.getElementById('righeInput');
    const colonneInput = document.getElementById('colonneInput');
    const disegnaBtn = document.getElementById('disegnaBtn');
    const outputArea = document.getElementById('outputArea');
    
    function disegna() {
        const righe = parseInt(righeInput.value);
        const colonne = parseInt(colonneInput.value);
        
        if (isNaN(righe) || isNaN(colonne) || righe < 1 || colonne < 1) {
            outputArea.textContent = 'Inserisci valori validi';
            return;
        }
        
        let output = '';
        
        for (let i = 0; i < righe; i++) {
            let riga = '';
            for (let j = 0; j < colonne; j++) {
                riga += '*';
            }
            output += riga + '\n';
        }
        
        outputArea.textContent = output;
    }
    
    disegnaBtn.addEventListener('click', disegna);
    
});
