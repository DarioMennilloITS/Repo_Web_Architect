const mioForm = document.querySelector("#mioForm");
const validationWarns = document.querySelector(".validationWarns");
const demo = document.querySelector(".demo");

if (mioForm) {
  mioForm.addEventListener("submit", function (event) {
    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const eta = document.querySelector("#eta").value.trim();
    const nazionalita = document.querySelector("#nazionalita").value;

  const validationErrors = [];

  if (nome === "") {
    validationErrors.push("Il nome è obbligatorio");
  }

  if (!validationMail(email)) {
    validationErrors.push("L'email non è valida");
  }

  if (eta === "" || isNaN(eta) || Number(eta) < 0) {
    validationErrors.push("L'età deve essere un numero positivo");
  }

  if (nazionalita === "") {
    validationErrors.push("La nazionalità è obbligatoria");
  }
  if (password.length < 6) {
    validationErrors.push("La password deve essere lunga almeno 6 caratteri");
  }

  if (validationErrors.length > 0) {
    event.preventDefault();
    validationWarns.innerHTML = validationErrors.join("<br>");
    demo.innerHTML = "";
  } else {
    validationWarns.innerHTML = "";
    demo.innerHTML = `Ciao ${nome}, la tua email è ${email}, hai ${eta} anni e sei di nazionalità ${nazionalita}.`;
  }
  });
}

function validationMail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function printErrors(errors) {
    const warningDiv = document.createElement('div');
    warningDiv.classList.add('validationWarns');
    warningDiv.innerHTML = errors.join('<br>');
    return warningDiv;
}