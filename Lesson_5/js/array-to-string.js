/* ============================================
   ES14 - Array to String
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const separatore = document.getElementById('separatore');
    const unisciBtn = document.getElementById('unisciBtn');
    const unisciForBtn = document.getElementById('unisciForBtn');
    const unisciReduceBtn = document.getElementById('unisciReduceBtn');
    const risultatoOutput = document.getElementById('risultatoOutput');
    
    const array = ["Ciao", "mondo", "da", "JavaScript"];
    
    function unisciConJoin() {
        const sep = separatore.value;
        const risultato = array.join(sep);
        risultatoOutput.innerHTML = `<p><strong>Metodo:</strong> join()</p><p>${risultato}</p>`;
    }
    
    function unisciConFor() {
        const sep = separatore.value;
        let risultato = '';
        
        for (let i = 0; i < array.length; i++) {
            risultato += array[i];
            if (i < array.length - 1) {
                risultato += sep;
            }
        }
        
        risultatoOutput.innerHTML = `<p><strong>Metodo:</strong> for loop</p><p>${risultato}</p>`;
    }
    
    function unisciConReduce() {
        const sep = separatore.value;
        const risultato = array.reduce((acc, curr, index) => {
            return index === 0 ? curr : acc + sep + curr;
        }, '');
        
        risultatoOutput.innerHTML = `<p><strong>Metodo:</strong> reduce()</p><p>${risultato}</p>`;
    }
    
    unisciBtn.addEventListener('click', unisciConJoin);
    unisciForBtn.addEventListener('click', unisciConFor);
    unisciReduceBtn.addEventListener('click', unisciConReduce);
    
});
