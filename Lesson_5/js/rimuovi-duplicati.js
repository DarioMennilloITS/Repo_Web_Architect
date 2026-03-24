/* ---------------------------------- ES 7 ---------------------------------- */
// Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.

console.log('ES7 Rimuovi Duplicati loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputArray = document.getElementById('inputArray');
    const btnRemove = document.getElementById('btnRemove');
    const btnExample = document.getElementById('btnExample');
    const originalDiv = document.getElementById('original');
    const resultDiv = document.getElementById('result');
    const methodDiv = document.getElementById('method');
    
    // Method 1: Using Set (modern approach)
    function rimuoviDuplicatiSet(arr) {
        return [...new Set(arr)];
    }
    
    // Method 2: Using filter and indexOf
    function rimuoviDuplicatiFilter(arr) {
        return arr.filter(function(item, index) {
            return arr.indexOf(item) === index;
        });
    }
    
    // Method 3: Using a loop (manual approach)
    function rimuoviDuplicatiManual(arr) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (!result.includes(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    
    // Method 4: Using reduce
    function rimuoviDuplicatiReduce(arr) {
        return arr.reduce(function(acc, item) {
            if (!acc.includes(item)) {
                acc.push(item);
            }
            return acc;
        }, []);
    }
    
    function parseInput(input) {
        // Try to parse as JSON first
        try {
            const parsed = JSON.parse(input);
            if (Array.isArray(parsed)) {
                return parsed;
            }
        } catch (e) {
            // Not valid JSON, treat as comma-separated string
        }
        
        // Split by comma and trim
        return input.split(',').map(item => {
            const trimmed = item.trim();
            // Try to convert to number
            if (!isNaN(trimmed) && trimmed !== '') {
                return Number(trimmed);
            }
            return trimmed;
        }).filter(item => item !== '');
    }
    
    function displayArray(arr, container) {
        if (arr.length === 0) {
            container.innerHTML = '<em>(array vuoto)</em>';
            return;
        }
        
        let html = '<div class="array-display">';
        arr.forEach(function(item, index) {
            const duplicates = arr.slice(0, index).includes(item);
            const className = duplicates ? 'duplicate' : 'unique';
            html += `<span class="array-item ${className}">${JSON.stringify(item)}</span>`;
        });
        html += '</div>';
        html += `<p style="margin-top: 0.5rem; font-size: 0.8rem;">Lunghezza: ${arr.length} elementi</p>`;
        container.innerHTML = html;
    }
    
    btnRemove.addEventListener('click', function() {
        const input = inputArray.value.trim();
        
        if (!input) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci un array!</span>';
            return;
        }
        
        const arrayOriginale = parseInput(input);
        
        if (arrayOriginale.length === 0) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Nessun elemento valido trovato!</span>';
            return;
        }
        
        // Show original
        displayArray(arrayOriginale, originalDiv);
        
        // Use Set method as default
        const arraySenzaDuplicati = rimuoviDuplicatiSet(arrayOriginale);
        
        // Show result
        let html = '<div class="array-display">';
        arraySenzaDuplicati.forEach(function(item) {
            html += `<span class="array-item result">${JSON.stringify(item)}</span>`;
        });
        html += '</div>';
        html += `<p style="margin-top: 0.5rem; font-size: 0.8rem;">Lunghezza: ${arraySenzaDuplicati.length} elementi`;
        html += ` <span style="color: var(--red);">(-${arrayOriginale.length - arraySenzaDuplicati.length} duplicati)</span></p>`;
        resultDiv.innerHTML = html;
        
        // Show method comparison
        const filterResult = rimuoviDuplicatiFilter(arrayOriginale);
        const manualResult = rimuoviDuplicatiManual(arrayOriginale);
        const reduceResult = rimuoviDuplicatiReduce(arrayOriginale);
        
        methodDiv.innerHTML = `
            <h4>Confronto Metodi:</h4>
            <div class="method-comparison">
                <div class="method-row">
                    <strong>Set:</strong> [${rimuoviDuplicatiSet(arrayOriginale).map(JSON.stringify).join(', ')}]
                </div>
                <div class="method-row">
                    <strong>Filter:</strong> [${filterResult.map(JSON.stringify).join(', ')}]
                </div>
                <div class="method-row">
                    <strong>Manuale:</strong> [${manualResult.map(JSON.stringify).join(', ')}]
                </div>
                <div class="method-row">
                    <strong>Reduce:</strong> [${reduceResult.map(JSON.stringify).join(', ')}]
                </div>
            </div>
        `;
    });
    
    btnExample.addEventListener('click', function() {
        const examples = [
            '1, 2, 2, 3, 4, 4, 5, 1',
            'apple, banana, apple, cherry, banana, date',
            'true, false, true, true, false',
            '1, "1", 2, "2", 1, 2'
        ];
        const randomExample = examples[Math.floor(Math.random() * examples.length)];
        inputArray.value = randomExample;
        btnRemove.click();
    });
});
