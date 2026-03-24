/* ---------------------------------- ES 13 --------------------------------- */
// Scrivi un programma che accetta una frase come parametro e imposta in upper-case 
// l'iniziale di ogni singola parola
// Es: "oggi andrò a lezione" ---> "Oggi Andrò A Lezione"

console.log('ES13 Title Case loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputSentence = document.getElementById('inputSentence');
    const btnConvert = document.getElementById('btnConvert');
    const btnExample = document.getElementById('btnExample');
    const originalDiv = document.getElementById('original');
    const resultDiv = document.getElementById('result');
    const methodDiv = document.getElementById('method');
    
    // Method 1: Using split, map, and join
    function titleCaseSplit(frase) {
        return frase
            .toLowerCase()
            .split(' ')
            .map(function(parola) {
                if (parola.length === 0) return parola;
                return parola.charAt(0).toUpperCase() + parola.slice(1);
            })
            .join(' ');
    }
    
    // Method 2: Using regex
    function titleCaseRegex(frase) {
        return frase.toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }
    
    // Method 3: Using a for loop
    function titleCaseLoop(frase) {
        let risultato = '';
        let nuovaParola = true;
        
        for (let i = 0; i < frase.length; i++) {
            const char = frase[i];
            
            if (nuovaParola && /[a-zA-Z]/.test(char)) {
                risultato += char.toUpperCase();
                nuovaParola = false;
            } else {
                risultato += char.toLowerCase();
            }
            
            if (char === ' ') {
                nuovaParola = true;
            }
        }
        
        return risultato;
    }
    
    // Method 4: Using CSS (for display only)
    function titleCaseCSS(frase) {
        // This returns the CSS style that would achieve the same effect
        return 'text-transform: capitalize;';
    }
    
    function highlightDifferences(original, converted) {
        let html = '';
        const words = converted.split(' ');
        const originalWords = original.split(' ');
        
        words.forEach(function(word, index) {
            const origWord = originalWords[index] || '';
            if (word !== origWord) {
                html += `<span class="changed">${word}</span> `;
            } else {
                html += `${word} `;
            }
        });
        
        return html.trim();
    }
    
    btnConvert.addEventListener('click', function() {
        const frase = inputSentence.value.trim();
        
        if (!frase) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci una frase!</span>';
            return;
        }
        
        originalDiv.innerHTML = `<code>"${frase}"</code>`;
        
        const risultatoSplit = titleCaseSplit(frase);
        const risultatoRegex = titleCaseRegex(frase);
        const risultatoLoop = titleCaseLoop(frase);
        
        // Show main result with highlighted changes
        const highlighted = highlightDifferences(frase, risultatoSplit);
        resultDiv.innerHTML = `
            <div class="result-titlecase">
                <div class="result-main">"${risultatoSplit}"</div>
                <div class="result-highlighted">${highlighted}</div>
            </div>
        `;
        
        // Show all methods
        methodDiv.innerHTML = `
            <h4>Confronto Metodi:</h4>
            <div class="method-list">
                <div class="method-item">
                    <strong>Split + Map:</strong> "${risultatoSplit}"
                </div>
                <div class="method-item">
                    <strong>Regex:</strong> "${risultatoRegex}"
                </div>
                <div class="method-item">
                    <strong>For Loop:</strong> "${risultatoLoop}"
                </div>
                <div class="method-item css-method">
                    <strong>CSS:</strong> <code>text-transform: capitalize;</code>
                </div>
            </div>
        `;
    });
    
    btnExample.addEventListener('click', function() {
        const examples = [
            'oggi andrò a lezione',
            'il gatto salta sul tavolo',
            'javascript È fantastico',
            'CORso di WEB development',
            '123 testo con numeri'
        ];
        const randomExample = examples[Math.floor(Math.random() * examples.length)];
        inputSentence.value = randomExample;
        btnConvert.click();
    });
});
