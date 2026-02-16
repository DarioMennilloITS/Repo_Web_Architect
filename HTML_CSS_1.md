# HTML — Scrivere pagine web

---

## Cos'è l'HTML?

- HTML è il linguaggio di markup standard per la creazione di pagine Web.
- HTML sta per **Hyper Text Markup Language**
- HTML descrive la struttura delle pagine Web usando il markup
- Gli elementi HTML sono gli elementi costitutivi delle pagine HTML
- Gli elementi HTML sono rappresentati da tag `<nometag>`
- I tag HTML etichettano parti di contenuto come "heading", "paragraph", "table" e così via
- I browser non visualizzano i tag HTML, ma li usano per presentare il contenuto della pagina

---

## Tag HTML

I tag HTML sono nomi di elementi circondati da parentesi angolari:

```html
<p> contenuto... </p>
```

- Il primo tag in una coppia è il **tag di apertura**, il secondo è il **tag di chiusura**
- Il tag di chiusura è scritto come il tag di inizio, ma con una forward slash `/` inserita prima del nome del tag

---

## Esempio di documento HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>Titolo della pagina</title>
</head>
<body>
  <h1>Titolo del paragrafo</h1>
  <p>Testo del paragrafo.</p>
</body>
</html>
```

| Tag | Descrizione |
|-----|-------------|
| `<!DOCTYPE html>` | Dichiarazione del tipo di documento (HTML5) |
| `<html>` | Elemento principale di una pagina HTML |
| `<head>` | Contiene meta informazioni sul documento |
| `<title>` | Specifica un titolo per il documento |
| `<body>` | Contiene il contenuto della pagina visibile |
| `<h1>` | Definisce un titolo di primo livello |
| `<p>` | Definisce un paragrafo |

---

## Struttura di una pagina HTML

```html
<html>
  <head>
    <title>Titolo della pagina</title>  <!-- intestazione della pagina -->
  </head>
  <body>
    <h1>Titolo del paragrafo</h1>
    <p>Testo del paragrafo.</p>         <!-- area visibile nel browser -->
  </body>
</html>
```

---

## Visualizzazione del documento: il browser

Lo scopo di un browser è leggere documenti HTML e visualizzarli. Il browser non visualizza i tag HTML, ma li utilizza per determinare come visualizzare il documento.

---

## `<!DOCTYPE>`

La dichiarazione `<!DOCTYPE>` rappresenta il tipo di documento e aiuta i browser a interpretare e quindi visualizzare correttamente le pagine Web. Deve apparire solo una volta, nella parte superiore della pagina (prima di qualsiasi tag HTML).

La dichiarazione `<!DOCTYPE>` per HTML5 è:

```html
<!DOCTYPE html>
```

### Versioni HTML

| Versione | Anno |
|----------|------|
| HTML | 1991 |
| HTML 2.0 | 1995 |
| HTML 3.2 | 1997 |
| HTML 4.01 (introduzione fogli di stile) | 1999 |
| XHTML 1.0 | 2000 |
| HTML5 | 2014 |

---

| Elemento | Descrizione |
|----------|-------------|
| HTML | Il tipo di linguaggio utilizzato è l'HTML |
| PUBLIC | Il documento è pubblico |
| W3C | Il documento fa riferimento alle specifiche rilasciate dal W3C |
| `-` | Le specifiche non sono registrate all'ISO. Se lo fossero, ci sarebbe un `+` |
| DTD HTML 4.01 Transitional | Fa riferimento a una DTD; la versione di HTML supportata è la 4.01 "transitional" |
| EN | La lingua con cui è scritta la DTD è l'inglese |

La dichiarazione `<!DOCTYPE html>` dell'HTML5 non fa riferimento ad alcun DTD.

---

## `<head>`

L'elemento `<head>` è un contenitore per i metadati. I metadati HTML sono dati relativi al documento HTML e non vengono visualizzati. È posizionato tra il tag `<html>` e il tag `<body>`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>La mia pagina web</title>
  <meta charset="UTF-8">
</head>
<body>
  ...
```

I metadati generalmente definiscono: il titolo del documento, il set di caratteri, gli stili, i collegamenti, gli script e altre meta informazioni.

---

## Strumenti

