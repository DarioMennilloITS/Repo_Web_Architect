/* ---------------------------------- ES 3 ---------------------------------- */
// Scrivi una funzione javascript che accetta un argomento e restituisce il tipo di dato: 
// oggetto, funzione, stringa, numero, undefined.

console.log('ES3 Tipo Dato loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const btnCheck = document.getElementById('btnCheck');
    const resultDiv = document.getElementById('result');
    const examplesDiv = document.getElementById('examples');
    
    // Function to check data type
    function getTipoDato(valore) {
        // Check for null (special case - typeof returns 'object' for null)
        if (valore === null) {
            return 'null';
        }
        
        // Check for array (special case - typeof returns 'object' for arrays)
        if (Array.isArray(valore)) {
            return 'array';
        }
        
        // Check for function
        if (typeof valore === 'function') {
            return 'funzione';
        }
        
        // Check for object
        if (typeof valore === 'object') {
            return 'oggetto';
        }
        
        // Check for undefined
        if (typeof valore === 'undefined') {
            return 'undefined';
        }
        
        // Check for string
        if (typeof valore === 'string') {
            return 'stringa';
        }
        
        // Check for number
        if (typeof valore === 'number') {
            // Check for NaN and Infinity
            if (isNaN(valore)) {
                return 'numero (NaN)';
            }
            if (!isFinite(valore)) {
                return 'numero (Infinity)';
            }
            return 'numero';
        }
        
        // Check for boolean
        if (typeof valore === 'boolean') {
            return 'booleano';
        }
        
        // Check for bigint
        if (typeof valore === 'bigint') {
            return 'bigint';
        }
        
        // Check for symbol
        if (typeof valore === 'symbol') {
            return 'symbol';
        }
        
        return 'sconosciuto';
    }
    
    // Examples to demonstrate
    const esempi = [
        { value: 'Hello', label: '"Hello" (stringa)' },
        { value: 42, label: '42 (numero)' },
        { value: 3.14, label: '3.14 (numero decimale)' },
        { value: true, label: 'true (booleano)' },
        { value: null, label: 'null' },
        { value: undefined, label: 'undefined' },
        { value: [1, 2, 3], label: '[1, 2, 3] (array)' },
        { value: { a: 1, b: 2 }, label: '{ a: 1, b: 2 } (oggetto)' },
        { value: function() {}, label: 'function() {} (funzione)' },
        { value: NaN, label: 'NaN (Not a Number)' },
        { value: Infinity, label: 'Infinity' },
        { value: '', label: '"" (stringa vuota)' },
        { value: 0, label: '0 (numero)' },
        { value: -1, label: '-1 (numero negativo)' }
    ];
    
    // Display examples
    esempi.forEach(function(esempio) {
        const tipo = getTipoDato(esempio.value);
        const row = document.createElement('div');
        row.className = 'example-row';
        row.innerHTML = `
            <code>${esempio.label}</code>
            <span class="tipo-badge tipo-${tipo.replace(/\s*\([^)]*\)/, '')}">${tipo}</span>
        `;
        examplesDiv.appendChild(row);
    });
    
    btnCheck.addEventListener('click', function() {
        const input = inputValue.value.trim();
        
        if (!input) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci un valore!</span>';
            return;
        }
        
        // Try to parse the input to determine its actual type
        let parsedValue;
        let detectedAs = 'stringa';
        
        // Try to parse as number
        if (input === 'NaN') {
            parsedValue = NaN;
            detectedAs = 'numero (NaN)';
        } else if (input === 'Infinity') {
            parsedValue = Infinity;
            detectedAs = 'numero (Infinity)';
        } else if (input === '-Infinity') {
            parsedValue = -Infinity;
            detectedAs = 'numero (-Infinity)';
        } else if (!isNaN(input) && input !== '' && !input.includes(' ')) {
            // Check if it's an integer or float
            if (input.includes('.')) {
                parsedValue = parseFloat(input);
            } else {
                parsedValue = parseInt(input, 10);
            }
            detectedAs = 'numero';
        } else if (input.toLowerCase() === 'true') {
            parsedValue = true;
            detectedAs = 'booleano';
        } else if (input.toLowerCase() === 'false') {
            parsedValue = false;
            detectedAs = 'booleano';
        } else if (input.toLowerCase() === 'null') {
            parsedValue = null;
            detectedAs = 'null';
        } else if (input.toLowerCase() === 'undefined') {
            parsedValue = undefined;
            detectedAs = 'undefined';
        } else {
            parsedValue = input;
        }
        
        const tipoReale = getTipoDato(parsedValue);
        
        resultDiv.innerHTML = `
            <p><strong>Input:</strong> "${input}"</p>
            <p><strong>Valore interpretato:</strong> ${String(parsedValue)}</p>
            <p><strong>typeof JavaScript:</strong> <code>${typeof parsedValue}</code></p>
            <p><strong>Tipo rilevato:</strong> <span class="tipo-badge tipo-${tipoReale.replace(/\s*\([^)]*\)/, '')}">${tipoReale}</span></p>
        `;
    });
});
