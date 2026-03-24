/* ---------------------------------- ES 12 --------------------------------- */
// Scrivere un programma per trovare il valore più vicino a 100 tra una coppia di numeri forniti, 
// se sono uguali ritorna un avviso.

console.log('ES12 Vicino a 100 loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputNum1 = document.getElementById('inputNum1');
    const inputNum2 = document.getElementById('inputNum2');
    const targetValue = document.getElementById('targetValue');
    const btnCheck = document.getElementById('btnCheck');
    const btnRandom = document.getElementById('btnRandom');
    const resultDiv = document.getElementById('result');
    const visualizationDiv = document.getElementById('visualization');
    
    function trovaPiuVicino(num1, num2, target = 100) {
        const diff1 = Math.abs(target - num1);
        const diff2 = Math.abs(target - num2);
        
        if (diff1 === diff2) {
            return {
                vincitore: null,
                message: `I due numeri sono equidistanti da ${target}!`,
                num1: { valore: num1, distanza: diff1 },
                num2: { valore: num2, distanza: diff2 }
            };
        }
        
        if (diff1 < diff2) {
            return {
                vincitore: num1,
                message: `${num1} è più vicino a ${target}`,
                num1: { valore: num1, distanza: diff1 },
                num2: { valore: num2, distanza: diff2 }
            };
        } else {
            return {
                vincitore: num2,
                message: `${num2} è più vicino a ${target}`,
                num1: { valore: num1, distanza: diff1 },
                num2: { valore: num2, distanza: diff2 }
            };
        }
    }
    
    btnCheck.addEventListener('click', function() {
        const num1 = parseFloat(inputNum1.value);
        const num2 = parseFloat(inputNum2.value);
        const target = parseFloat(targetValue.value) || 100;
        
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci numeri validi!</span>';
            return;
        }
        
        const risultato = trovaPiuVicino(num1, num2, target);
        
        // Visualization on number line
        const minVal = Math.min(num1, num2, target) - 20;
        const maxVal = Math.max(num1, num2, target) + 20;
        const range = maxVal - minVal;
        
        function getPosition(val) {
            return ((val - minVal) / range) * 100;
        }
        
        let vizHtml = `
            <div class="number-line">
                <div class="line"></div>
                <div class="point target" style="left: ${getPosition(target)}%">
                    <span class="label">${target}</span>
                </div>
                <div class="point num1 ${risultato.vincitore === num1 ? 'winner' : ''}" style="left: ${getPosition(num1)}%">
                    <span class="label">${num1}</span>
                </div>
                <div class="point num2 ${risultato.vincitore === num2 ? 'winner' : ''}" style="left: ${getPosition(num2)}%">
                    <span class="label">${num2}</span>
                </div>
            </div>
        `;
        visualizationDiv.innerHTML = vizHtml;
        
        // Result
        if (risultato.vincitore === null) {
            resultDiv.innerHTML = `
                <div class="result-tie">
                    <h4> Pareggio!</h4>
                    <p>${risultato.message}</p>
                    <div class="distances">
                        <span>Num1 (${num1}): distanza ${risultato.num1.distanza}</span>
                        <span>Num2 (${num2}): distanza ${risultato.num2.distanza}</span>
                    </div>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="result-winner">
                    <h4> Vincitore: ${risultato.vincitore}</h4>
                    <p>${risultato.message}</p>
                    <div class="distances">
                        <span class="${risultato.vincitore === num1 ? 'winner' : ''}">Num1 (${num1}): distanza ${risultato.num1.distanza}</span>
                        <span class="${risultato.vincitore === num2 ? 'winner' : ''}">Num2 (${num2}): distanza ${risultato.num2.distanza}</span>
                    </div>
                </div>
            `;
        }
    });
    
    btnRandom.addEventListener('click', function() {
        inputNum1.value = Math.floor(Math.random() * 200);
        inputNum2.value = Math.floor(Math.random() * 200);
        targetValue.value = 100;
        btnCheck.click();
    });
    
    // Set defaults
    inputNum1.value = '89';
    inputNum2.value = '120';
    targetValue.value = '100';
});
