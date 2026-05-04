const demo = document.querySelector('.demo');



const URL = 'https://jsonplaceholder.typicode.com/users'; // endpoint 

fetch(URL)
    .then(data => data.json())
    .then(response => {
        console.log(response);
        utenti = response;
    });

    console.log("I miei utenti sono: ", utenti); // undefined, perchè fetch è asincrono, quindi non aspetta la risposta per eseguire il console.log

// Per risolvere questo problema, possiamo utilizzare async/await:
async function getUsers() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("I miei utenti sono: ", data); // ora abbiamo i dati corretti
}
