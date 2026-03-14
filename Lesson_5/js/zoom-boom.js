/* ============================================
   ES13 - Zoom Boom Bangarang (FizzBuzz)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const generaBtn = document.getElementById('generaBtn');
    const outputArea = document.getElementById('outputArea');
    
    function genera() {
        let output = '';
        
        for (let i = 1; i <= 100; i++) {
            let riga = '';
            
            if (i % 3 === 0 && i % 5 === 0) {
                riga = 'BANGARANG';
            } else if (i % 3 === 0) {
                riga = 'ZOOM';
            } else if (i % 5 === 0) {
                riga = 'BOOM';
            } else {
                riga = i.toString();
            }
            
            output += riga + ' ';
            
            // Vai a capo ogni 10 numeri
            if (i % 10 === 0) {
                output += '\n';
            }
        }
        
        outputArea.textContent = output;
    }
    
    generaBtn.addEventListener('click', genera);
    
});
