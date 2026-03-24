/* ---------------------------------- ES 5 ---------------------------------- */
// Dall'html recupera una stringa e ruotala da sinistra verso destra 
// rimuovendo una lettera dal fondo ed inserendola all'inizio, 
// deve essere visibile l'animazione.

console.log('ES5 Ruota Stringa loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputString = document.getElementById('inputString');
    const btnStart = document.getElementById('btnStart');
    const btnStop = document.getElementById('btnStop');
    const displayDiv = document.getElementById('stringDisplay');
    const speedInput = document.getElementById('speedInput');
    
    let animazioneInCorso = false;
    let intervalId = null;
    let stringaCorrente = '';
    
    // Function to rotate string (move last char to beginning)
    function ruotaStringa(str) {
        if (str.length <= 1) return str;
        const ultimoCarattere = str.slice(-1);
        const resto = str.slice(0, -1);
        return ultimoCarattere + resto;
    }
    
    // Alternative: rotate left to right (move first char to end)
    function ruotaStringaSinistra(str) {
        if (str.length <= 1) return str;
        const primoCarattere = str[0];
        const resto = str.slice(1);
        return resto + primoCarattere;
    }
    
    function aggiornaDisplay() {
        // Create visual representation with the rotated character highlighted
        if (stringaCorrente.length > 1) {
            const primoChar = stringaCorrente[0];
            const resto = stringaCorrente.slice(1);
            displayDiv.innerHTML = `<span class="rotated-char">${primoChar}</span>${resto}`;
        } else {
            displayDiv.textContent = stringaCorrente;
        }
    }
    
    function startAnimation() {
        if (animazioneInCorso) return;
        
        const input = inputString.value.trim();
        if (!input) {
            displayDiv.innerHTML = '<span style="color: var(--red);">Inserisci una stringa!</span>';
            return;
        }
        
        stringaCorrente = input;
        animazioneInCorso = true;
        btnStart.disabled = true;
        btnStop.disabled = false;
        inputString.disabled = true;
        
        const speed = parseInt(speedInput.value, 10) || 500;
        
        aggiornaDisplay();
        
        intervalId = setInterval(function() {
            stringaCorrente = ruotaStringa(stringaCorrente);
            aggiornaDisplay();
        }, speed);
    }
    
    function stopAnimation() {
        if (!animazioneInCorso) return;
        
        clearInterval(intervalId);
        animazioneInCorso = false;
        btnStart.disabled = false;
        btnStop.disabled = true;
        inputString.disabled = false;
    }
    
    btnStart.addEventListener('click', startAnimation);
    btnStop.addEventListener('click', stopAnimation);
    
    // Also allow Enter key to start
    inputString.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !animazioneInCorso) {
            startAnimation();
        }
    });
    
    // Initialize button state
    btnStop.disabled = true;
});
