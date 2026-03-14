/* ============================================
   ES3 - Prodotto tra due numeri
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const calcolaBtn = document.getElementById('calcolaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    function calcolaProdotto() {
        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);
        
        if (isNaN(n1) || isNaN(n2)) {
            risultatoOutput.textContent = 'Inserisci entrambi i numeri';
            return;
        }
        
        const prodotto = n1 * n2;
        risultatoOutput.textContent = `${n1} x ${n2} = ${prodotto}`;
    }
    
    calcolaBtn.addEventListener('click', calcolaProdotto);
    
    [num1, num2].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcolaProdotto();
            }
        });
    });
    
});
