/* ============================================
   Lotto Game JavaScript
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Lotto game loaded!');
    
    // Game state
    let availableNumbers = [];  // Numbers still in the pool
    let drawnNumbers = [];      // Numbers already drawn
    
    // DOM Elements
    const drawBtn = document.getElementById('drawBtn');
    const resetBtn = document.getElementById('resetBtn');
    const currentNumberEl = document.getElementById('currentNumber');
    const drawnCountEl = document.getElementById('drawnCount');
    const remainingCountEl = document.getElementById('remainingCount');
    const drawnNumbersEl = document.getElementById('drawnNumbers');
    const numbersGridEl = document.getElementById('numbersGrid');
    
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
        currentNumberEl.classList.remove('drawn');
        updateStats();
        renderDrawnNumbers();
        renderNumbersGrid();
        
        // Enable draw button
        drawBtn.disabled = false;
        drawBtn.textContent = 'Draw Number';
        
        console.log('Game initialized with 90 numbers');
    }
    
    // Draw a random number from available numbers
    function drawNumber() {
        if (availableNumbers.length === 0) {
            alert('All numbers have been drawn!');
            return;
        }
        
        // Get random index
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        
        // Remove and get the number from available array
        const drawnNumber = availableNumbers.splice(randomIndex, 1)[0];
        
        // Add to drawn numbers
        drawnNumbers.push(drawnNumber);
        
        // Update UI
        displayCurrentNumber(drawnNumber);
        updateStats();
        renderDrawnNumbers();
        updateNumberCell(drawnNumber);
        
        console.log(`Drawn number: ${drawnNumber}`);
        
        // Check if all numbers are drawn
        if (availableNumbers.length === 0) {
            drawBtn.disabled = true;
            drawBtn.textContent = 'Game Over';
            setTimeout(() => {
                alert('🎉 All 90 numbers have been drawn!');
            }, 300);
        }
    }
    
    // Display the currently drawn number with animation
    function displayCurrentNumber(number) {
        currentNumberEl.textContent = number;
        currentNumberEl.classList.remove('drawn');
        
        // Trigger reflow to restart animation
        void currentNumberEl.offsetWidth;
        
        currentNumberEl.classList.add('drawn');
    }
    
    // Update statistics display
    function updateStats() {
        drawnCountEl.textContent = drawnNumbers.length;
        remainingCountEl.textContent = availableNumbers.length;
    }
    
    // Render the drawn numbers history
    function renderDrawnNumbers() {
        drawnNumbersEl.innerHTML = '';
        
        // Show drawn numbers in reverse order (newest first)
        const reversedDrawn = [...drawnNumbers].reverse();
        
        reversedDrawn.forEach(num => {
            const numEl = document.createElement('div');
            numEl.className = 'drawn-number';
            numEl.textContent = num;
            drawnNumbersEl.appendChild(numEl);
        });
    }
    
    // Render the numbers grid (1-90)
    function renderNumbersGrid() {
        numbersGridEl.innerHTML = '';
        
        for (let i = 1; i <= 90; i++) {
            const cell = document.createElement('div');
            cell.className = 'number-cell';
            cell.textContent = i;
            cell.id = `cell-${i}`;
            
            // Mark as drawn if already drawn
            if (drawnNumbers.includes(i)) {
                cell.classList.add('drawn');
            }
            
            numbersGridEl.appendChild(cell);
        }
    }
    
    // Update a specific number cell when drawn
    function updateNumberCell(number) {
        const cell = document.getElementById(`cell-${number}`);
        if (cell) {
            cell.classList.add('drawn');
        }
    }
    
    // Event listeners
    drawBtn.addEventListener('click', drawNumber);
    
    resetBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset the game? All drawn numbers will be lost.')) {
            initGame();
        }
    });
    
    // Initialize game on load
    initGame();
    
});
