/* ============================================
   ES1 - Gioco del Lotto (Estrazione senza ripetizione)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Lotto game loaded!');
    
    // Game state
    let availableNumbers = [];
    let drawnNumbers = [];
    
    // DOM Elements
    const drawBtn = document.getElementById('drawBtn');
    const resetBtn = document.getElementById('resetBtn');
    const currentNumberEl = document.getElementById('currentNumber');
    const drawnCountEl = document.getElementById('drawnCount');
    const remainingCountEl = document.getElementById('remainingCount');
    const drawnNumbersEl = document.getElementById('drawnNumbers');
    
    // Initialize the game
    function initGame() {
        // Create array of numbers 1 to 90
        availableNumbers = [];
        for (let i = 1; i <= 90; i++) {
            availableNumbers.push(i);
        }
        
        drawnNumbers = [];
        
        // Reset UI
        currentNumberEl.textContent = '-';
        updateStats();
        renderDrawnNumbers();
        
        // Enable draw button
        drawBtn.disabled = false;
        drawBtn.textContent = 'Estrai Numero';
        
        console.log('Game initialized with 90 numbers');
    }
    
    // Draw a random number from available numbers
    function drawNumber() {
        if (availableNumbers.length === 0) {
            alert('Tutti i numeri sono stati estratti!');
            return;
        }
        
        // Get random index
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        
        // Remove and get the number from available array
        const drawnNumber = availableNumbers.splice(randomIndex, 1)[0];
        
        // Add to drawn numbers
        drawnNumbers.push(drawnNumber);
        
        // Update UI
        currentNumberEl.textContent = drawnNumber;
        updateStats();
        renderDrawnNumbers();
        
        console.log(`Drawn number: ${drawnNumber}`);
        
        // Check if all numbers are drawn
        if (availableNumbers.length === 0) {
            drawBtn.disabled = true;
            drawBtn.textContent = 'Fine';
            setTimeout(() => {
                alert('Tutti i 90 numeri sono stati estratti!');
            }, 300);
        }
    }
    
    // Update statistics display
    function updateStats() {
        drawnCountEl.textContent = drawnNumbers.length;
        remainingCountEl.textContent = availableNumbers.length;
    }
    
    // Render the drawn numbers
    function renderDrawnNumbers() {
        drawnNumbersEl.innerHTML = '';
        
        if (drawnNumbers.length === 0) {
            const span = document.createElement('span');
            span.className = 'array-item';
            span.textContent = 'Nessun numero estratto';
            drawnNumbersEl.appendChild(span);
            return;
        }
        
        // Show drawn numbers in reverse order (newest first)
        const reversedDrawn = [...drawnNumbers].reverse();
        
        reversedDrawn.forEach(num => {
            const span = document.createElement('span');
            span.className = 'array-item';
            span.textContent = num;
            drawnNumbersEl.appendChild(span);
        });
    }
    
    // Event listeners
    drawBtn.addEventListener('click', drawNumber);
    
    resetBtn.addEventListener('click', function() {
        if (confirm('Sei sicuro di voler resettare il gioco?')) {
            initGame();
        }
    });
    
    // Initialize game on load
    initGame();
    
});
