/* ============================================
   Lesson 5 - JavaScript
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Lesson 5 script loaded!');
    
    // Example: Button click handler
    const exampleBtn = document.getElementById('exampleBtn');
    
    if (exampleBtn) {
        exampleBtn.addEventListener('click', function() {
            alert('Hello from Lesson 5! 🎉');
        });
    }
    
    // Add your JavaScript code here

let numeri = [1,9,5,2,22,545,32];
let numdaCercare = 4;
let trovato = false;

for (let i = 0; i < numeri.length; i++){
    if (numeri[i] == numdaCercare){
        console.log(`Trovato il numero ${numdaCercare} in posizione ${i}`);
        trovato = true;
        break;
    }
    console.log(numeri[i]);
}
console.log(trovato ? "Ricerca completata" : "Nessuna corrispondenza");
    

for (let i = 0; i < numeri.length; i++){
    if (numeri[i] % 2 == 0){
        console.log(`Il numero ${numeri[i]} e un numero pari`);
        continue;
    }
    console.log(numeri[i]);
}


let msg = "";
let livello = 1;

switch(livello){
    case 1:
        msg = "Benvenuto a primo livello.";
        break;
    case 2:
        msg = "Sei al secondo livello.";
        break;
    case 3:
        msg = "Ultimo livello";
        break;
    default:
        msg = "Non ti trovi in nessun livello";
}
console.log(msg);

const Sceltamod = document.getElementById("SceltaMod");
const btn = document.getElementById("btn");
const demo = document.getElementById("demo");



exampleBtn.addEventListener("click", function(){
    let SceltaModValore = Sceltamod.value;
   
    switch (SceltaModValore){
        case "easymode":
                demo.innerHTML = `Hai scelta la modalita facile : $`
                {SceltaModValore.textContent};
            break;
            case "normalmode":
                demo.innerHTML = `Hai scelta la modalita normale : $`
                {SceltaModValore.textContent};
            break;
            case "hardmode":
                demo.innerHTML = `Hai scelta la modalita dificile: $`
                {SceltaModValore.textContent};
            break;
            default:
                demo.innerHTML = "Caro utente, non hay ancora scelto nulla"


    }


})


});
