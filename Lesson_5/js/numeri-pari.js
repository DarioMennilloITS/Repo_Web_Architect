/* ============================================
   P2-ES2 - Numeri Pari
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const generaBtn = document.getElementById('generaBtn');
    const outputArea = document.getElementById('outputArea');
    
    function generaPari() {
        let output = '';
        let count = 0;
        
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 0) {
                output += i + ' ';
                count++;
                
                // Vai a capo ogni 10 numeri
                if (count % 10 === 0) {
                    output += '\n';
                }
            }
        }
        
        outputArea.textContent = output;
    }
    
    generaBtn.addEventListener('click', generaPari);
    
});
