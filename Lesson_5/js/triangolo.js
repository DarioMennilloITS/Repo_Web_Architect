/* ============================================
   ES1 - Perimetro e Area Triangolo
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const calcolaBtn = document.getElementById('calcolaBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    function calcola() {
        // Lati del triangolo
        const a = 5;
        const b = 6;
        const c = 7;
        
        // Calcolo perimetro
        const perimetro = a + b + c;
        
        // Calcolo area con formula di Erone
        const semiperimetro = perimetro / 2;
        const area = Math.sqrt(semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c));
        
        risultatoOutput.innerHTML = `
            <p><strong>Lati:</strong> ${a}, ${b}, ${c}</p>
            <p><strong>Perimetro:</strong> ${perimetro}</p>
            <p><strong>Area:</strong> ${area.toFixed(2)}</p>
        `;
    }
    
    calcolaBtn.addEventListener('click', calcola);
    
});
