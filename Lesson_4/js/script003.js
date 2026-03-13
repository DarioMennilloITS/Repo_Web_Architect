//Raccolgo l'elemento HTML
let nomeCogn = document.getElementById("nomeCogn");

//Raccolgo il prompt 
let nomeUser = prompt("Inserisci il nome");
let cognomeUser = prompt("Inserisci il cognome")
//Stampo il valore del prompt nell'elemento
nomeCogn.innerHTML = nomeUser +  " " + cognomeUser;

