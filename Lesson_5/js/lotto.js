/* ============================================
   ES1 - Gioco del Lotto (Estrazione senza ripetizione)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Lotto game loaded!');
    
   
    let availableNumbers = [];
    let drawnNumbers = [];
    
    
    const drawBtn = document.getElementById('drawBtn');
    const resetBtn = document.getElementById('resetBtn');
    const currentNumberEl = document.getElementById('currentNumber');
    const drawnCountEl = document.getElementById('drawnCount');
    const remainingCountEl = document.getElementById('remainingCount');
    const drawnNumbersEl = document.getElementById('drawnNumbers');
    
    
    function initGame() {
       
        availableNumbers = [];
        for (let i = 1; i <= 90; i++) {
            availableNumbers.push(i);
        }
        
        drawnNumbers = [];
        currentNumberEl.textContent = '-';
        drawBtn.disabled = false;
        drawBtn.textContent = 'Estrai Numero';
        console.log('Game initialized with 90 numbers');
        updateStats();
        renderDrawnNumbers();
    }

    function drawNumber() {
        
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const drawnNumber = availableNumbers.splice(randomIndex, 1)[0];
        drawnNumbers.push(drawnNumber);
        
    
        currentNumberEl.textContent = drawnNumber;
        updateStats();
        renderDrawnNumbers();
        
        console.log(`Drawn number: ${drawnNumber}`);
        
        if (availableNumbers.length === 0) {
            drawBtn.disabled = true;
            drawBtn.textContent = 'Fine';
            setTimeout(() => {
                alert('Tutti i 90 numeri sono stati estratti!');
            }, 300);
        }
    }
    
    function updateStats() {
        drawnCountEl.textContent = drawnNumbers.length;
        remainingCountEl.textContent = availableNumbers.length;
    }
    
    function renderDrawnNumbers() {
        drawnNumbersEl.innerHTML = '';
        
        if (drawnNumbers.length === 0) {
            const span = document.createElement('span');
            span.className = 'array-item';
            span.textContent = 'Nessun numero estratto';
            drawnNumbersEl.appendChild(span);
            return;
        }
        

        const reversedDrawn = [...drawnNumbers].reverse();
        
        reversedDrawn.forEach(num => {
            const span = document.createElement('span');
            span.className = 'array-item';
            span.textContent = num;
            drawnNumbersEl.appendChild(span);
        });
    }
    

    drawBtn.addEventListener('click', drawNumber);
    
    resetBtn.addEventListener('click', function() {
        if (confirm('Sei sicuro di voler resettare il gioco?')) {
            initGame();
        }
    });
    
    
    initGame();
    
});
