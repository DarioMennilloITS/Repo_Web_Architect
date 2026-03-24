/* ---------------------------------- ES 2 ---------------------------------- */
// Scrivi una funzione javascript che accetta due argomenti: una stringa e una lettera. 
// La funzione conterà il numero di occorrenze della specifica lettera nella stringa

console.log('ES2 Conta Lettere loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputString = document.getElementById('inputString');
    const inputLetter = document.getElementById('inputLetter');
    const btnCount = document.getElementById('btnCount');
    const resultDiv = document.getElementById('result');
    
    // Function to count letter occurrences
    function contaOccorrenze(stringa, lettera) {
        // Convert to lowercase for case-insensitive counting
        const str = stringa.toLowerCase();
        const char = lettera.toLowerCase();
        
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
            }
        }
        return count;
    }
    
    // Alternative using split
    function contaOccorrenzeSplit(stringa, lettera) {
        const str = stringa.toLowerCase();
        const char = lettera.toLowerCase();
        return str.split(char).length - 1;
    }
    
    btnCount.addEventListener('click', function() {
        const stringa = inputString.value;
        const lettera = inputLetter.value;
        
        if (!stringa || !lettera) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci sia la stringa che la lettera!</span>';
            return;
        }
        
        if (lettera.length !== 1) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci una sola lettera!</span>';
            return;
        }
        
        const occorrenze = contaOccorrenze(stringa, lettera);
        const occorrenzeSplit = contaOccorrenzeSplit(stringa, lettera);
        
        // Highlight occurrences in the string
        let highlightedString = '';
        for (let i = 0; i < stringa.length; i++) {
            if (stringa[i].toLowerCase() === lettera.toLowerCase()) {
                highlightedString += '<mark>' + stringa[i] + '</mark>';
            } else {
                highlightedString += stringa[i];
            }
        }
        
        resultDiv.innerHTML = `
            <p><strong>Stringa analizzata:</strong> "${highlightedString}"</p>
            <p><strong>Lettera cercata:</strong> '${lettera}'</p>
            <p><strong>Numero di occorrenze:</strong> ${occorrenze}</p>
            <p style="font-size: 0.8rem; color: var(--ink-light);">
                (Metodo alternativo con split: ${occorrenzeSplit})
            </p>
        `;
    });
});
