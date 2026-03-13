console.log("HELLO, World !!");
console.log("Ciao a tutti, benvenuti al corso di WSA");

// alert("Questo è un alert"); 

//Questo è un commento riga singola

/**
 * Questo è un commento multiriga
 * Posso scrivere nelle righe dopo
 * ok ?  
 */

// ========= VARIABILI ===========
//regole di denominazione: no start con numeri, no -, sì camelCase

//istanzio  e assegno un valore
let miaVariabile = "Web solution Architect";

//Dichiaro
let tuaVariabile;
//Assegno un valore
tuaVariabile = "ITS, piazza dei mestieri";

let miaEta = 36;
console.log("Oggi ho " + miaEta + " anni");

miaEta = 37;
console.log("L'anno prossimo avrò " + miaEta + " anni");

miaEta = 26;
console.log("10 anni fa avevo " + miaEta + " anni");


//Esempio di uso di variabili. Queste stesse cambiano nel corso del codice
let username = prompt("Qual è il tuo username ?");
document.write("<h2> Benvenuto nella nostra pagina " + username + " </h2>");
console.log("Benvenuto nella nostra pagina, " + username);


//Concatenazione di stringhe
let mioNome = "Dario";
let mioCognome = "Mennillo";
miaEta = 36;
let corso = "WSA";
let sede = "Piazza dei mestieri";
let studenti = 32;

let benvenuto = "Ciao, sono " + mioNome + " " + mioCognome + " ho " + miaEta + " anni";
console.log(benvenuto);

// backtick --> ALT + 96
let benvenuto2 = `Ciao, sono ${mioNome} ${mioCognome}, ho ${miaEta} anni e insegno presso ${sede} il corso di ${corso}. In totale ci sono ${studenti} studenti`;
console.log(benvenuto2);

let presentazione = `Ciao, benvenuti in ${sede}`;
console.log(presentazione);