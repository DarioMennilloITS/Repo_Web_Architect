/* ---------------------------------- ES 8 ---------------------------------- */
// Dati due array, calcolare la somma degli elementi presenti nello stesso indice. 
// Utilizza le funzioni. 
// Esempio: array1 = [1,0,2,4,6] array2 = [0,4,5,8,7] Output = [1,4,7,12,13]

console.log('ES8 Somma Array loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputArray1 = document.getElementById('inputArray1');
    const inputArray2 = document.getElementById('inputArray2');
    const btnCalculate = document.getElementById('btnCalculate');
    const btnExample = document.getElementById('btnExample');
    const array1Display = document.getElementById('array1Display');
    const array2Display = document.getElementById('array2Display');
    const resultDiv = document.getElementById('result');
    const visualizationDiv = document.getElementById('visualization');
    
    // Main function to sum arrays at same index
    function sommaArray(array1, array2) {
        const lunghezza = Math.max(array1.length, array2.length);
        const risultato = [];
        
        for (let i = 0; i < lunghezza; i++) {
            const val1 = array1[i] || 0;
            const val2 = array2[i] || 0;
            risultato.push(val1 + val2);
        }
        
        return risultato;
    }
    
    // Alternative using map
    function sommaArrayMap(array1, array2) {
        const lunghezza = Math.max(array1.length, array2.length);
        return Array.from({ length: lunghezza }, function(_, i) {
            return (array1[i] || 0) + (array2[i] || 0);
        });
    }
    
    // Alternative using reduce
    function sommaArrayReduce(array1, array2) {
        const lunghezza = Math.max(array1.length, array2.length);
        const risultato = [];
        
        return Array.from({ length: lunghezza }).reduce(function(acc, _, i) {
            acc.push((array1[i] || 0) + (array2[i] || 0));
            return acc;
        }, []);
    }
    
    function parseInput(input) {
        return input.split(',').map(item => {
            const trimmed = item.trim();
            const num = Number(trimmed);
            return isNaN(num) ? 0 : num;
        }).filter(item => item !== 0 || trimmed === '0');
    }
    
    function displayArray(arr, container, label) {
        let html = `<div class="array-box"><strong>${label}</strong> [`;
        html += arr.map(n => `<span class="num">${n}</span>`).join(', ');
        html += ']</div>';
        container.innerHTML = html;
    }
    
    btnCalculate.addEventListener('click', function() {
        const input1 = inputArray1.value.trim();
        const input2 = inputArray2.value.trim();
        
        if (!input1 || !input2) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci entrambi gli array!</span>';
            return;
        }
        
        const array1 = parseInput(input1);
        const array2 = parseInput(input2);
        
        if (array1.length === 0 || array2.length === 0) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Array non validi!</span>';
            return;
        }
        
        const risultato = sommaArray(array1, array2);
        
        // Display arrays
        displayArray(array1, array1Display, 'Array 1:');
        displayArray(array2, array2Display, 'Array 2:');
        
        // Display result
        resultDiv.innerHTML = `
            <div class="result-array">
                <strong>Risultato:</strong> [${risultato.map(n => `<span class="num result">${n}</span>`).join(', ')}]
            </div>
        `;
        
        // Visualization
        let vizHtml = '<h4>Calcolo passo-passo:</h4><table class="sum-table">';
        vizHtml += '<tr><th>Indice</th><th>Array 1</th><th>+</th><th>Array 2</th><th>=</th><th>Risultato</th></tr>';
        
        const maxLen = Math.max(array1.length, array2.length);
        for (let i = 0; i < maxLen; i++) {
            const v1 = array1[i] !== undefined ? array1[i] : '<span class="missing">-</span>';
            const v2 = array2[i] !== undefined ? array2[i] : '<span class="missing">-</span>';
            const actualV1 = array1[i] || 0;
            const actualV2 = array2[i] || 0;
            
            vizHtml += `<tr>
                <td>[${i}]</td>
                <td>${v1}</td>
                <td>+</td>
                <td>${v2}</td>
                <td>=</td>
                <td><strong>${risultato[i]}</strong></td>
            </tr>`;
        }
        vizHtml += '</table>';
        
        visualizationDiv.innerHTML = vizHtml;
    });
    
    btnExample.addEventListener('click', function() {
        inputArray1.value = '1, 0, 2, 4, 6';
        inputArray2.value = '0, 4, 5, 8, 7';
        btnCalculate.click();
    });
});
