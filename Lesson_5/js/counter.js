/* ============================================
   Exercise 1: Counter
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Counter exercise loaded!');
    
    // DOM Elements
    const counterValue = document.getElementById('counterValue');
    const counterMessage = document.getElementById('counterMessage');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    // State
    let count = 0;
    const MIN_VALUE = -100;
    const MAX_VALUE = 100;
    
    // Update display function
    function updateDisplay() {
        counterValue.textContent = count;
        
        // Clear any message
        counterMessage.textContent = '';
        counterMessage.className = 'message';
        
        // Disable buttons at limits
        incrementBtn.disabled = count >= MAX_VALUE;
        decrementBtn.disabled = count <= MIN_VALUE;
    }
    
    // Increment function
    function increment() {
        if (count < MAX_VALUE) {
            count++;
            updateDisplay();
        } else {
            showMessage('Maximum value reached!', 'error');
        }
    }
    
    // Decrement function
    function decrement() {
        if (count > MIN_VALUE) {
            count--;
            updateDisplay();
        } else {
            showMessage('Minimum value reached!', 'error');
        }
    }
    
    // Reset function
    function reset() {
        count = 0;
        showMessage('Counter reset!', 'success');
        updateDisplay();
    }
    
    // Show message function
    function showMessage(text, type) {
        counterMessage.textContent = text;
        counterMessage.className = 'message ' + type;
        
        // Clear message after 2 seconds
        setTimeout(() => {
            counterMessage.textContent = '';
            counterMessage.className = 'message';
        }, 2000);
    }
    
    // Event Listeners
    incrementBtn.addEventListener('click', increment);
    decrementBtn.addEventListener('click', decrement);
    resetBtn.addEventListener('click', reset);
    
    // Initialize
    updateDisplay();
    
});
