/* ============================================
   P2-ES1 - Giorni della Settimana
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const giornoSelect = document.getElementById('giornoSelect');
    const mostraBtn = document.getElementById('mostraBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    function mostraGiorno() {
        const giorno = parseInt(giornoSelect.value);
        let nomeGiorno = '';
        
        switch(giorno) {
            case 1:
                nomeGiorno = 'Lunedi';
                break;
            case 2:
                nomeGiorno = 'Martedi';
                break;
            case 3:
                nomeGiorno = 'Mercoledi';
                break;
            case 4:
                nomeGiorno = 'Giovedi';
                break;
            case 5:
                nomeGiorno = 'Venerdi';
                break;
            case 6:
                nomeGiorno = 'Sabato';
                break;
            case 7:
                nomeGiorno = 'Domenica';
                break;
            default:
                nomeGiorno = 'Giorno non valido';
        }
        
        risultatoOutput.textContent = nomeGiorno;
    }
    
    mostraBtn.addEventListener('click', mostraGiorno);
    
    // Mostra subito il primo giorno
    mostraGiorno();
    
});
