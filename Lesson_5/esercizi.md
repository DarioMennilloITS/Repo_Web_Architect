# Esercizi Lesson 5 - JavaScript Fundamentals

## Lista Esercizi

Questa cartella contiene esercizi pratici per consolidare i concetti JavaScript studiati.
Ogni esercizio e contenuto in una pagina dedicata nella cartella `pages/`.

---

### Esercizio 1: Counter (Contatore)
**File:** `pages/counter.html`  
**Concetti:** DOM manipulation, event listeners, state management

Crea un contatore interattivo con:
- Display del valore corrente
- Pulsante per incrementare (+1)
- Pulsante per decrementare (-1)
- Pulsante per resettare a zero
- Limite massimo di 100 e minimo di -100
- Messaggio di errore quando si superano i limiti

**Skills:** `getElementById`, `addEventListener`, `textContent`, `if` statements

---

### Esercizio 2: Simple Calculator
**File:** `pages/calculator.html`  
**Concetti:** Math operations, form handling, switch statement

Crea una calcolatrice semplice che:
- Accetta due numeri in input
- Permette di selezionare l'operazione (+, -, *, /)
- Mostra il risultato quando si clicca "Calculate"
- Gestisce la divisione per zero con un messaggio di errore
- Resetta i campi con un pulsante "Clear"

**Skills:** `parseFloat`, `switch` statement, form validation, basic math

---

### Esercizio 3: Guess the Number
**File:** `pages/guess-number.html`  
**Concetti:** Random numbers, loops, conditionals, game logic

Crea un gioco "Indovina il numero":
- Il computer genera un numero casuale tra 1 e 100
- L'utente inserisce un tentativo
- Il gioco risponde: "troppo alto", "troppo basso" o "corretto!"
- Conta il numero di tentativi fatti
- Mostra un messaggio quando si indovina
- Pulsante per ricominciare una nuova partita

**Skills:** `Math.random()`, `Math.floor()`, `while` logic, comparison operators

---

### Esercizio 4: Mini To-Do List
**File:** `pages/todo.html`  
**Concetti:** Arrays, DOM creation, dynamic lists, localStorage (optional)

Crea una lista di cose da fare:
- Input per aggiungere nuovi task
- Lista che mostra tutti i task aggiunti
- Pulsante per eliminare un singolo task
- Pulsante per segnare un task come completato (barra sul testo)
- Contatore dei task rimanenti (non completati)

**Skills:** `createElement`, `appendChild`, `classList.toggle`, array methods

---

### Esercizio 5: Color Picker & Preview
**File:** `pages/color-picker.html`  
**Concetti:** Input types, CSS manipulation, event handling

Crea uno strumento per esplorare i colori:
- Tre slider per RGB (Red, Green, Blue) da 0 a 255
- Display del valore RGB attuale (es: rgb(255, 128, 0))
- Display del valore HEX (es: #FF8000)
- Anteprima del colore in una box grande
- Pulsante per generare un colore casuale
- Pulsante per copiare il valore HEX negli appunti

**Skills:** `input` event, `style.backgroundColor`, string concatenation, `navigator.clipboard`

---

## Struttura delle Pagine

Ogni pagina esercizio segue questo template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Esercizio X - Nome</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header><!-- Navigation --></header>
    <main>
        <h2>Titolo Esercizio</h2>
        <p>Breve descrizione</p>
        <!-- Contenuto esercizio -->
    </main>
    <footer></footer>
    <script src="../js/nome-esercizio.js"></script>
</body>
</html>
```

## Navigazione

Tutte le pagine includono la stessa navigation bar con link a:
- Home (index.html)
- Counter
- Calculator
- Guess Number
- To-Do List
- Color Picker
- Lotto Game (gia completato)

---

**Nota per studenti:** Completa gli esercizi in ordine. Ogni esercizio introduce nuovi concetti che saranno utili per il successivo.
