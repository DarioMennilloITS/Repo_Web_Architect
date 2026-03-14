/* ============================================
   Exercise 5: Color Picker & Preview
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Color Picker exercise loaded!');
    
    // DOM Elements
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const colorPreview = document.getElementById('colorPreview');
    const rgbValue = document.getElementById('rgbValue');
    const hexValue = document.getElementById('hexValue');
    const randomColorBtn = document.getElementById('randomColorBtn');
    const copyHexBtn = document.getElementById('copyHexBtn');
    const copyMessage = document.getElementById('copyMessage');
    
    // Get current RGB values
    function getRGBValues() {
        return {
            r: parseInt(redSlider.value),
            g: parseInt(greenSlider.value),
            b: parseInt(blueSlider.value)
        };
    }
    
    // Convert RGB to HEX
    function rgbToHex(r, g, b) {
        const toHex = (n) => {
            const hex = n.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return '#' + toHex(r) + toHex(g) + toHex(b).toUpperCase();
    }
    
    // Update color display
    function updateColor() {
        const { r, g, b } = getRGBValues();
        
        // Update value labels
        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;
        
        // Create RGB string
        const rgbString = `rgb(${r}, ${g}, ${b})`;
        const hexString = rgbToHex(r, g, b);
        
        // Update preview
        colorPreview.style.backgroundColor = rgbString;
        
        // Update text displays
        rgbValue.textContent = rgbString;
        hexValue.textContent = hexString;
    }
    
    // Generate random color
    function randomColor() {
        redSlider.value = Math.floor(Math.random() * 256);
        greenSlider.value = Math.floor(Math.random() * 256);
        blueSlider.value = Math.floor(Math.random() * 256);
        updateColor();
        showCopyMessage('Random color generated!', 'success');
    }
    
    // Copy HEX to clipboard
    async function copyHex() {
        const hex = hexValue.textContent;
        
        try {
            await navigator.clipboard.writeText(hex);
            showCopyMessage(`Copied ${hex} to clipboard!`, 'success');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = hex;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showCopyMessage(`Copied ${hex} to clipboard!`, 'success');
        }
    }
    
    // Show message
    function showCopyMessage(text, type) {
        copyMessage.textContent = text;
        copyMessage.className = 'message ' + type;
        
        setTimeout(() => {
            copyMessage.textContent = '';
            copyMessage.className = 'message';
        }, 2000);
    }
    
    // Event Listeners
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);
    randomColorBtn.addEventListener('click', randomColor);
    copyHexBtn.addEventListener('click', copyHex);
    
    // Initialize
    updateColor();
    
});
