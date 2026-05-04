const testo = document.getElementById('testo');
const btn = document.getElementById('btn');
const demo = document.getElementById('demo');
const helper = document.getElementById('helper');

function stampaTesto() {
    demo.innerText = testo.value;
}

testo.addEventListener('keydown', function(event) {
  console.log(event);
  if (event.key === 'Enter') {
   btn.click();}
});

  btn.addEventListener('click', stampaTesto);


  testo.addEventListener('focus', function() {
    helper.innerHTML = 'Scrivi qualcosa e premi invio!';
    });

    testo.addEventListener('blur', function() {
    if(testo.value.length < 10) {
      helper.innerHTML = 'Il testo deve contenere almeno 10 caratteri!';
      testo.setAttribute('class', 'bdRed');
    } else {
      helper.innerHTML = '';
      testo.classList.remove('bdRed');
    }
    });

