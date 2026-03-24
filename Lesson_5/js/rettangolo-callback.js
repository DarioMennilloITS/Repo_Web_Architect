/* ---------------------------------- ES 11 --------------------------------- */
// Scrivi una funzione calcolaAreaRettangolo(base, altezza) che restituisce l'area 
// di un rettangolo o il perimetro in base al pulsante cliccato. 
// Utilizzando la funzione calcolaArea crea una funzione calcolaVolume 
// passando come parametri la profondità e la funzione calcolaArea

console.log('ES11 Rettangolo Callback loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputBase = document.getElementById('inputBase');
    const inputAltezza = document.getElementById('inputAltezza');
    const inputProfondita = document.getElementById('inputProfondita');
    const btnArea = document.getElementById('btnArea');
    const btnPerimetro = document.getElementById('btnPerimetro');
    const btnVolume = document.getElementById('btnVolume');
    const resultDiv = document.getElementById('result');
    const codeDiv = document.getElementById('codeDisplay');
    
    // Calculate area of rectangle
    function calcolaAreaRettangolo(base, altezza) {
        return base * altezza;
    }
    
    // Calculate perimeter of rectangle
    function calcolaPerimetroRettangolo(base, altezza) {
        return 2 * (base + altezza);
    }
    
    // Calculate volume using the area function as callback
    // This function accepts a callback function to calculate the base area
    function calcolaVolume(profondita, funzioneArea, base, altezza) {
        const areaBase = funzioneArea(base, altezza);
        return areaBase * profondita;
    }
    
    function getInputs() {
        const base = parseFloat(inputBase.value);
        const altezza = parseFloat(inputAltezza.value);
        const profondita = parseFloat(inputProfondita.value);
        
        if (isNaN(base) || isNaN(altezza) || base <= 0 || altezza <= 0) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci valori validi per base e altezza!</span>';
            return null;
        }
        
        return { base, altezza, profondita: isNaN(profondita) ? 0 : profondita };
    }
    
    function showCode(code) {
        codeDiv.innerHTML = `<pre><code>${code}</code></pre>`;
    }
    
    btnArea.addEventListener('click', function() {
        const inputs = getInputs();
        if (!inputs) return;
        
        const area = calcolaAreaRettangolo(inputs.base, inputs.altezza);
        
        resultDiv.innerHTML = `
            <div class="calc-result-box">
                <div class="formula">Area = base × altezza</div>
                <div class="calculation">${inputs.base} × ${inputs.altezza} = <strong>${area}</strong></div>
                <div class="unit">unità quadrate</div>
            </div>
        `;
        
        showCode(`// Chiamata funzione
const area = calcolaAreaRettangolo(${inputs.base}, ${inputs.altezza});
// Risultato: ${area}`);
    });
    
    btnPerimetro.addEventListener('click', function() {
        const inputs = getInputs();
        if (!inputs) return;
        
        const perimetro = calcolaPerimetroRettangolo(inputs.base, inputs.altezza);
        
        resultDiv.innerHTML = `
            <div class="calc-result-box">
                <div class="formula">Perimetro = 2 × (base + altezza)</div>
                <div class="calculation">2 × (${inputs.base} + ${inputs.altezza}) = <strong>${perimetro}</strong></div>
                <div class="unit">unità lineari</div>
            </div>
        `;
        
        showCode(`// Chiamata funzione
const perimetro = calcolaPerimetroRettangolo(${inputs.base}, ${inputs.altezza});
// Risultato: ${perimetro}`);
    });
    
    btnVolume.addEventListener('click', function() {
        const inputs = getInputs();
        if (!inputs) return;
        
        if (inputs.profondita <= 0) {
            resultDiv.innerHTML = '<span style="color: var(--red);">Inserisci una profondità valida per calcolare il volume!</span>';
            return;
        }
        
        // Pass the area function as a callback
        const volume = calcolaVolume(
            inputs.profondita, 
            calcolaAreaRettangolo, 
            inputs.base, 
            inputs.altezza
        );
        
        const areaBase = calcolaAreaRettangolo(inputs.base, inputs.altezza);
        
        resultDiv.innerHTML = `
            <div class="calc-result-box">
                <div class="formula">Volume = AreaBase × profondità</div>
                <div class="step">AreaBase = ${inputs.base} × ${inputs.altezza} = ${areaBase}</div>
                <div class="calculation">${areaBase} × ${inputs.profondita} = <strong>${volume}</strong></div>
                <div class="unit">unità cubiche</div>
            </div>
        `;
        
        showCode(`// La funzione calcolaVolume accetta una funzione come parametro
function calcolaVolume(profondita, funzioneArea, base, altezza) {
    const areaBase = funzioneArea(base, altezza); // callback
    return areaBase * profondita;
}

// Chiamata con callback
const volume = calcolaVolume(
    ${inputs.profondita},
    calcolaAreaRettangolo, // <-- funzione passata come parametro
    ${inputs.base},
    ${inputs.altezza}
);
// Risultato: ${volume}`);
    });
    
    // Set default values
    inputBase.value = '5';
    inputAltezza.value = '3';
    inputProfondita.value = '2';
});
