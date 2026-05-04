function saluta(nome) {
    alert(`Ciao ${nome}!`);
}


const btn1 = document.getElementById("btn1");
btn1.onclick = function() {
    saluta('Mondo');
};

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function() {
    const nome = prompt('Inserisci il tuo nome:');
    saluta(nome);
});


btn2.addEventListener('click', function(event) {
    console.log(event);
});

const contenitore = document.querySelector('.container');
contenitore.addEventListener('dblclick', function(event) {
    console.log('Stai clickando in posizione: ', event.clientX, event.clientY);
});

contenitore.addEventListener('mousemove', function(event) {
    let a = Math.ceil(event.clientX / window.innerWidth * 255);
    contenitore.setAttribute('style', `background-color: rgb(${event.clientX % 255}, ${event.clientY % 255}, ${(event.clientX + event.clientY) % 255})`);
});
