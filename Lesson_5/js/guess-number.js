/* ============================================
   Exercise 3: Guess the Number
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Guess the Number exercise loaded!');
    
    // DOM Elements
    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const newGameBtn = document.getElementById('newGameBtn');
    const attemptsCount = document.getElementById('attemptsCount');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const feedbackArea = document.getElementById('feedbackArea');
    const guessesList = document.getElementById('guessesList');
    
    // Game state
    let targetNumber;
    let attempts;
    let guesses;
    let gameWon;
    
    // Initialize game
    function initGame() {
        // Generate random number between 1 and 100
        targetNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        guesses = [];
        gameWon = false;
        
        // Reset UI
        guessInput.value = '';
        guessInput.disabled = false;
        guessBtn.disabled = false;
        attemptsCount.textContent = '0';
        feedbackMessage.textContent = 'Enter a number and click "Make Guess"';
        feedbackArea.className = 'feedback-area';
        guessesList.innerHTML = '<span class="no-guesses">No guesses yet</span>';
        
        guessInput.focus();
        
        console.log('New game started. Target number:', targetNumber);
    }
    
    // Make guess function
    function makeGuess() {
        if (gameWon) return;
        
        const guess = parseInt(guessInput.value);
        
        // Validation
        if (isNaN(guess) || guess < 1 || guess > 100) {
            showFeedback('Please enter a valid number between 1 and 100', 'error');
            return;
        }
        
        // Check if already guessed
        if (guesses.includes(guess)) {
            showFeedback('You already guessed that number!', 'warning');
            return;
        }
        
        // Increment attempts and add to guesses
        attempts++;
        guesses.push(guess);
        attemptsCount.textContent = attempts;
        
        // Update guesses list
        updateGuessesList(guess);
        
        // Check the guess
        if (guess === targetNumber) {
            gameWon = true;
            showFeedback(`Congratulations! You found the number in ${attempts} attempts!`, 'success');
            guessInput.disabled = true;
            guessBtn.disabled = true;
        } else if (guess < targetNumber) {
            showFeedback('Too low! Try a higher number.', 'hint');
        } else {
            showFeedback('Too high! Try a lower number.', 'hint');
        }
        
        guessInput.value = '';
        guessInput.focus();
    }
    
    // Update guesses list display
    function updateGuessesList(latestGuess) {
        if (guesses.length === 1) {
            guessesList.innerHTML = '';
        }
        
        const guessSpan = document.createElement('span');
        guessSpan.className = 'guess-item';
        
        // Color code based on result
        if (latestGuess === targetNumber) {
            guessSpan.classList.add('correct');
        } else if (latestGuess < targetNumber) {
            guessSpan.classList.add('too-low');
        } else {
            guessSpan.classList.add('too-high');
        }
        
        guessSpan.textContent = latestGuess;
        guessesList.appendChild(guessSpan);
    }
    
    // Show feedback message
    function showFeedback(message, type) {
        feedbackMessage.textContent = message;
        feedbackArea.className = 'feedback-area ' + type;
    }
    
    // Event Listeners
    guessBtn.addEventListener('click', makeGuess);
    newGameBtn.addEventListener('click', initGame);
    
    // Allow Enter key to submit guess
    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            makeGuess();
        }
    });
    
    // Start game on load
    initGame();
    
});
