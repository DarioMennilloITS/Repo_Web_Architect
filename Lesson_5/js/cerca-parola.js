/* ============================================
   ES16 - Cerca Parola
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const parolaCercata = document.getElementById('parolaCercata');
    const cercaBtn = document.getElementById('cercaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    const testo = "Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java";
    
    function cerca() {
        const parola = parolaCercata.value.trim().toLowerCase();
        
        if (parola === '') {
            risultatoOutput.textContent = 'Inserisci una parola da cercare';
            return;
        }
        
        const testoLower = testo.toLowerCase();
        
        if (testoLower.includes(parola)) {
            risultatoOutput.innerHTML = `
                <p style="color: green;">Parola trovata: "${parolaCercata.value.trim()}"</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">Testo: "${testo}"</p>
            `;
        } else {
            risultatoOutput.innerHTML = `
                <p style="color: red;">Parola non trovata</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">Testo: "${testo}"</p>
            `;
        }
    }
    
    cercaBtn.addEventListener('click', cerca);
    
    parolaCercata.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            cerca();
        }
    });
    
});
