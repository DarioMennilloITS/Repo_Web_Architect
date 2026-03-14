/* ============================================
   ES15 - Pesca Elemento Casuale
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const pescaBtn = document.getElementById('pescaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    const numeri = [10, 25, 33, 47, 52, 68, 71, 89, 94, 100];
    
    function pescaCasuale() {
        const indiceCasuale = Math.floor(Math.random() * numeri.length);
        const numeroEstratto = numeri[indiceCasuale];
        
        risultatoOutput.innerHTML = `
            <p style="font-size: 3rem; font-weight: bold;">${numeroEstratto}</p>
            <p style="font-size: 0.9rem; color: #666;">Indice: ${indiceCasuale}</p>
        `;
    }
    
    pescaBtn.addEventListener('click', pescaCasuale);
    
});
