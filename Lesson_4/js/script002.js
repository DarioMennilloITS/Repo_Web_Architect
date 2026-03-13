//TIPI DI DATO - ATT: Javascript è un linguaggio di programmazione debolmente tipizzato. I tipi esistono ma semplicemente non li dichiariamo. Vengono automaticamente determinati dal browser

//Number
let numero = 5;
let numeroVirg = 9.2;

//String
let parola = "Ciao";
let stringa = new String("Questa è una string");

//Boolean
let presenza = true;
let assenza = false;

//Per quanto sia possibile non è una buona cosa saltare da un tipo all'altro
numero = "5";
console.log(numero);

//Esempio sulla tipizzazione debole
let num1 = "10"; //String
let num2 = "3"; //String


let somma = Number(num1) + Number(num2); //Qui ho un problema a causa della duplice natura dell'operatore + perché + è un concatenatore di stringhe. Soluzione: cast del dato (forzare una variabile ad essere di un determinato tipo)
//Tecnicamente il cast andrebbe fatto anche per le operazioni sotto ma lascio che il browser interpreti per me
let diff = num1 - num2;
let prod = num1 * num2;
let quoz = num1 / num2;

console.log("=== OPERAZIONI ===");
console.log(`Somma: ${somma}`);
console.log(`diff: ${diff}`);
console.log(`prod: ${prod}`);
console.log(`quoz: ${quoz}`);

//ESEMPIO : raccogli due numeri con il prompt e calcola il valore delle 4 operazioni
//ATT: tutto ciò che raccolgo da un prompt o un campo input sono sempre e solo stringhe

let num3 = Number(prompt("Inserisci il primo numero"));
console.log(typeof num3);

let num4 = Number(prompt("Inserisci il secondo numero"));
console.log(typeof num4);


let somma2 = num3 + num4;
let prod2 = num3 * num4;
let diff2 = num3 - num4;
let quoz2 = num3 / num4;

console.log("=== OPERAZIONI DA PROMPT ===");

console.log(`Somma: ${somma2}`);
console.log(`diff: ${diff2}`);
console.log(`prod: ${prod2}`);
console.log(`quoz: ${quoz2}`);

//voglio "stampare" numeri e risultati nella pagina
//1. raccoglio gli elementi della pagina HTML attraverso il loro id
let numeri = document.getElementById("numeri");
console.log(numeri);
console.log(typeof numeri);
//la prop innerHTML mi permette di modificare il contenuto di un oggetto HTML
numeri.innerHTML = `Hai scelto i seguenti numeri ${num3} e ${num4}`;

//recupero ul
let operazioni = document.getElementById("operazioni");
operazioni.innerHTML = `<li> Somma: ${somma2} </li>`;
operazioni.innerHTML += `<li> Prodotto: ${prod2} </li>`;  
operazioni.innerHTML += `<li> Differenza: ${diff2} </li>`;  
operazioni.innerHTML += `<li> Quoziente: ${quoz2} </li>`;  

let numProva = 10;
// numProva = numProva + 5;
numProva += 5;
numProva *= 3;
numProva /= 7;
numProva -= 10

console.log(numProva);
