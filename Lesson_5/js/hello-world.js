/* ============================================
   ES0 - Hello World
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const nomeInput = document.getElementById('nomeInput');
    const salutaBtn = document.getElementById('salutaBtn');
    const salutoOutput = document.getElementById('salutoOutput');
    
    function saluta() {
        const nome = nomeInput.value.trim();
        
        if (nome === '') {
            salutoOutput.textContent = 'Per favore inserisci un nome';
            return;
        }
        
        salutoOutput.textContent = `Ciao, ${nome}!`;
    }
    
    salutaBtn.addEventListener('click', saluta);
    
    nomeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            saluta();
        }
    });
    
});
