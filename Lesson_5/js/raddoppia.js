/* ============================================
   P2-ES4 - Raddoppia fino a 1000
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const numeroIniziale = document.getElementById('numeroIniziale');
    const raddoppiaBtn = document.getElementById('raddoppiaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    const passaggiOutput = document.getElementById('passaggiOutput');
    
    function raddoppia() {
        let numero = parseInt(numeroIniziale.value);
        
        if (isNaN(numero) || numero < 1) {
            risultatoOutput.textContent = 'Inserisci un numero valido';
            return;
        }
        
        let passaggi = '';
        passaggi += 'Inizio: ' + numero + '\n';
        
        while (numero <= 1000) {
            numero = numero * 2;
            if (numero <= 1000) {
                passaggi += 'Raddoppio: ' + numero + '\n';
            } else {
                passaggi += 'Superato 1000: ' + numero + ' (stop)';
            }
        }
        
        risultatoOutput.textContent = numero;
        passaggiOutput.textContent = passaggi;
    }
    
    raddoppiaBtn.addEventListener('click', raddoppia);
    
});
