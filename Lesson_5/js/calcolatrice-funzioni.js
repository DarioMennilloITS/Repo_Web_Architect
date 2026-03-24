/* ---------------------------------- ES 9 ---------------------------------- */
// Dati due numeri: num1 = 5; num2 = 9; stampa in console il risultato delle 4 operazioni 
// matematiche di base quando premo un pulsante "Calcola" nella pagina html. 
// Ogni operazione avrà una sua funzione dedicata.

console.log('ES9 Calcolatrice Funzioni loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputNum1 = document.getElementById('inputNum1');
    const inputNum2 = document.getElementById('inputNum2');
    const btnAdd = document.getElementById('btnAdd');
    const btnSubtract = document.getElementById('btnSubtract');
    const btnMultiply = document.getElementById('btnMultiply');
    const btnDivide = document.getElementById('btnDivide');
    const btnAll = document.getElementById('btnAll');
    const btnClear = document.getElementById('btnClear');
    const resultDiv = document.getElementById('result');
    const consoleDiv = document.getElementById('consoleOutput');
    
    // Four basic operations - each with its own function
    function addizione(a, b) {
        const result = a + b;
        console.log(`Addizione: ${a} + ${b} = ${result}`);
        return result;
    }
    
    function sottrazione(a, b) {
        const result = a - b;
        console.log(`Sottrazione: ${a} - ${b} = ${result}`);
        return result;
    }
    
    function moltiplicazione(a, b) {
        const result = a * b;
        console.log(`Moltiplicazione: ${a} × ${b} = ${result}`);
        return result;
    }
    
    function divisione(a, b) {
        if (b === 0) {
            console.log(`Divisione: Errore - divisione per zero!`);
            return 'Errore: divisione per zero';
        }
        const result = a / b;
        console.log(`Divisione: ${a} ÷ ${b} = ${result}`);
        return result;
    }
    
    function logToConsole(message, type = 'info') {
        const line = document.createElement('div');
        line.className = `console-line ${type}`;
        line.textContent = '> ' + message;
        consoleDiv.appendChild(line);
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }
    
    function getInputs() {
        const num1 = parseFloat(inputNum1.value);
        const num2 = parseFloat(inputNum2.value);
        
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci numeri validi!</span>';
            return null;
        }
        
        return { num1, num2 };
    }
    
    btnAdd.addEventListener('click', function() {
        const inputs = getInputs();
        if (!inputs) return;
        
        const risultato = addizione(inputs.num1, inputs.num2);
        resultDiv.innerHTML = `
            <div class="operation-result">
                <span class="op">${inputs.num1} + ${inputs.num2}</span>
                <span class="equals">=</span>
                <span class="result">${risultato}</span>
            </div>
        `;
        logToConsole(`Funzione addizione(${inputs.num1}, ${inputs.num2}) restituisce: ${risultato}`);
    });
    
    btnSubtract.addEventListener('click', function() {
        const inputs = getInputs();
        if (!inputs) return;
        
        const risultato = sottrazione(inputs.num1, inputs.num2);
        resultDiv.innerHTML = `
            <div class="operation-result">
                <span class="op">${inputs.num1} - ${inputs.num2}</span>
                <span class="equals">=</span>
                <span class="result">${risultato}</span>
            </div>
        `;
        logToConsole(`Funzione sottrazione(${inputs.num1}, ${inputs.num2}) restituisce: ${risultato}`);
    });
    
    btnMultiply.addEventListener('click', function() {
        const inputs = getInputs();
        if (!inputs) return;
        
        const risultato = moltiplicazione(inputs.num1, inputs.num2);
        resultDiv.innerHTML = `
            <div class="operation-result">
                <span class="op">${inputs.num1} × ${inputs.num2}</span>
                <span class="equals">=</span>
                <span class="result">${risultato}</span>
            </div>
        `;
        logToConsole(`Funzione moltiplicazione(${inputs.num1}, ${inputs.num2}) restituisce: ${risultato}`);
    });
    
    btnDivide.addEventListener('click', function() {
        const inputs = getInputs();
        if (!inputs) return;
        
        const risultato = divisione(inputs.num1, inputs.num2);
        const type = typeof risultato === 'string' ? 'error' : 'info';
        resultDiv.innerHTML = `
            <div class="operation-result ${type === 'error' ? 'error' : ''}">
                <span class="op">${inputs.num1} ÷ ${inputs.num2}</span>
                <span class="equals">=</span>
                <span class="result">${risultato}</span>
            </div>
        `;
        logToConsole(`Funzione divisione(${inputs.num1}, ${inputs.num2}) restituisce: ${risultato}`, type);
    });
    
    btnAll.addEventListener('click', function() {
        const inputs = getInputs();
        if (!inputs) return;
        
        logToConsole('--- Calcolo tutte le operazioni ---');
        
        const add = addizione(inputs.num1, inputs.num2);
        const sub = sottrazione(inputs.num1, inputs.num2);
        const mul = moltiplicazione(inputs.num1, inputs.num2);
        const div = divisione(inputs.num1, inputs.num2);
        
        resultDiv.innerHTML = `
            <div class="all-operations">
                <div class="op-row">
                    <span class="op-label">Addizione:</span>
                    <span class="op">${inputs.num1} + ${inputs.num2} = ${add}</span>
                </div>
                <div class="op-row">
                    <span class="op-label">Sottrazione:</span>
                    <span class="op">${inputs.num1} - ${inputs.num2} = ${sub}</span>
                </div>
                <div class="op-row">
                    <span class="op-label">Moltiplicazione:</span>
                    <span class="op">${inputs.num1} × ${inputs.num2} = ${mul}</span>
                </div>
                <div class="op-row">
                    <span class="op-label">Divisione:</span>
                    <span class="op">${inputs.num1} ÷ ${inputs.num2} = ${div}</span>
                </div>
            </div>
        `;
        
        logToConsole(`Tutte le operazioni completate per ${inputs.num1} e ${inputs.num2}`);
    });
    
    btnClear.addEventListener('click', function() {
        consoleDiv.innerHTML = '';
        resultDiv.innerHTML = '<em>Clicca un pulsante per calcolare...</em>';
        inputNum1.value = '';
        inputNum2.value = '';
    });
    
    // Set default values
    inputNum1.value = '5';
    inputNum2.value = '9';
});
