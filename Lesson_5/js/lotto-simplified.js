/* ============================================
   ES - Lotto Simplified (5 numeri, 1 estrazione)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    console.log('Lotto Simplified loaded!');

    const drawBtn = document.getElementById('drawBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultEl = document.getElementById('result');

    function drawNumbers() {
        // Build pool 1-90
        const pool = [];
        for (let i = 1; i <= 90; i++) {
            pool.push(i);
        }

        // Pick 5 unique numbers
        const drawn = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * pool.length);
            const num = pool.splice(randomIndex, 1)[0];
            drawn.push(num);
        }

        // Sort ascending
        drawn.sort(function(a, b) { return a - b; });

        console.log('Drawn numbers:', drawn);
        renderResult(drawn);

        drawBtn.disabled = true;
    }

    function renderResult(numbers) {
        resultEl.innerHTML = '';
        numbers.forEach(function(num) {
            const span = document.createElement('span');
            span.className = 'array-item';
            span.textContent = num;
            resultEl.appendChild(span);
        });
    }

    function resetGame() {
        resultEl.innerHTML = '<span class="array-item">-</span>';
        drawBtn.disabled = false;
        console.log('Game reset');
    }

    drawBtn.addEventListener('click', drawNumbers);
    resetBtn.addEventListener('click', resetGame);

});
