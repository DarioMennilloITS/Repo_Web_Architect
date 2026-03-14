/* ============================================
   P2-ES8 - Numeri Palindromi
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const trovaBtn = document.getElementById('trovaBtn');
    const outputArea = document.getElementById('outputArea');
    const contatore = document.getElementById('contatore');
    
    function isPalindromo(numero) {
        const str = numero.toString();
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }
    
    function trova() {
        const palindromi = [];
        
        for (let i = 1; i <= 1000; i++) {
            if (isPalindromo(i)) {
                palindromi.push(i);
            }
        }
        
        // Visualizza risultati
        outputArea.innerHTML = '';
        palindromi.forEach(num => {
            const span = document.createElement('span');
            span.className = 'array-item';
            span.textContent = num;
            outputArea.appendChild(span);
        });
        
        contatore.textContent = palindromi.length;
    }
    
    trovaBtn.addEventListener('click', trova);
    
});
