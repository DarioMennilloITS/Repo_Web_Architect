/* ============================================
   ES5 - Estensione File
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const fileInput = document.getElementById('fileInput');
    const estraiBtn = document.getElementById('estraiBtn');
    const estensioneOutput = document.getElementById('estensioneOutput');
    
    function estraiEstensione() {
        const filename = fileInput.value.trim();
        
        if (filename === '') {
            estensioneOutput.textContent = 'Inserisci un nome file';
            return;
        }
        
        // Trova l'ultimo punto
        const ultimoPunto = filename.lastIndexOf('.');
        
        if (ultimoPunto === -1 || ultimoPunto === 0 || ultimoPunto === filename.length - 1) {
            estensioneOutput.textContent = 'Nessuna estensione trovata';
            return;
        }
        
        const estensione = filename.substring(ultimoPunto + 1);
        estensioneOutput.textContent = estensione.toLowerCase();
    }
    
    estraiBtn.addEventListener('click', estraiEstensione);
    
    fileInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            estraiEstensione();
        }
    });
    
});
