/* ============================================
   P2-ES5 - Giudizio Voto
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const votoInput = document.getElementById('votoInput');
    const valutaBtn = document.getElementById('valutaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    function valuta() {
        const voto = parseInt(votoInput.value);
        let giudizio = '';
        
        if (isNaN(voto) || voto < 1 || voto > 10) {
            risultatoOutput.textContent = 'Inserisci un voto valido (1-10)';
            return;
        }
        
        switch(true) {
            case (voto >= 9):
                giudizio = 'Ottimo';
                break;
            case (voto >= 7):
                giudizio = 'Buono';
                break;
            case (voto === 6):
                giudizio = 'Sufficiente';
                break;
            default:
                giudizio = 'Insufficiente';
        }
        
        risultatoOutput.textContent = `${voto} - ${giudizio}`;
    }
    
    valutaBtn.addEventListener('click', valuta);
    
    votoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            valuta();
        }
    });
    
});
