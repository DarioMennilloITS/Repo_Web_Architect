/* ============================================
   Exercise 2: Simple Calculator
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Calculator exercise loaded!');
    
    // DOM Elements
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultDisplay = document.getElementById('resultDisplay');
    const calcMessage = document.getElementById('calcMessage');
    
    // Calculate function
    function calculate() {
        // Get values and convert to numbers
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;
        
        // Validation
        if (isNaN(num1) || isNaN(num2)) {
            showMessage('Please enter valid numbers', 'error');
            resultDisplay.textContent = '-';
            return;
        }
        
        let result;
        
        // Perform operation using switch
        switch(operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    showMessage('Cannot divide by zero!', 'error');
                    resultDisplay.textContent = 'Error';
                    return;
                }
                result = num1 / num2;
                break;
            default:
                showMessage('Invalid operation', 'error');
                return;
        }
        
        // Display result
        // Round to 4 decimal places if needed
        result = Math.round(result * 10000) / 10000;
        resultDisplay.textContent = result;
        showMessage('Calculation complete!', 'success');
    }
    
    // Clear function
    function clear() {
        num1Input.value = '';
        num2Input.value = '';
        operationSelect.value = '+';
        resultDisplay.textContent = '-';
        calcMessage.textContent = '';
        calcMessage.className = 'message';
        num1Input.focus();
    }
    
    // Show message function
    function showMessage(text, type) {
        calcMessage.textContent = text;
        calcMessage.className = 'message ' + type;
        
        setTimeout(() => {
            calcMessage.textContent = '';
            calcMessage.className = 'message';
        }, 3000);
    }
    
    // Event Listeners
    calculateBtn.addEventListener('click', calculate);
    clearBtn.addEventListener('click', clear);
    
    // Allow Enter key to calculate
    [num1Input, num2Input].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculate();
            }
        });
    });
    
});
