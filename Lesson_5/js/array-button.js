/* ---------------------------------- ES 6 ---------------------------------- */
// Scrivi una funzione che stampa, uno a uno, gli elementi di un array 
// ogni qual volta viene premuto un pulsante nella pagina

console.log('ES6 Array Button loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const inputArray = document.getElementById('inputArray');
    const btnNext = document.getElementById('btnNext');
    const btnReset = document.getElementById('btnReset');
    const btnAuto = document.getElementById('btnAuto');
    const btnStopAuto = document.getElementById('btnStopAuto');
    const currentElementDiv = document.getElementById('currentElement');
    const progressDiv = document.getElementById('progress');
    const displayedList = document.getElementById('displayedList');
    
    let arrayElementi = [];
    let indiceCorrente = 0;
    let autoInterval = null;
    
    function parseArrayInput(input) {
        // Split by comma or newline
        return input.split(/[,\n]+/).map(item => item.trim()).filter(item => item !== '');
    }
    
    function mostraElemento() {
        if (indiceCorrente >= arrayElementi.length) {
            currentElementDiv.innerHTML = '<em style="color: var(--ink-light);">Tutti gli elementi mostrati!</em>';
            btnNext.disabled = true;
            return;
        }
        
        const elemento = arrayElementi[indiceCorrente];
        
        // Animate the current element
        currentElementDiv.innerHTML = `
            <div class="element-appear">
                <span class="element-index">#${indiceCorrente + 1}</span>
                <span class="element-value">${elemento}</span>
            </div>
        `;
        
        // Add to displayed list
        const li = document.createElement('li');
        li.innerHTML = `<span class="item-number">${indiceCorrente + 1}.</span> ${elemento}`;
        displayedList.appendChild(li);
        
        // Update progress
        progressDiv.textContent = `Progresso: ${indiceCorrente + 1} / ${arrayElementi.length}`;
        
        indiceCorrente++;
        
        if (indiceCorrente >= arrayElementi.length) {
            btnNext.disabled = true;
            currentElementDiv.innerHTML += '<div style="margin-top: 1rem; color: var(--accent);">✓ Array completato!</div>';
        }
    }
    
    function reset() {
        indiceCorrente = 0;
        displayedList.innerHTML = '';
        currentElementDiv.innerHTML = '<em>Clicca "Prossimo Elemento" per iniziare...</em>';
        progressDiv.textContent = 'Progresso: 0 / ' + arrayElementi.length;
        btnNext.disabled = false;
        stopAuto();
    }
    
    function startAuto() {
        if (autoInterval) return;
        
        const speed = parseInt(document.getElementById('autoSpeed').value, 10) || 1000;
        
        btnAuto.disabled = true;
        btnStopAuto.disabled = false;
        
        autoInterval = setInterval(function() {
            if (indiceCorrente >= arrayElementi.length) {
                stopAuto();
                return;
            }
            mostraElemento();
        }, speed);
    }
    
    function stopAuto() {
        if (autoInterval) {
            clearInterval(autoInterval);
            autoInterval = null;
        }
        btnAuto.disabled = false;
        btnStopAuto.disabled = true;
    }
    
    function initialize() {
        const input = inputArray.value.trim();
        if (!input) {
            currentElementDiv.innerHTML = '<span style="color: var(--red);">Inserisci degli elementi!</span>';
            return;
        }
        
        arrayElementi = parseArrayInput(input);
        
        if (arrayElementi.length === 0) {
            currentElementDiv.innerHTML = '<span style="color: var(--red);">Inserisci degli elementi validi!</span>';
            return;
        }
        
        reset();
        btnNext.disabled = false;
    }
    
    btnNext.addEventListener('click', mostraElemento);
    btnReset.addEventListener('click', reset);
    btnAuto.addEventListener('click', startAuto);
    btnStopAuto.addEventListener('click', stopAuto);
    
    // Initialize on input change
    inputArray.addEventListener('change', initialize);
    
    // Initial setup
    initialize();
});
