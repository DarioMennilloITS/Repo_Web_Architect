/* ============================================
   ES7 - Valore piu vicino a 100
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const verificaBtn = document.getElementById('verificaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    function verifica() {
        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);
        
        if (isNaN(n1) || isNaN(n2)) {
            risultatoOutput.textContent = 'Inserisci entrambi i numeri';
            return;
        }
        
        // Verifica se sono uguali
        if (n1 === n2) {
            risultatoOutput.textContent = `I numeri sono uguali: ${n1}`;
            return;
        }
        
        // Calcola distanza da 100
        const distanza1 = Math.abs(100 - n1);
        const distanza2 = Math.abs(100 - n2);
        
        if (distanza1 < distanza2) {
            risultatoOutput.textContent = `${n1} e piu vicino a 100 (distanza: ${distanza1})`;
        } else if (distanza2 < distanza1) {
            risultatoOutput.textContent = `${n2} e piu vicino a 100 (distanza: ${distanza2})`;
        } else {
            risultatoOutput.textContent = `Entrambi equidistanti da 100`;
        }
    }
    
    verificaBtn.addEventListener('click', verifica);
    
    [num1, num2].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verifica();
            }
        });
    });
    
});
