/* ---------------------------------- ES 4 ---------------------------------- */
// Scrivi una funzione javascript che accetta una stringa come parametro e trova 
// la parola più lunga all'interno della frase. 
// Es: "mi chiamo Massimiliano" -> "Massimiliano"

console.log('ES4 Parola Più Lunga loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputSentence = document.getElementById('inputSentence');
    const btnFind = document.getElementById('btnFind');
    const resultDiv = document.getElementById('result');
    
    // Function to find longest word
    function trovaParolaPiuLunga(frase) {
        // Remove punctuation and split by whitespace
        const parole = frase.trim().split(/\s+/);
        
        let parolaPiuLunga = '';
        let lunghezzaMassima = 0;
        
        for (let i = 0; i < parole.length; i++) {
            // Remove punctuation from word
            const parolaPulita = parole[i].replace(/[.,;:!?()"'\-]/g, '');
            
            if (parolaPulita.length > lunghezzaMassima) {
                lunghezzaMassima = parolaPulita.length;
                parolaPiuLunga = parolaPulita;
            }
        }
        
        return {
            parola: parolaPiuLunga,
            lunghezza: lunghezzaMassima
        };
    }
    
    // Alternative using reduce
    function trovaParolaPiuLungaReduce(frase) {
        const parole = frase.trim().split(/\s+/);
        
        return parole.reduce(function(acc, parola) {
            const parolaPulita = parola.replace(/[.,;:!?()"'\-]/g, '');
            if (parolaPulita.length > acc.lunghezza) {
                return { parola: parolaPulita, lunghezza: parolaPulita.length };
            }
            return acc;
        }, { parola: '', lunghezza: 0 });
    }
    
    btnFind.addEventListener('click', function() {
        const frase = inputSentence.value.trim();
        
        if (!frase) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci una frase!</span>';
            return;
        }
        
        const risultato = trovaParolaPiuLunga(frase);
        const risultatoReduce = trovaParolaPiuLungaReduce(frase);
        
        // Create a visual representation highlighting the longest word
        const parole = frase.split(/\s+/);
        let highlightedSentence = '';
        
        parole.forEach(function(parola, index) {
            const parolaPulita = parola.replace(/[.,;:!?()"'\-]/g, '');
            if (parolaPulita === risultato.parola && parolaPulita.length === risultato.lunghezza) {
                highlightedSentence += '<mark>' + parola + '</mark>';
            } else {
                highlightedSentence += parola;
            }
            if (index < parole.length - 1) {
                highlightedSentence += ' ';
            }
        });
        
        resultDiv.innerHTML = `
            <p><strong>Frase:</strong> "${highlightedSentence}"</p>
            <p><strong>Parola più lunga:</strong> <span style="font-size: 1.3rem; font-weight: bold;">${risultato.parola}</span></p>
            <p><strong>Lunghezza:</strong> ${risultato.lunghezza} caratteri</p>
            <hr style="margin: 1rem 0; border-color: var(--grid);">
            <p style="font-size: 0.8rem; color: var(--ink-light);">
                Totale parole nella frase: ${parole.length}
            </p>
        `;
    });
});