- Le pagine Web possono essere create con un semplice editor di testo come Notepad (PC) o TextEdit (Mac).
- Per la scrittura di codice HTML si raccomandano editor professionali come **VISUAL Studio Code** **Sublime Text**, **Atom** …
- **Strumenti di sviluppo del browser**
- Disegnare wireframe: [Pencil](https://pencil.evolus.vn/), [Wireframe.cc](https://wireframe.cc/)
- Utilità: [caniuse.com](https://caniuse.com/), [validator.w3.org](https://validator.w3.org/)

---

## Elementi HTML

Un elemento HTML di solito consiste in un tag di inizio e un tag di fine, con il contenuto inserito all'interno:

```html
<tagname> contenuto... </tagname>
```

L'elemento HTML comprende tutto, dal tag di inizio al tag di fine:

```html
<p> Il mio primo paragrafo. </p>
```

### Elementi vuoti

Gli elementi HTML senza contenuto sono chiamati **elementi vuoti**. `<br>` è un elemento vuoto senza tag di chiusura (`<br>` definisce un'interruzione di riga, `<hr>` definisce una riga, `<img>` inserisce un'immagine…).

Gli elementi vuoti possono essere "chiusi" con: `<br />`. HTML5 non lo richiede obbligatoriamente.

### Elementi HTML nidificati

Gli elementi HTML possono essere nidificati (gli elementi possono contenere elementi). Tutti i documenti HTML sono costituiti da elementi HTML nidificati.

---

## Elementi Block

Un elemento a livello di blocco inizia sempre su una nuova riga e occupa l'intera larghezza disponibile.

**Elementi a livello di blocco in HTML:**

| | | | |
|--|--|--|--|
| `<address>` | `<dt>` | `<hr>` | `<pre>` |
| `<article>` | `<fieldset>` | `<li>` | `<section>` |
| `<aside>` | `<figcaption>` | `<main>` | `<table>` |
| `<blockquote>` | `<figure>` | `<nav>` | `<tfoot>` |
| `<canvas>` | `<footer>` | `<noscript>` | `<ul>` |
| `<dd>` | `<form>` | `<ol>` | `<video>` |
| `<div>` | `<h1>`–`<h6>` | `<o>` | |
| `<dl>` | `<header>` | `<p>` | |

---

## Elementi Inline

Gli elementi inline si dispongono uno di fianco all'altro e occupano solo la larghezza necessaria per mostrare il contenuto.

**Elementi in linea in HTML:**

| | | | |
|--|--|--|--|
| `<a>` | `<cite>` | `<label>` | `<span>` |
| `<abbr>` | `<code>` | `<map>` | `<strong>` |
| `<acronym>` | `<dfn>` | `<object>` | `<sub>` |
| `<b>` | `<em>` | `<q>` | `<sup>` |
| `<bdo>` | `<i>` | `<samp>` | `<textarea>` |
| `<big>` | `<img>` | `<script>` | `<time>` |
| `<br>` | `<input>` | `<select>` | `<tt>` |
| `<button>` | `<kbd>` | `<small>` | `<var>` |

> La maggior parte dei browser visualizza l'elemento `<img>` come elemento `inline-block`.

---

## Attributi HTML

- Tutti gli elementi HTML possono avere attributi
- Gli attributi forniscono informazioni aggiuntive su un elemento
- Gli attributi sono sempre specificati nel **tag di inizio**
- Gli attributi di solito vengono rappresentati da coppie nome/valore tipo: `nome="valore"`

---

## Attributo `lang`

La lingua viene dichiarata con l'attributo `lang` dichiarato all'interno del tag `<html>`. Dichiarare una lingua è importante per le applicazioni di accessibilità (screen reader) e per i motori di ricerca:

```html
<!DOCTYPE html>
<html lang="en-US">
<body>
...
</body>
</html>
```

Una pagina italiana avrà:
```html
<html lang="it">
```

---

## Attributi comuni

### `href`
```html
<a href="https://www.miosito.it">Questo è un collegamento al mio sito</a>
```

### `src`
```html
<img src="torino.jpg">
```

### `width`, `height`
```html
<img src="torino.jpg" width="800" height="400">
```

### `alt`
```html
<img src="torino.jpg" alt="foto panoramica della città di Torino che ritrae piazza Vittorio Veneto vista dal monte dei Cappuccini">
```

### `title`
```html
<p title="Suggerimento…">Il mio paragrafo</p>
<a href="https://www.miosito.it" title="Visita il mio sito">Questo è un collegamento al mio sito</a>
```

### `style`
```html
<p style="color:red">Questo paragrafo è rosso!</p>
```

---

## Uso delle virgolette per i valori dell'attributo

HTML5 non richiede virgolette attorno ai valori degli attributi, ma è necessario usarle quando il valore contiene spazi:

```html
<p title=informazioni sul corso>  <!-- ERRATO -->
```

**Virgolette singole o doppie?** Sono entrambe accettate:

```html
<p title='Camillo Benso, "Conte di Cavour" '>
<p title="Camillo Benso, 'Conte di Cavour' ">
```

---

## Commenti HTML

```html
<!-- Qui puoi inserire i tuoi commenti -->
```

Il punto esclamativo `!` va inserito solo nel tag di apertura. I commenti non vengono visualizzati dal browser.

**Commenti per il debug:**
```html
<!--
<img src="torino.jpg" alt="Foto panoramica di Torino">
-->
```

---

## Elementi HTML — Heading (intestazioni)

I titoli sono definiti con i tag da `<h1>` a `<h6>`:

```html
<h1>Titolo 1</h1>
<h2>Titolo 2</h2>
<h3>Titolo 3</h3>
<h4>Titolo 4</h4>
<h5>Titolo 5</h5>
<h6>Titolo 6</h6>
```

### Le intestazioni sono importanti

I motori di ricerca utilizzano i titoli per indicizzare la struttura e il contenuto delle pagine web. `<h1>` dovrebbe essere usato per le intestazioni principali, seguito da `<h2>`, poi `<h3>` e così via.

> Nota: utilizzare le intestazioni HTML solo per i titoli. Non usarle per rendere il testo più grande o in grassetto.

**Dimensione del carattere:**
```html
<h1 style="font-size:36px;">Titolo 1</h1>
```

---

## `<p>`

Con HTML non puoi modificare l'output aggiungendo spazi extra o linee extra nel codice. Il browser rimuoverà spazi e linee aggiuntive quando viene visualizzata la pagina.

---

## `<div>`

L'elemento `<div>` (HTML Content Division) è spesso usato come contenitore per altri elementi HTML. Non ha attributi obbligatori, ma `style`, `class` e `id` vengono usati frequentemente.

```html
<div style="background-color:black;color:white;padding:20px;">
  <h2>Roma</h2>
  <p>Roma è la capitale d'Italia...</p>
</div>
```

---

## `<span>`

L'elemento `<span>` non ha attributi obbligatori, ma `style`, `class` e `id` vengono usati frequentemente. Se utilizzato insieme ai CSS, può essere usato per modificare parti del testo:

```html
<h1>Un titolo <span style="color:red">importante</span></h1>
```

O per contenere un'immagine/icona:
```html
<p>
  <span>
    <img src="assets/img/smile.png" alt="Faccia sorridente" style="width:42px;height:42px;">
  </span> Lorem ipsum dolor sit...
</p>
```

---

## `<hr>` — Riga orizzontale

Il tag `<hr>` definisce un'interruzione tematica e viene spesso visualizzata come una riga orizzontale.

```html
<h1>Titolo 1</h1>
<p>Testo del paragrafo 1.</p>
<hr>
<h2>Titolo 2</h2>
<p>Testo del paragrafo 2.</p>
<hr>
```

---

## `<pre>`

L'elemento `<pre>` definisce il testo pre-formattato. Il testo viene visualizzato in un font a larghezza fissa (Courier) e conserva spazi e interruzioni di riga:

```html
<pre>
Se non avessi visto il sole
avrei sopportato l'ombra
ma la luce ha reso il mio deserto
ancora più selvaggio
</pre>
```

---

## Interruzioni di riga `<br>`

```html
<p>Questo testo<br>è un paragrafo<br>con interruzioni di riga.</p>
```

Il tag `<br>` è un tag vuoto, senza tag di fine.

---

## Elementi HTML di formattazione del testo

| Elemento | Descrizione |
|----------|-------------|
| `<b>` | Testo in grassetto |
| `<strong>` | Testo importante (con significato semantico) |
| `<i>` | Testo in corsivo |
| `<em>` | Testo enfatizzato (con significato semantico) |
| `<mark>` | Testo contrassegnato (evidenziato) |
| `<small>` | Testo piccolo |
| `<del>` | Testo eliminato |
| `<ins>` | Testo inserito |
| `<sub>` | Pedice |
| `<sup>` | Apice |

> I browser visualizzano `<strong>` come `<b>`, e `<em>` come `<i>`. La differenza è nel significato semantico.

---

## Elementi di formattazione — dettaglio

### `<small>`
```html
<p>Testo normale <small>testo piccolo</small></p>
```

### `<mark>`
```html
<p>Testo normale <mark>testo evidenziato</mark></p>
```

### `<del>`
```html
<p>La mia squadra preferita è <del>la Juve</del> il Toro</p>
```

### `<ins>`
```html
<p>Il mio <ins>colore</ins> preferito è il verde.</p>
```

### `<sub>`
```html
<p>Testo in <sub>pedice</sub></p>
```

### `<sup>`
```html
<p>Testo in <sup>apice</sup></p>
```

---

## Citazioni

### `<q>` — Brevi citazioni
```html
<p>Apple opera al 100% di energie rinnovabili: <q>Così proteggiamo il mondo dai cambiamenti climatici.</q></p>
```

### `<blockquote>` — Citazioni lunghe
```html
<p>Questa è una citazione dal sito:</p>
<blockquote cite="https://www.macitynet.it/...">
Apple ha pubblicato il nuovo Environmental Responsibility Report...
</blockquote>
```

---

## `<abbr>` — Abbreviazioni
```html
<p>L' <abbr title="Organizzazione delle Nazioni Unite">ONU</abbr> è stata fondata nel 1945.</p>
```

## `<address>` — Informazioni di contatto
```html
<address>
Scritto da P.R.<br>
visita il mio sito: ilmiosito.it<br>
Via Torino 57, Roma<br>
ITA
</address>
```

## `<cite>` — Titolo del lavoro
```html
<p><cite>L'urlo</cite> di Edvard Munch. Dipinto nel 1893.</p>
```

## `<bdo>` — Direzione della scrittura (RTL)
```html
<p>Vediamo un esempio: <bdo dir="rtl">Questo testo verrà scritta da destra verso sinistra</bdo></p>
```

---

## Formattazione del codice

### `<kbd>` — Input da tastiera
```html
<p>Salva il documento premendo contemporaneamente <kbd>Ctrl + S</kbd></p>
```

### `<samp>` — Output del programma
```html
<p>Se inserisci un valore errato, l'applicazione risponderà: <samp>Error!</samp></p>
```

### `<code>`
```html
<p>
  <code>
  x = 5;
  y = 6;
  z = x + y;
  </code>
</p>
```

> Nota: `<code>` non conserva spazi bianchi extra e interruzioni di riga. Per farlo, inserisci `<code>` all'interno di un `<pre>`.

### `<var>` — Variabili
```html
<p>Equazione di Einstein: <var>E</var> = <var>mc</var><sup>2</sup>.</p>
```

---

## Attributo `style`

L'attributo `style` ha la seguente sintassi: `<tagname style="property:value;">`

```html
<p style="color:red;">Paragrafo rosso</p>
<p style="color:blue;">Paragrafo blue</p>
<p style="font-size:24px;">Paragrafo molto grande</p>
```

### Principali proprietà CSS inline

**`font-family`**
```html
<h1 style="font-family:'Times New Roman',verdana;">Titolo</h1>
<p style="font-family:courier;">Paragrafo in courier.</p>
```

**`font-size`**
```html
<h1 style="font-size:300%;">Titolo 1 con testo molto grande</h1>
<p style="font-size:160%;">Paragrafo con testo grande.</p>
```

**`text-align`**
```html
<h1 style="text-align:center;">Titolo centrato</h1>
<p style="text-align:right;">Paragrafo allineato a destra.</p>
```

**`background-color`**
```html
<body style="background-color: lightgray;">
```

**`color`**
```html
<h1 style="color:blue;">Titolo 1 blue</h1>
<p style="color:red;">Paragrafo rosso.</p>
```

---

## Colori HTML

I colori HTML vengono specificati utilizzando nomi di colori predefiniti o valori RGB, HEX, HSL, RGBA, HSLA. HTML supporta 140 nomi di colori standard.

Elenco completo: [https://www.w3schools.com/colors/colors_names.asp](https://www.w3schools.com/colors/colors_names.asp)

### Valore RGB
```
rgb(rosso, verde, blu)
```
Ogni parametro definisce l'intensità tra 0 e 255. Esempi:
- `rgb(255, 0, 0)` = rosso
- `rgb(0, 0, 0)` = nero
- `rgb(255, 255, 255)` = bianco

### Valore esadecimale
```
#rrggbb
```
- `#ff0000` = rosso
- `#0000ff` = blu
- Scale di grigi: `#000000`, `#3c3c3c`, `#787878`, `#b4b4b4`, `#f0f0f0`, `#ffffff`

### Valore HSL
```
hsl(hue, saturation, lightness)
```
- La tonalità è in gradi da 0 a 360 (0=rosso, 120=verde, 240=blu)
- La saturazione è percentuale (0% = grigio, 100% = colore pieno)
- La luminosità è percentuale (0% = nero, 50% = normale, 100% = bianco)

Esempi:
- `hsl(0, 100%, 50%)` = rosso
- `hsl(240, 100%, 50%)` = blu
- `hsl(147, 50%, 47%)` = verde

### Saturazione
- 100% = colore puro
- 50% = grigio al 50%, ma il colore è ancora visibile
- 0% = completamente grigio

### Luminosità
- 0% = nero
- 50% = normale (né buio né chiaro)
- 100% = bianco

### Valore RGBA
```
rgba(rosso, verde, blu, alfa)
```
Il parametro `alfa` va da `0.0` (trasparente) a `1.0` (opaco).

### Valore HSLA
```
hsla(hue, saturation, lightness, alfa)
```

---

## Link HTML `<a>`

I collegamenti HTML sono collegamenti ipertestuali. Sintassi:

```html
<a href="url">testo del collegamento</a>
<a href="https://www.miosito.com/blog/">Visita il mio blog</a>
```

### Link locali (URL relativo)
```html
<a href="galleria.html">Galleria foto</a>
<a href="foto/galleria.html">Galleria foto</a>
```

### Colori link HTML (default)
- Link non visitato: sottolineato e blu
- Link visitato: sottolineato e viola
- Link attivo (al click): sottolineato e rosso

### Attributo `target`

| Valore | Descrizione |
|--------|-------------|
| `_blank` | Apre in una nuova finestra o scheda |
| `_self` | Apre nella stessa finestra/scheda (default) |
| `_parent` | Apre nel frame principale |
| `_top` | Apre nel corpo completo della finestra |
| nome frame | Apre in un frame con quel nome |

```html
<a href="https://www.miosito.com/blog/" target="_blank">Visita il mio blog</a>
```

### `title` nei link
```html
<a href="https://www.miosito.it/blog/" title="Questo è un collegamento al mio blog">Visita il mio blog</a>
```

---

## Link HTML — Segnalibri (ancora)

Crea un segnalibro assegnando un `id` al titolo della sezione:
```html
<h2 id="capitolo3">Capitolo 3</h2>
```

Collega il segnalibro nella stessa pagina:
```html
<a href="#capitolo3">Vai al capitolo 3</a>
```

Collega il segnalibro da un'altra pagina:
```html
<a href="capitoli3_4.html#capitolo3">Vai al capitolo 3 in un'altra sezione</a>
```

---

## Sintassi di immagini HTML

```html
<img src="url">
<img src="mazzo.jpg" alt="Mazzo di fiori">
```

### Dimensione immagine
```html
<img src="mazzo.jpg" alt="Mazzo di fiori" style="width:500px;height:600px;">
<!-- oppure: -->
<img src="mazzo.jpg" alt="Mazzo di fiori" width="500" height="600">
```

> Nota: specificare sempre larghezza e altezza per evitare sfarfallamenti durante il caricamento.

### Immagini in un'altra cartella
```html
<img src="assets/img/mazzo.jpg" alt="Mazzo di fiori" style="width:600px;height:400px;">
```

### Immagini su un altro server
```html
<img src="http://www.torinoggi.it/typo3temp/pics/o_ef08622de6.png" alt="bicicletta">
```

### Immagini animate (GIF)
```html
<img src="assets/img/gallina.gif" alt="Gallina che esplode" style="width:200px;height:200px;">
```

### Immagine come collegamento
```html
<a href="breeding.html" title="vai alla pagina dedicata all'allevamento delle galline">
  <img src="assets/img/gallina.gif" alt="gallina che esplode" style="width:200px;height:200px;border:0;">
</a>
```

### Posizionamento immagine
```html
<!-- immagine a destra del testo -->
<p><img src="assets/img/smile.png" alt="Faccia sorridente" style="float:right;width:42px;height:42px;">Lorem ipsum…</p>
<!-- immagine a sinistra del testo -->
<p><img src="assets/img/smile.png" alt="Faccia sorridente" style="float:left;width:42px;height:42px;">Lorem ipsum…</p>
```

### Immagine di sfondo
```html
<body style="background-image: url('assets/img/sfondo.jpg')">
```

Per un paragrafo:
```html
<p style="background-image: url('http://...')">...</p>
```

Più immagini di sfondo:
```html
<body style="background-image: url(assets/img/gallina.gif), url(assets/img/mazzo.jpg);">
```

---

## Mappe di immagini `<map>`

```html
<img src="responsive.png" usemap="#image-map">
<map name="image-map">
  <area target="_self" alt="vai al sito della apple" title="vai al sito della apple"
    href="https://www.apple.com" coords="14,104,40,154" shape="rect">
  <area target="_self" alt="vai al sito della microsoft" title="vai al sito della microsoft"
    href="https://www.microsoft.com" coords="196,68,258,155" shape="rect">
  <area target="_self" alt="vai al sito di google" title="vai al sito di google"
    href="https://www.google.com"
    coords="36,11,210,11,211,53,182,55,179,106,48,108,47,87,36,86" shape="poly">
</map>
```

- L'attributo `name` di `<map>` è associato all'attributo `usemap` di `<img>`
- Il tag `<area>` definisce le aree selezionabili
- `shape` definisce il tipo di area: `rect`, `circle`, `poly`
- `coords` specifica le coordinate

### Coordinate per `shape`

| Valore | Descrizione |
|--------|-------------|
| `x1,y1,x2,y2` | Angolo superiore sinistro → inferiore destro (rect) |
| `x,y,radius` | Centro e raggio (circle) |
| `x1,y1,x2,y2,...,xn,yn` | Punti del poligono (poly) |

Strumento online: [https://www.image-map.net/](https://www.image-map.net/)

---

## `<table>`

Per impostazione predefinita, le intestazioni delle tabelle sono in grassetto e centrate. Gli elementi `<thead>`, `<tfoot>` e `<tbody>` specificano diverse sezioni di una tabella.

> Il tag `<tfoot>` deve essere inserito dopo `<caption>`, `<colgroup>` e `<thead>`, e prima di `<tbody>` e `<tr>`.

### Bordo della tabella
```css
table, th, td {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

### Bordi compressi
```css
table { border-collapse: collapse; }
th, td {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

### Padding delle celle
```css
th, td { padding: 15px; }
```

### Intestazioni allineate a sinistra
```css
th { text-align: left; }
```

### Spaziatura dei bordi
```css
table { border-spacing: 5px; }
```

### Colspan — celle su più colonne
```html
<table>
  <tr>
    <th>Nome</th>
    <th colspan="2">Telefono</th>
  </tr>
  <tr>
    <td>Paolo Rossi</td>
    <td>0114553456</td>
    <td>3470255567</td>
  </tr>
</table>
```

### Rowspan — celle su più righe
```html
<table>
  <tr>
    <th>Nome:</th><td>Paolo Rossi</td>
  </tr>
  <tr>
    <th rowspan="2">Telefono:</th><td>0114553456</td>
  </tr>
  <tr>
    <td>0114553457</td>
  </tr>
</table>
```

### `<colgroup>`
```html
<table>
  <colgroup>
    <col span="2" style="background-color:lightgray">
    <col span="2" style="background-color:lightblue">
  </colgroup>
  <tr>
    <th>Nome</th><th>Cognome</th><th>Età</th><th>Genere</th>
  </tr>
  ...
</table>
```

Proprietà usabili con `<colgroup>`: `border`, `background`, `width`, `visibility: collapse`

---

## `<form>`

```html
<form>
  …elementi del form
</form>
```

Un form HTML contiene elementi di immissione dati. Non si possono annidare più form.

---

## `<input>`

| Tipo di input | Descrizione |
|---------------|-------------|
| `<input type="text">` | Campo di testo su una riga |
| `<input type="password">` | Campo password |
| `<input type="submit">` | Pulsante di invio |
| `<input type="button">` | Pulsante generico |
| `<input type="reset">` | Pulsante di ripristino |
| `<input type="radio">` | Pulsante di opzione (selezione singola) |
| `<input type="checkbox">` | Casella di controllo (selezione multipla) |

### input type text
```html
<form>
  Nome:<br>
  <input type="text" name="firstname"><br>
  Cognome:<br>
  <input type="text" name="lastname">
</form>
```

### input type password
```html
<form>
  User:<br>
  <input type="text" name="username"><br>
  Password:<br>
  <input type="password" name="psw">
</form>
```

### input type submit
```html
<form action="/action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Paolo"><br>
  Last name:<br>
  <input type="text" name="lastname" value="Rossi"><br>
  <input type="submit" value="Invia">
</form>
```

### input type button
```html
<input type="button" onclick="alert('Ciao!')" value="Clicca qui!">
```

### input type image
```html
<input id="image" type="image" width="100" height="30" alt="Login" src="assets/img/login.png">
```

### input type reset
```html
<form>
  Nome:<br>
  <input type="text" name="firstname" value=""><br>
  Cognome:<br>
  <input type="text" name="lastname" value=""><br>
  <input type="submit" value="Submit">
  <input type="reset">
</form>
```

### input type radio
```html
<form>
  <input type="radio" name="gender" value="uomo" checked> Uomo<br>
  <input type="radio" name="gender" value="donna"> Donna<br>
  <input type="radio" name="gender" value="altro"> Altro
</form>
```

### input type checkbox
```html
<form>
  <input type="checkbox" name="veicolo1" value="Bicicletta"> Ho una bicicletta<br>
  <input type="checkbox" name="veicolo2" value="Automobile"> Ho un'automobile
</form>
```

---

## `<select>`

```html
<select name="auto">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat" selected>Fiat</option>
  <option value="audi">Audi</option>
</select>
```

### `<optgroup>` — Raggruppare opzioni
```html
<select>
  <optgroup label="Auto svedesi">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="Auto tedesche">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
```

### Selezioni multiple
```html
<select name="auto" size="4" multiple>
  <option value="volvo">Volvo</option>
  ...
</select>
```

### Valori visibili
```html
<select name="auto" size="3">
  ...
</select>
```

---

## `<textarea>`

```html
<textarea name="messaggio" rows="10" cols="30">
Lorem ipsum dolor sit amet...
</textarea>
```

Con stile CSS:
```html
<textarea name="message" style="width:400px; height:600px">
```

---

## `<label>`

```html
<form action="/action_page.php">
  <label for="male">Uomo</label>
  <input type="radio" name="gender" id="male" value="uomo"><br>
  <label for="female">Donna</label>
  <input type="radio" name="gender" id="female" value="donna"><br>
  <label for="other">Altro</label>
  <input type="radio" name="gender" id="other" value="altro"><br>
  <input type="submit" value="Submit">
</form>
```

Oppure posizionando l'input all'interno del label:
```html
<label>Uomo <input type="radio" name="gender" id="male" value="uomo"></label>
```

---

## `<fieldset>` e `<legend>`

```html
<form>
  <fieldset>
    <legend>Anagrafica:</legend>
    Nome: <input type="text" size="30"><br>
    Cognome: <input type="text" size="30"><br>
    Data di nascita: <input type="text" size="10">
  </fieldset>
</form>
```

---

## Attributi degli elementi input del form

### `value`
```html
<input type="text" name="firstname" value="Paolo">
```

### `readonly`
```html
<input type="text" name="firstname" value="Paolo" readonly>
```

### `disabled`
```html
<input type="text" name="firstname" value="Paolo" disabled>
```

### `size`
```html
<input type="text" name="firstname" value="John" size="40">
```

### `maxlength`
```html
<input type="text" name="firstname" maxlength="10">
```

---

## Liste HTML

### Lista non ordinata `<ul>`

```html
<ul>
  <li>Caffè</li>
  <li>Té</li>
  <li>Latte</li>
</ul>
```

### Stile del marcatore (`list-style-type`)

| Valore | Descrizione |
|--------|-------------|
| `disc` | Pallino nero (default) |
| `circle` | Cerchio |
| `square` | Quadrato |
| `none` | Nessun simbolo |

```html
<ul style="list-style-type:square">...</ul>
<ul style="list-style-type:none">...</ul>
```

> Nota: `list-style-type` è una proprietà dell'elemento `<ul>`, `list-style` è una proprietà dell'elemento `<li>`

### Lista ordinata `<ol>` — attributo `type`

| type | Descrizione |
|------|-------------|
| `"1"` | Numeri (default) |
| `"A"` | Lettere maiuscole |
| `"a"` | Lettere minuscole |
| `"I"` | Numeri romani maiuscoli |
| `"i"` | Numeri romani minuscoli |

### Liste nidificate
```html
<ul>
  <li>Caffé</li>
  <li>Té
    <ul>
      <li>Té nero</li>
      <li>Té verde</li>
    </ul>
  </li>
  <li>Latte</li>
</ul>
```

### Attributo `start`
```html
<ol start="10">
  <li>Caffé</li>
  <li>Te</li>
  <li>Latte</li>
</ol>
```

### Liste orizzontali (navigazione)
```html
<ul>
  <li style="display: inline-block;">
    <a href="#home" style="text-align: center;padding: 16px;">Home</a>
  </li>
  <li style="display: inline-block;">
    <a href="#news" style="text-align: center;padding: 16px;">Notizie</a>
  </li>
</ul>
```

---

## Elenchi di descrizione HTML

```html
<dl>
  <dt>Caffè</dt>
  <dd>- bevanda calda, di colore nero</dd>
  <dt>Latte</dt>
  <dd>- bevanda fredda, di colore bianco</dd>
</dl>
```

---

## `<iframe>` HTML

```html
<iframe src="URL" width="" height=""></iframe>
<iframe src="capitoli.html" width="100%" height="500px"></iframe>
<!-- con CSS: -->
<iframe src="capitoli.html" style="height:200px;width:300px;"></iframe>
```

### Rimuovere il bordo
```html
<iframe src="capitoli.html" style="border:none;"></iframe>
<!-- con stile personalizzato: -->
<iframe src="capitoli.html" style="border-width:2px; border-style:solid; border-color: red;"></iframe>
```

Gli iframe si usano spesso per incorporare mappe di Google, stream social, meteo, ecc.

---

## Approfondimento sull'elemento `<head>`

I seguenti tag descrivono i metadati: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`.

### `<title>`
Definisce il titolo del documento ed è richiesto in tutti i documenti HTML/XHTML. Definisce un titolo nella scheda del browser, nei preferiti e nei risultati dei motori di ricerca.

### `<meta>`

```html
<meta charset="UTF-8">
<meta name="description" content="il mio blog">
<meta name="keywords" content="HTML, CSS, XML, JavaScript">
<meta name="author" content="Paolo Rossi">
<meta http-equiv="refresh" content="30">
```

### Impostazione di Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width`: imposta la larghezza della pagina sulla base della larghezza dello schermo del dispositivo
- `initial-scale=1.0`: imposta il livello di zoom iniziale

### Esempio completo
```html
<!DOCTYPE html>
<html lang="it">
<head>
  <title>Il blog di Paolo Rossi</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="il mio blog">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="Paolo Rossi">
</head>
<body>
  <h1>Titolo del testo</h1>
  <p>Contenuto…</p>
</body>
</html>
```

### `<style>`
```html
<style>
  body { background-color: powderblue; }
  h1   { color: red; }
  p    { color: blue; }
</style>
```

### `<link>`
```html
<link rel="stylesheet" href="style.css">
<link rel="shortcut icon" href="assets/img/favicon.ico">
```

### `<script>`
```html
<script>
  function saluta() {
    var user;
    user = "Oscar";
    document.getElementById("msg").innerHTML = "Ciao! Benvenuto " + user;
  }
</script>
…
<p id="msg"></p>
<button type="button" onclick="saluta()">Premi qui!</button>
```

Oppure per richiamare sorgenti esterne:
```html
<script src="http://code.jquery.com/jquery-3.3.1.js"></script>
```

---

## Considerazioni su XHTML

XHTML è più rigido di HTML. I documenti devono essere marcati correttamente ("ben formati").

- `DOCTYPE` è obbligatorio
- L'attributo `xmlns` in `<html>` è obbligatorio: `<html xmlns="http://www.w3.org/1999/xhtml" lang="it-IT">`
- `<html>`, `<head>`, `<title>` e `<body>` sono obbligatori
- Gli elementi XHTML devono essere nidificati correttamente
- Gli elementi XHTML devono essere sempre chiusi
- Gli elementi XHTML devono essere in minuscolo
- I nomi degli attributi devono essere in minuscolo
- I valori degli attributi devono essere citati
- La minimizzazione degli attributi è vietata

```html
<!-- Sbagliato: -->
<input type="text" name="lastname" disabled />
<!-- Corretto: -->
<input type="text" name="lastname" disabled="disabled" />
```

---

## Percorsi di file HTML

| Path | Descrizione |
|------|-------------|
| `<img src="immagine.jpg">` | L'immagine si trova nella stessa cartella della pagina corrente |
| `<img src="img/immagine.jpg">` | L'immagine si trova nella cartella `img` (figlia della corrente) |
| `<img src="./img/immagine.jpg">` | Come sopra, con `.` esplicito |
| `<img src="assets/img/immagine.jpg">` | L'immagine nella cartella `img` dentro `assets` |
| `<img src="../immagine.jpg">` | L'immagine si trova nella cartella padre |
| `<img src="/img/immagine.jpg">` | L'immagine si trova nella cartella `img` nella radice del Web |

- `[.]` per la directory corrente
- `[..]` per la directory padre

### Percorsi assoluti
```html
<img src="http://www.torinoggi.it/typo3temp/pics/o_ef08622de6.png" alt="Bicicletta">
```

### Percorsi relativi
```html
<img src="assets/img/gallina.gif" alt="Gallina che esplode">
<img src="../img/mazzo.jpg" alt="Mazzo di fiori">
```

> È consigliabile usare i percorsi relativi (se possibile).

---

## HTML5

```html
<!DOCTYPE html>
<meta charset="UTF-8">
```

### Nuovi elementi

- **Semantici:** `<header>`, `<footer>`, `<article>`, `<section>` …
- **Form:** nuovi attributi `number`, `date`, `time`, `calendar`, `range`
- **Grafici:** `<svg>` e `<canvas>`
- **Multimediali:** `<audio>` e `<video>`
- **API:** Geolocalizzazione

---

## Elementi deprecati

`<acronym>`, `<applet>`, `<basefont>`, `<big>`, `<center>`, `<dir>`, `<font>`, `<frame>`, `<frameset>`, `<isindex>`, `<noframes>`, `<s>`, `<strike>`, `<tt>`, `<u>`

---

## Attributi deprecati

`shape`, `coords` (in `<a>`), `longdesc` (in `<img>`, `<iframe>`), `name` (in `<img>`), `scope` (in `<td>`), `summary` (in `<table>`), `background` (in `<body>`), `bgcolor`, `border` (in `<object>`), `cellpadding`, `cellspacing`, `frameborder`, `height` (in `<td>`, `<th>`), `hspace`, `vspace`, `marginheight`, `marginwidth`, `noshade`, `nowrap`, `scrolling`, `size` (in `<hr>`), `valign`, `width`, `align` e altri.

---

## Retro-compatibilità

HTML5 è supportato in tutti i browser moderni. I browser gestiscono automaticamente elementi non riconosciuti come elementi in linea.

```css
header { display: block; }
```

Verifica compatibilità: [https://caniuse.com/](https://caniuse.com/)

### Aggiungere nuovi elementi in HTML
```html
<!DOCTYPE html>
<html>
<head>
  <script>document.createElement("newElement")</script>
</head>
<body>
  <newElement style="display: block;padding: 50px;font-size: 30px;">My Hero Element</newElement>
</body>
</html>
```

---

## HTML5Shiv

Soluzione per abilitare lo stile degli elementi HTML5 nelle versioni di Internet Explorer precedenti alla 9:

```html
<head>
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <![endif]-->
</head>
```

### HTML5Shiv vs Modernizr

- **Html5Shiv**: abilita solo i tag HTML5 su IE < 9
- **Modernizr**: verifica la disponibilità delle funzionalità HTML5 e CSS3 nei browser. Include Html5Shiv.

Riferimento: [http://modernizr.com/](http://modernizr.com/)

---

## Commenti condizionali

```html
<!--[if IE]>….<![endif]-->           <!-- qualsiasi versione IE -->
<!--[if IE 8]>….<![endif]-->          <!-- solo IE 8 -->
<!--[if gt IE 8]>….<![endif]-->       <!-- IE versione > 8 -->
<!--[if gte IE 8]>….<![endif]-->      <!-- IE versione >= 8 -->
<!--[if !IE 8]>….<![endif]-->         <!-- IE versione diversa da 8 -->
```

### Stili solo per IE
```html
<!--[if lte IE 8]>
<link rel="stylesheet" href="ie8inf.css" type="text/css" />
<![endif]-->
```

---

## Nuovi elementi semantici/strutturali HTML5

| Tag | Descrizione |
|-----|-------------|
| `<article>` | Definisce un articolo in un documento |
| `<aside>` | Definisce il contenuto correlato, a parte il contenuto principale |
| `<details>`* | Definisce dettagli aggiuntivi che l'utente può mostrare/nascondere |
| `<figcaption>`** | Definisce una didascalia per un elemento `<figure>` |
| `<figure>`** | Definisce contenuto autonomo |
| `<footer>` | Definisce un piè di pagina per un documento o una sezione |
| `<header>` | Definisce un'intestazione per un documento o una sezione |
| `<main>` | Definisce il contenuto principale di un documento |
| `<mark>` | Definisce il testo evidenziato |
| `<nav>` | Definisce un contenitore per i collegamenti di navigazione |
| `<progress>` | Rappresenta lo stato di avanzamento di un'attività |
| `<section>` | Definisce una sezione in un documento |
| `<summary>`* | Definisce un'intestazione visibile per `<details>` |

---

## Nuovi `<input type="">`

`color`, `date`, `datetime`, `datetime-local`, `email`, `month`, `number`, `range`, `search`, `tel`, `time`, `url`, `week`

### Esempi

**`type="color"`**
```html
<input type="color" name="mycolor">
```

**`type="date"`**
```html
<input type="date" name="bday">
```

**`type="email"`**
```html
<input type="email" name="email">
```

**`type="number"`**
```html
<input type="number" name="quantity" min="18" max="30">
```

**`type="range"`**
```html
<input type="range" name="points" min="0" max="50">
```

**`type="search"`**
```html
<input type="search" name="ricerca">
```

**`type="time"`**
```html
<input type="time" name="user_time">
```

**`type="url"`**
```html
<input type="url" name="homepage">
```

---

## Nuovi attributi per `<input type="">`

`autocomplete`, `autofocus`, `form`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `width`, `list`, `min`, `max`, `multiple`, `pattern`, `placeholder`, `required`, `step`

### `autocomplete`

```html
<form action="/action_page.php">
  Nome:<input type="text" name="fname"><br>
  Cognome: <input type="text" name="lname"><br>
  E-mail: <input type="email" name="email" autocomplete="off"><br>
  <input type="submit">
</form>
```

### `autofocus`
```html
<label for="fname">Nome</label>:<br>
<input type="text" name="fname" id="fname" autofocus>
```

### `formaction`
```html
<form action="/action_page.php">
  <input type="text" name="fname" id="fname"><br>
  <input type="text" name="lname" id="fname"><br>
  <input type="submit" value="Invia"><br>
  <input type="submit" formaction="/action_page2.php" value="Invia 2">
</form>
```

### `min` e `max`
```html
<input type="date" name="bday" max="1979-12-31">
<input type="date" name="bday" min="2000-01-02">
<input type="number" name="quantity" min="1" max="5">
```

### `placeholder`
```html
<input type="email" name="email" id="email" placeholder="inserisci l'indirizzo e-mail">
```

> Nota: i tag di apertura e chiusura di `<textarea>` devono essere sulla stessa riga per mostrare il placeholder.

### `required`
```html
<input type="text" name="usrname" required>
```

---

## HTML5: nuova sintassi degli attributi

| Tipo | Esempio |
|------|---------|
| vuoto | `<input type="text" value="Paolo" disabled>` |
| senza apici | `<input type="text" value=Paolo>` |
| con virgolette | `<input type="text" value="Paolo Rossi">` |
| con apici | `<input type="text" value='Paolo Rossi'>` |

---

## Grafica HTML5

| Tipo | Descrizione |
|------|-------------|
| `<canvas>` | Disegna la grafica al volo tramite script (solitamente JavaScript) |
| `<svg>` | Disegna grafica vettoriale scalabile |

Esempio con `<svg>`:
```html
<svg width="300" height="300">
  <a href="#capitolo1" style="cursor: pointer;" title="Vai al capitolo 1">
    <circle cx="150" cy="150" r="80" stroke="green" stroke-width="3"
      fill="rgba(30,100,150,0.2)" />
  </a>
  Mi spiace, il tuo browser non supporta la grafica SVG.
</svg>
```

### Differenze tra SVG e Canvas

- **SVG** è un linguaggio XML; ogni elemento è disponibile nel DOM SVG; le modifiche agli attributi vengono renderizzate automaticamente
- **Canvas** disegna pixel per pixel tramite JavaScript; una volta disegnato, il contenuto viene "dimenticato"; per modificarlo bisogna ridisegnare da zero

---

## Elementi semantici

Un elemento semantico descrive chiaramente il suo significato sia per il browser che per lo sviluppatore.

- **Non semantici:** `<div>`, `<span>` (non dicono nulla sul contenuto)
- **Semantici:** `<form>`, `<table>`, `<article>` (definiscono chiaramente il contenuto)

Nuovi elementi semantici HTML5: `<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`, `<mark>`, `<nav>`, `<section>`, `<summary>`, `<time>`

### `<section>`
```html
<section>
  <h1>ONU</h1>
  <p>L' <abbr title="Organizzazione delle Nazioni Unite">ONU</abbr> è stata fondata nel 1945...</p>
</section>
```

> Le sezioni devono cominciare con `<h1>`.

### `<article>`
```html
<article>
  <h1>Recensione dell'ultimo smartphone android</h1>
  <p>Lorem ipsum dolor sit amet...</p>
</article>
```

> Non esiste differenza nello standard HTML5 tra `<article>`, `<section>` e `<div>` in termini di annidamento.

### `<header>`
```html
<article>
  <header>
    <h1>Cosa facciamo</h1>
    <h2>Il nostro obiettivo</h2>
  </header>
  <p>Lorem ipsum dolor sit amet...</p>
</article>
```

### `<footer>`
```html
<footer>
  <p>Creato da: Mario Bianchi</p>
  <p>Contatto: <a href="mailto:mario.bianchi@gmail.com">mario.bianchi@gmail.com</a>.</p>
</footer>
```

### `<nav>`
```html
<nav>
  <a href="blog.html">BLOG</a> |
  <a href="aboutus.html">Chi siamo</a> |
  <a href="contacts.html">Contatti</a> |
  <a href="works.html">Lavori</a>
</nav>
```

### `<aside>`
```html
<article>
  <p>Questa estate ho portato la mia famiglia a visitare il Museo Egizio...</p>
  <aside>
    <h2>Museo Egizio</h2>
    <p>Il museo Egizio è uno dei musei più importanti al mondo e si trova nella città di Torino</p>
  </aside>
</article>
```

### `<figure>` e `<figcaption>`
```html
<figure>
  <img src="assets/img/tulipani.jpg" alt="Tulipani" style="width:400;height:250">
  <figcaption>fig. 1 - Tulipani in Olanda.</figcaption>
</figure>
```

---

## Nuovi elementi multimediali

| Tag | Descrizione |
|-----|-------------|
| `<audio>` | Definisce un contenuto audio |
| `<embed>` | Definisce un contenitore per un'applicazione esterna |
| `<source>` | Definisce più risorse multimediali per `<video>` e `<audio>` |
| `<track>` | Definisce le tracce di testo per `<video>` e `<audio>` |
| `<video>` | Definisce un contenuto video |

### `<video>`
```html
<video width="600" height="400" controls>
  <source src="assets/media/earth.mp4" type="video/mp4">
  <source src="assets/media/earth.webm" type="video/webm">
  Il tuo browser non supporta il tag video.
</video>
```

Attributi aggiuntivi:
```html
<video width="600" height="400" controls autoplay>
<video controls poster="./assets/img/poster.jpg">
<video controls muted>
```

> ⚠️ `autoplay` non funziona su dispositivi mobili. Dal aprile 2018 non funziona su Chrome.

### Video HTML — Media Type e supporto browser

| File Format | Media Type |
|-------------|------------|
| MP4 | video/mp4 |
| WebM | video/webm |
| Ogg | video/ogg |

| Browser | MP4 | WebM | Ogg |
|---------|-----|------|-----|
| Internet Explorer | SI | NO | NO |
| Chrome | SI | SI | SI |
| Firefox | SI | SI | SI |
| Safari | SI | NO | NO |
| Opera | SI (v.25+) | SI | SI |

### `<audio>`
```html
<audio controls>
  <source src="assets/media/canzone.ogg" type="audio/ogg">
  <source src="assets/media/canzone.mp3" type="audio/mpeg">
  Il tuo browser non supporta il tag audio.
</audio>
```

### Audio HTML — Media Type e supporto browser

| File Format | Media Type |
|-------------|------------|
| MP3 | audio/mpeg |
| OGG | audio/ogg |
| WAV | audio/wav |

| Browser | MP3 | WAV | OGG |
|---------|-----|-----|-----|
| Internet Explorer | SI | NO | NO |
| Chrome | SI | SI | SI |
| Firefox | SI | SI | SI |
| Safari | SI | SI | NO |
| Opera | SI | SI | SI |

---

## HTML Plug-ins

### `<object>`
```html
<object width="100%" height="600" data="assets/data/car.swf"></object>
<object width="100%" height="500px" data="liste.html"></object>
<object data="assets/document/cv.pdf" type="application/pdf" width="300" height="200"></object>
```

Per compatibilità con browser vecchi:
```html
<object data="abc.pdf" type="application/pdf">
  <embed src="abc.pdf" type="application/pdf" />
</object>
```

---

## Video di YouTube

```html
<iframe width="420" height="315"
  src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
```

Con controlli nascosti:
```html
<iframe width="420" height="315"
  src="https://www.youtube.com/embed/tgbNymZ7vqY?&controls=0"></iframe>
```

- `controls=0`: nasconde i controlli
- `controls=1`: mostra i controlli (default)

---

# CSS — Layout & Design

---

## CSS (Cascading Style Sheets)

Il CSS viene utilizzato per definire gli stili per le pagine Web, inclusi design, layout e variazioni di visualizzazione.

- Il CSS ha rimosso la formattazione dello stile dalla pagina HTML
- CSS risparmia molto lavoro
- Le definizioni di stile vengono normalmente salvate in file `.css` esterni
- Con un foglio di stile esterno, puoi cambiare l'aspetto di un intero sito web cambiando un solo file

---

## Sintassi CSS

```
selettore { proprietà: valore; proprietà: valore; }
h1 { color: #d61524; font-size: 14px; }
```

- Il **selettore** punta all'elemento HTML da stilizzare
- Il **blocco di dichiarazione** contiene una o più dichiarazioni separate da `;`
- Ogni dichiarazione include un nome di proprietà e un valore, separati da `:`
- Una dichiarazione CSS termina sempre con `;`

> Non aggiungere spazi tra il valore e l'unità: `font-size: 14px;` (corretto), non `font-size: 14 px;`

Elenco selettori: [https://www.w3schools.com/cssref/css_selectors.asp](https://www.w3schools.com/cssref/css_selectors.asp)

---

## Selettori CSS

### Selettore di elementi
```css
p {
  text-align: center;
  color: blue;
}
```

### Selettore di id
```css
#p1 {
  text-align: center;
  color: blue;
}
```

### Selettore di classe
```css
.center {
  text-align: center;
  font-weight: bold;
}
```

Solo gli elementi `<p>` con classe `center`:
```css
p.center { text-align: center; }
```

Elementi HTML con più classi:
```html
<p class="center large">Questo paragrafo ha due classi</p>
```

> Importante: un nome di classe non può iniziare con un numero!

---

## Pseudo-classi

```
selector:pseudo-class { property: value; }
```

Esempi:
```css
a:link    { color: #FF0000; }
a:hover   { color: #ff0000; }
div:hover { background-color: blue; }
```

---

## Pseudo-elementi CSS

```
selector::pseudo-element { property: value; }
```

Esempio:
```css
h1::after { content: "ciao"; }
```

---

## Selettori di attributi CSS

**`[attributo]`**
```css
a[target] { background-color: yellow; }
```

**`[attributo="valore"]`**
```css
a[target="_blank"] { background-color: yellow; }
```

**`[attributo~="valore"]`** — contiene la parola
```css
[title~="casa"] { border: 2px solid green; }
```
Es: seleziona `casa`, `casa vacanza`; non seleziona `villa`

**`[attributo|="valore"]`** — inizia con il valore (seguito da `-`)
```css
[class|="top"] { padding: 20px; }
```
Es: seleziona `top-header`, `top-text`; non seleziona `topcontent`

**`[attributo^="valore"]`** — inizia esattamente con il valore
```css
[class^="top"] { padding: 20px; }
```
Es: seleziona `top-header`, `top-text`, `topcontent`

**`[attributo$="valore"]`** — termina con il valore
```css
a[href$=".pdf"] { ... }
```

**`[attributo*="valore"]`** — contiene il valore come sottostringa
```css
a[href*="mdn"] { ... }
```

---

## Selettore universale

```css
* { color: red; }
```

---

## Selettori di raggruppamento

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

---

## Inserire commenti nel CSS

```css
p {
  color: red;
  /* This is a single-line comment */
  text-align: center;
}

/* This is
   a multi-line
   comment */
```

---

## Tre modi per inserire CSS

1. **Stile in linea** — massima priorità
2. **Foglio di stile interno** (in `<head>`)
3. **Foglio di stile esterno**

### Stile in linea
```html
<h1 style="color:blue;margin-left:30px;">This is a heading</h1>
```

### Foglio di stile interno
```html
<head>
  <style>
    body { background-color: #f7f7f7; }
    h1   { color: blue; margin-left: 40px; }
  </style>
</head>
```

### Foglio di stile esterno
```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

---

## Fogli di stile multipli

L'ultimo foglio di stile letto ha la precedenza. L'ordine di caricamento segue l'ordine di elencazione in `<head>`:

```html
<head>
  <link rel="stylesheet" type="text/css" href="css/global.css">
  <link rel="stylesheet" type="text/css" href="css/accordion.css">
  <link rel="stylesheet" type="text/css" href="css/datatable.css">
</head>
```

---

## Ordine a cascata

Priorità (dalla più alta alla più bassa):

1. Stile in linea (all'interno di un elemento HTML)
2. Fogli di stile esterni e interni (inseriti in `<head>`)
3. Browser predefinito

---

## Specificità CSS

La specificità è un punteggio che determina quali dichiarazioni di stile vengono applicate.

**Gerarchia di specificità:**
- **Stili in linea**: `<h1 style="color:#ffffff;">`
- **ID**: `#navbar`
- **Classi, attributi, pseudo-classi**: `.classe`, `[attributi]`, `:hover`
- **Elementi e pseudo-elementi**: `h1`, `div`, `::before`, `::after`

### Come calcolare

Inizia da 0:
- +1000 per l'attributo `style`
- +100 per ogni ID
- +10 per ogni attributo, classe o pseudo-classe
- +1 per ogni nome di elemento o pseudo-elemento

**Esempi:**
- `h1` → specificità = 1
- `#content h1` → specificità = 101
- `<div id="content"><h1 style="color:#ffffff;">` → specificità = 1000

---

## Il BOX MODEL

Tutti gli elementi HTML possono essere considerati come box. Il box model CSS include:

- **Contenuto**: dove vengono visualizzati testo e immagini
- **Padding**: area attorno al contenuto (trasparente)
- **Border**: bordo che circonda il padding e il contenuto
- **Margine**: area al di fuori del box (trasparente)

```css
div {
  width: 300px;
  border: 25px solid green;
  padding: 25px;
  margin: 25px;
}
```

### Calcolo delle dimensioni

```
larghezza totale = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right
altezza totale   = height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom
```

**Esempio:**
```css
div {
  width: 320px;     /* 320px */
  padding: 10px;    /* +20px (sx+dx) */
  border: 5px solid gray; /* +10px (sx+dx) */
  margin: 0;        /* +0px */
}
/* = 350px totali */
```

---

## Unità di misura nei CSS

### Lunghezze assolute

| Unità | Descrizione |
|-------|-------------|
| `cm` | centimetri |
| `mm` | millimetri |
| `in` | inches (1in = 96px = 2.54cm) |
| `px` | pixels (1px = 1/96 di 1in) |
| `pt` | points (1pt = 1/72 di 1in) |
| `pc` | picas (1pc = 12 pt) |

### Lunghezze relative

| Unità | Descrizione |
|-------|-------------|
| `em` | Relativo alla dimensione del carattere dell'elemento |
| `rem` | Relativo alla dimensione del carattere dell'elemento radice |
| `vw` | Relativo all'1% della larghezza del viewport |
| `vh` | Relativo all'1% dell'altezza del viewport |
| `vmin` | Relativo all'1% della dimensione più piccola del viewport |
| `vmax` | Relativo all'1% della dimensione più grande del viewport |
| `%` | Relativo all'elemento genitore |

> Suggerimento: le unità `em` e `rem` sono pratiche per creare un layout scalabile.

---

## `height` e `width`

```css
div {
  height: 100px;
  width: 500px;
}
```

Valori possibili: `auto` (default), lunghezza in `px`, `cm` ecc., percentuale `%`

---

## Margini CSS

```css
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;
```

### Shorthand

```css
margin: 25px 50px 75px 100px; /* top right bottom left */
margin: 25px 50px 75px;       /* top left/right bottom */
margin: 25px 50px;             /* top/bottom left/right */
margin: 25px;                  /* tutti i lati */
margin: 0 auto;                /* centramento orizzontale */
```

> **Collasso del margine**: i margini superiore e inferiore possono collassare in un unico margine pari al maggiore dei due.

---

## Padding

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
```

### Shorthand

```css
padding: 25px 50px 75px 100px; /* top right bottom left */
padding: 25px 50px 75px;       /* top left/right bottom */
padding: 25px 50px;             /* top/bottom left/right */
padding: 25px;                  /* tutti i lati */
```

> I valori negativi non sono consentiti per il padding.

---

## `display`

```css
p.a { display: none; }
p.b { display: inline; }
p.c { display: block; }
p.d { display: inline-block; }
```

- `display: none;` — nasconde l'elemento senza eliminarlo dal DOM (usato con JavaScript)

### Modificare il valore di default

```css
li { display: inline; } /* lista orizzontale */
```

> La proprietà `display` modifica solo come l'elemento viene visualizzato, NON il suo tipo.

### `display: inline-block`

Rispetto a `inline`: permette di impostare `width` e `height`, e rispetta margini/padding superiori/inferiori.

Rispetto a `block`: non aggiunge un'interruzione di riga dopo l'elemento.

---

## `float` e `clear`

### `float`

```css
float: left;    /* fluttua a sinistra */
float: right;   /* fluttua a destra */
float: none;    /* default */
float: inherit; /* eredita dal genitore */
```

### `clear`

```css
clear: none;    /* default */
clear: left;    /* nessun elemento mobile a sinistra */
clear: right;   /* nessun elemento mobile a destra */
clear: both;    /* nessun elemento mobile su nessun lato */
clear: inherit; /* eredita dal genitore */
```

### Il Clearfix

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

Riferimento: [https://css-tricks.com/snippets/css/clear-fix/](https://css-tricks.com/snippets/css/clear-fix/)

---

## `position`

Cinque valori possibili: `static`, `relative`, `fixed`, `absolute`, `sticky`

Gli elementi vengono posizionati con le proprietà `top`, `bottom`, `left`, `right`.

---

## `z-index` — Elementi sovrapposti

```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1; /* posizionata dietro il testo */
}
```

Un elemento con `z-index` maggiore è sempre davanti a uno con valore inferiore. Senza `z-index`, l'elemento posizionato per ultimo nel codice HTML viene mostrato in alto.

---

## `overflow`

| Valore | Descrizione |
|--------|-------------|
| `visible` | Il contenuto "esce" dal contenitore (default) |
| `hidden` | Il contenuto è troncato e non visibile |
| `scroll` | Il contenuto è troncato, con barra di scorrimento |
| `auto` | Aggiunge la barra di scorrimento se necessario |

> `overflow` funziona solo per elementi di blocco con un'altezza specificata.

`overflow-x` e `overflow-y` per gestire separatamente i due assi.

---

## `max-width`

```css
div {
  height: 100px;
  max-width: 500px;
}
```

Con `max-width`, il div si restringe quando la finestra è più piccola, evitando barre di scorrimento orizzontali. Vedi anche: `min-width`, `max-height`, `min-height`.

---

## Backgrounds

```css
background-color: blue;
background-image: url("paper.gif");
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: right top;
```

### Shorthand

```css
body { background: #ffffff url("smile.png") no-repeat right top; }
```

Ordine: `background-color`, `background-image`, `background-repeat`, `background-attachment`, `background-position`

---

## Formattazione del testo

### `color`
```css
body { color: #333; background-color: #fff; }
```

### `text-align`
```css
text-align: center;
text-align: left;
text-align: right;
text-align: justify;
```

### `line-height`
```css
line-height: 150%;
```

### `text-decoration`
```css
text-decoration: none;        /* rimuove sottolineatura dei link */
text-decoration: overline;
text-decoration: line-through;
text-decoration: underline;
```

### `text-transform`
```css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
```

---

## Font

### `font-family`
```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

### `font-size`
```css
h1 { font-size: 2.5em;   /* 40px/16=2.5em */ }
h2 { font-size: 1.875em; /* 30px/16=1.875em */ }
p  { font-size: 0.875em; /* 14px/16=0.875em */ }
```

Soluzione che funziona in tutti i browser:
```css
body { font-size: 100%; }
h1   { font-size: 2.5em; }
h2   { font-size: 1.875em; }
p    { font-size: 0.875em; }
```

### `font-weight`
```css
p.normal     { font-weight: normal; }
p.highlights { font-weight: bold; }
```

### `font-variant`
```css
p.normal   { font-variant: normal; }
p.smallcaps { font-variant: small-caps; }
```

### `font-style`
```css
p.normal     { font-style: normal; }
p.highlights { font-style: italic; }
```

### Shorthand `font`
```css
body {
  font: italic small-caps bold 100%/150% "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}
```

---

## La regola CSS `@font-face`

```css
@font-face {
  font-family: frutiger;
  src: url(../font/frutigerltstdroman.woff) format('woff'),
       url(../font/frutigerltstdroman.ttf) format('truetype');
}

body {
  font-family: frutiger, sans-serif;
}
```

Per la versione bold:
```css
@font-face {
  font-family: frutiger-bold;
  src: url(assets/font/frutigerltstdbold.woff) format('woff'),
       url(frutigerltstdbold.ttf) format('truetype');
}

strong { font-family: frutiger-bold; }
```

Generatore web-font: [https://www.fontsquirrel.com/tools/webfont-generator](https://www.fontsquirrel.com/tools/webfont-generator)

---

## Pseudo-classi per i link

```css
a:link    { color: #FF0000; } /* link non visitato */
a:visited { color: #00FF00; } /* link visitato */
a:hover   { color: #FF00FF; } /* mouse sopra il link */
a:active  { color: #0000FF; } /* link selezionato */
```

> `a:hover` DEVE venire dopo `a:link` e `a:visited`. `a:active` DEVE venire dopo `a:hover`.

Altre pseudo-classi utili: `:first-child`, `:last-child`, `:nth-child(n)`, `:nth-of-type(n)`, `:focus`, `:checked`, `:empty` …

Elenco completo: [https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

---

## Pseudo-elementi

```css
h1::after  { content: "\2605"; }
h1::before { content: "Sez."; color: red; font-size: 0.8rem; }
h1::after  { content: url(../img/smile_small.png); }
```

Pseudo-elementi disponibili: `::after`, `::before`, `::selection`, `::first-line`, `::first-letter`

---

## Custom Unordered list: `<ul>`

**HTML:**
```html
<ul>
  <li>Caffé
    <ul>
      <li>Macchiato</li>
      <li>Corretto</li>
    </ul>
  </li>
  <li>The</li>
  <li>Latte</li>
</ul>
```

**CSS — Eliminare la formattazione del browser:**
```css
ul { list-style-type: none; }
```

**CSS — Creare l'elemento personalizzato:**
```css
ul li::before {
  content: "\2688";
  color: DodgerBlue;
  margin-right: 10px;
  font-size: .7rem;
  position: relative;
  top: -2px;
}
```

**CSS — Lista nidificata:**
```css
ul li ul li::before {
  content: "\2609";
  color: DodgerBlue;
  margin-right: 10px;
  font-size: .7rem;
  position: relative;
  top: -2px;
}
```

---

## Custom input type radio e checkbox

**HTML:**
```html
<form>
  <input type="radio" id="genere1" name="genere" value="uomo" checked>
  <label for="genere1">Uomo</label>
  <input type="radio" id="genere2" name="genere" value="donna">
  <label for="genere2">Donna</label>

  <p>Interessi</p>
  <input type="checkbox" name="foto" id="foto">
  <label for="foto">Fotografia</label>
  <input type="checkbox" name="informatica" id="informatica">
  <label for="informatica">Informatica</label>
</form>
```

**CSS — Nascondi input originali:**
```css
input[type=radio], input[type=checkbox] { opacity: 0; }
```

**CSS — Creare il radio personalizzato:**
```css
input[type=radio] + label::before {
  content: "";
  border: 2px solid DodgerBlue;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  display: inline-block;
  top: 3px;
  position: relative;
}

input[type=radio], input[type=checkbox] {
  position: relative;
  left: 21px;
  top: -2px;
}

input[type=radio]:checked + label::before {
  background: DodgerBlue;
}
```

**CSS — Checkbox personalizzata:**
```css
input[type=checkbox] + label::before {
  content: "";
  border: 2px solid DodgerBlue;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  display: inline-block;
  top: 3px;
  position: relative;
}

input[type=checkbox]:checked + label::before {
  background: DodgerBlue;
}

/* Focus */
input[type="radio"]:focus + label::before,
input[type="checkbox"]:focus + label::before {
  outline: rgb(59, 153, 252) auto 5px;
}
```

---

## Custom select

**HTML:**
```html
<form>
  <select id="professione" name="professione">
    <option value="" selected>Scegli la professione</option>
    <option value="Impiegato">Impiegato</option>
    <option value="Operaio">Operaio</option>
    <option value="Libero professionista">Libero professionista</option>
    <option value="Disoccupato">Disoccupato</option>
  </select>
</form>
```

**CSS — Eliminare stili del browser:**
```css
select {
  -webkit-appearance: none;
  -moz-appearance: none;
}
select::-ms-expand {
  display: none; /* nasconde la freccia di default in IE10/11 */
}
```

**CSS — Disegnare la select:**
```css
select {
  width: 300px;
  background-image: url('../img/arrow_down_white.svg');
  background-repeat: no-repeat;
  background-position: 98% 4px;
  background-color: DodgerBlue;
  color: white;
  border: 0;
  height: 2.6rem;
  border-radius: 0;
  padding: 0.6rem 0.8rem;
}
```

---

## `box-sizing: border-box` vs `content-box`

Default (content-box):
```
width + padding + border = larghezza effettiva
div { width: 100px; padding: 20px; border: 1px solid #333; } => 142px
```

Con `border-box`, padding e bordo sono inclusi nella larghezza:
```css
*, ::after, ::before { box-sizing: border-box; }
```

---

## Layout: griglia 12 colonne

```css
*, ::after, ::before { box-sizing: border-box; }

section { width: 75%; float: left; }
aside   { width: 25%; float: left; }
```

### Le classi col-

```css
.col-1  { width: 8.33%;  }   .col-7  { width: 58.33%; }
.col-2  { width: 16.66%; }   .col-8  { width: 66.66%; }
.col-3  { width: 25%;    }   .col-9  { width: 75%;    }
.col-4  { width: 33.33%; }   .col-10 { width: 83.33%; }
.col-5  { width: 41.66%; }   .col-11 { width: 91.66%; }
.col-6  { width: 50%;    }   .col-12 { width: 100%;   }

[class*="col-"] { float: left; padding: 0 15px; }
```

### HTML
```html
<div class="row">
  <div class="col-3">...</div>  <!-- 25% -->
  <div class="col-9">...</div>  <!-- 75% -->
</div>
```

### Clearfix per `.row`
```css
.row::after {
  content: "";
  clear: both;
  display: table;
}
```

---

## Layout con il modello Flexbox

```css
.flex-container { display: flex; }
```

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Riferimento: [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Proprietà del contenitore flex

- `flex-direction`
- `flex-wrap`
- `flex-flow` (shorthand)
- `justify-content`
- `align-items`
- `align-content`

### `flex-direction`

```css
.flex-container { display: flex; flex-direction: column; }        /* dall'alto verso il basso */
.flex-container { display: flex; flex-direction: column-reverse; } /* dal basso verso l'alto */
.flex-container { display: flex; flex-direction: row; }            /* sinistra a destra (default) */
.flex-container { display: flex; flex-direction: row-reverse; }    /* destra a sinistra */
```

### `flex-wrap`

```css
.flex-container { display: flex; flex-wrap: wrap; }         /* gli elementi si spostano verso il basso */
.flex-container { display: flex; flex-wrap: nowrap; }       /* default */
.flex-container { display: flex; flex-wrap: wrap-reverse; } /* ordine inverso */
```

### `flex-flow` (shorthand)
```css
.flex-container { display: flex; flex-flow: row wrap; }
```

### `justify-content` — Allineamento orizzontale

```css
.flex-container { display: flex; justify-content: center; }
.flex-container { display: flex; justify-content: flex-start; }  /* default */
.flex-container { display: flex; justify-content: flex-end; }
.flex-container { display: flex; justify-content: space-around; }
.flex-container { display: flex; justify-content: space-between; }
.flex-container { display: flex; justify-content: space-evenly; }
```

### `align-items` — Allineamento verticale

```css
.flex-container { display: flex; height: 200px; align-items: center; }
.flex-container { display: flex; height: 200px; align-items: flex-start; }
.flex-container { display: flex; height: 200px; align-items: flex-end; }
.flex-container { display: flex; height: 200px; align-items: stretch; }   /* default */
.flex-container { display: flex; height: 200px; align-items: baseline; }
```

### `align-content` — Allineamento delle linee

```css
.flex-container { display: flex; height: 600px; flex-wrap: wrap; align-content: space-between; }
.flex-container { display: flex; height: 600px; flex-wrap: wrap; align-content: space-around; }
.flex-container { display: flex; height: 600px; flex-wrap: wrap; align-content: stretch; }    /* default */
.flex-container { display: flex; height: 600px; flex-wrap: wrap; align-content: center; }
.flex-container { display: flex; height: 600px; flex-wrap: wrap; align-content: flex-start; }
.flex-container { display: flex; height: 600px; flex-wrap: wrap; align-content: flex-end; }
```

### Proprietà degli elementi flex

```css
#box1 { order: 1; }              /* ordine degli elementi (anche negativi) */
.box  { flex-basis: 50px; }      /* lunghezza iniziale */
.box  { flex-grow: 1; }          /* quanto cresce rispetto agli altri */
.box  { flex-shrink: 1; }        /* quanto si restringe rispetto agli altri */
.box  { flex: 0 1 auto; }        /* shorthand: flex-grow flex-shrink flex-basis */
#box3 { align-self: flex-end; }  /* allineamento individuale */
```

Flexbox bug: [https://github.com/philipwalton/flexbugs](https://github.com/philipwalton/flexbugs)

---

## NORMALIZE vs RESET CSS

### Reset
Riduce le incoerenze del browser (altezze di riga, margini, font-size, ecc.).
[https://meyerweb.com/eric/tools/css/reset/](https://meyerweb.com/eric/tools/css/reset/)

### Normalize
- Mantiene le impostazioni predefinite utili del browser
- Normalizza gli stili per un'ampia gamma di elementi HTML
- Corregge bug e inconsistenze comuni del browser

CDN: `https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css`

---

## Prefissi dei produttori di browser

```css
display: -webkit-box;    /* Chrome, Safari, iOS */
display: -moz-box;       /* Firefox */
display: -ms-flexbox;    /* Internet Explorer */
display: -webkit-flex;   /* Chrome, Safari */
display: flex;           /* standard */
```

---

# CSS — RWD: Layout Responsive

---

## RWD: Responsive Web Design

Il Responsive Web Design rende la pagina web leggibile su tutti i dispositivi usando solo HTML e CSS. RWD ridimensiona, nasconde, riduce, ingrandisce o sposta il contenuto della pagina web per renderlo usabile su qualsiasi schermo.

---

## Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- `width=device-width`: imposta la larghezza della pagina in base alla larghezza dello schermo del dispositivo
- `initial-scale=1.0`: imposta il livello di zoom iniziale

---

## `@media`

La regola `@media` permette di definire regole CSS diverse per diversi dispositivi.

```css
@media screen { h1 { background-color: red; } }
@media print  { h1 { color: red; } }
```

### CSS3 Media Queries

```css
@media not|only mediatype and (expressions) {
  /* istruzioni CSS */
}
```

- `not`: inverte il risultato dell'intera query
- `only`: impedisce ai browser vecchi di applicare gli stili
- `and`: combina più condizioni

---

## Breakpoint tipici

```css
/* Extra small devices (phones, 480px and down) */
@media only screen and (max-width: 480px) { ... }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) { ... }

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) { ... }

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) { ... }

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) { ... }

/* Orientamento */
@media only screen and (orientation: landscape) { ... }
```

---

## Media query — Esempio

```css
body {
  background-color: #dedede; /* grigio */
}

@media screen and (max-width: 992px) {
  body { background-color: rgb(0,0,255); } /* blu */
}

@media screen and (max-width: 600px) {
  body { background-color: rgb(255,0,0); } /* rosso */
}
```

---

## Mobile First

```css
body {
  background-color: rgb(255,0,0); /* rosso per mobile */
}

@media screen and (min-width: 600px) {
  body { background-color: rgb(0,0,255); } /* blu per schermi > 600px */
}

@media screen and (min-width: 992px) {
  body { background-color: #dedede; } /* grigio per schermi > 992px */
}
```

### Approccio Mobile First nella griglia

```css
/* Mobile: */
[class*="col-"] { width: 100%; }

@media only screen and (min-width: 768px) {
  .col-1  { width: 8.33%;  }
  .col-2  { width: 16.66%; }
  .col-3  { width: 25%;    }
  .col-4  { width: 33.33%; }
  .col-5  { width: 41.66%; }
  .col-6  { width: 50%;    }
  .col-7  { width: 58.33%; }
  .col-8  { width: 66.66%; }
  .col-9  { width: 75%;    }
  .col-10 { width: 83.33%; }
  .col-11 { width: 91.66%; }
  .col-12 { width: 100%;   }
  [class*="col-"] { float: left; }
}
```

---

## Mobile First: Immagini

**`width: 100%;`** — l'immagine scala (può diventare più grande dell'originale):
```css
img { width: 100%; }
```

**`max-width: 100%;`** — l'immagine si ridimensiona senza superare la dimensione originale (soluzione raccomandata):
```css
img { max-width: 100%; }
```

---

## `<picture>`

```html
<picture>
  <source media="(min-width: 650px)" srcset="assets/img/girasoli.jpg">
  <source media="(min-width: 465px)" srcset="assets/img/tulipani.jpg">
  <img src="assets/img/mazzo.jpg" alt="Fiori" style="width:400px;">
</picture>
```

- L'elemento `<img>` è obbligatorio come ultimo tag secondario (compatibilità con browser che non supportano `<picture>`)
- L'attributo `srcset` è obbligatorio
- L'attributo `media` è facoltativo

---

## Favicon

```html
<link rel="shortcut icon" href="./assets/img/favicon.png">
<link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="./assets/img/favicon/favicon.png">

<!-- Mobile -->
<link rel="apple-touch-icon" sizes="57x57"   href="./assets/img/favicon/favicon-57.png">
<link rel="apple-touch-icon" sizes="72x72"   href="./assets/img/favicon/favicon-72.png">
<link rel="apple-touch-icon" sizes="114x114" href="./assets/img/favicon/favicon-114.png">
<link rel="apple-touch-icon" sizes="120x120" href="./assets/img/favicon/favicon-120.png">
<link rel="apple-touch-icon" sizes="144x144" href="./assets/img/favicon/favicon-144.png">
<link rel="apple-touch-icon" sizes="152x152" href="./assets/img/favicon/favicon-152.png">

<!-- Windows 8 Tiles -->
<meta name="application-name" content="Nome App">
<meta name="msapplication-TileImage" content="./assets/img/favicon/favicon-144.png">
<meta name="msapplication-TileColor" content="#2A2A2A">

<!-- iOS Settings -->
<meta content="yes" name="apple-mobile-web-app-capable">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- Generatori: http://realfavicongenerator.net -->
```

---

## Ottimizzazione CSS

- **Usare gli shorthands**: `background`, `border`, `font` …
- **Usare proprietà a valori multipli**: `margin`, `padding`
- **Definire i colori con notazione a 3 cifre** (quando possibile): `#333333` → `#333`
- **Evitare le proprietà ininfluenti**:
  ```css
  p    { width: 500px; height: auto }   /* height è ininfluente */
  span { position: absolute; display: block }  /* display: block è ridondante */
  ```
- **Evitare catene troppo specifiche** (usa le classi):
  ```css
  header nav ul li a {...} /* → meglio: .primary-link */
  ```
- **Riutilizzare il codice**: pattern per ombre, angoli arrotondati, ecc.
- **Minificare e comprimere i file**:
  - [https://cssminifier.com/](https://cssminifier.com/)
  - [https://www.minifier.org/](https://www.minifier.org/)

---

## Sito web da wireframe: esercizio

**Esercizio:** Riprodurre un sito web a partire dai wireframe di esempio.

I documenti HTML dovranno essere in **HTML5** e fare riferimento a un **CSS esterno**. Il layout dovrà rispettare la tecnica del **Responsive Web Design**.

Passi suggeriti:
1. Identificare le tipologie di pagina da realizzare
2. Costruire la barra di navigazione e gli elementi comuni
3. Focalizzarsi sui contenuti di dettaglio
4. Collegare le pagine tra di loro
