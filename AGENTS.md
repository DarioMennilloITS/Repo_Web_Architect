# Repo_Web_Architect

## Project Overview

This is a **Web Development Learning Project** focused on fundamental HTML5, CSS3, and JavaScript concepts. The repository is structured as a progressive learning curriculum, organized into lessons that demonstrate increasingly advanced web development techniques.

The project serves as a hands-on educational resource for learning:
- Basic HTML structure and semantic elements
- CSS styling (inline, internal, and external)
- Layout techniques (float-based, Flexbox, CSS Grid)
- HTML forms and form controls
- CSS reset patterns and design systems
- Responsive design basics
- JavaScript fundamentals (variables, functions, loops, arrays)
- DOM manipulation and event handling
- Advanced JavaScript (closures, callbacks, async patterns)

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | - | Markup language for web pages |
| CSS3 | - | Styling and layout |
| JavaScript (ES6+) | - | Interactive functionality and logic |

**No build tools, frameworks, or package managers are used.** This is a pure static HTML/CSS/JS project designed for learning fundamentals.

**Fonts Used (Lesson 5+):**
- **Caveat** (Google Fonts) - Handwritten style for headings
- **Courier Prime** (Google Fonts) - Monospace for code and UI text

---

## Project Structure

```
Repo_Web_Architect/
├── Lesson_1/                    # Basic HTML & Inline CSS
│   ├── img/                     # Image assets (cat images)
│   └── index.html               # Entry point - Cat gallery with float layout
│
├── Lesson_2/                    # External CSS & Flexbox Intro
│   ├── css/
│   │   ├── reset.css            # Modern CSS reset
│   │   └── style.css            # Main stylesheet with Flexbox
│   ├── img/                     # Album cover images
│   └── index.html               # Favorite albums/songs showcase
│
├── Lesson_3/                    # HTML Forms & Advanced Flexbox
│   ├── .css/                    # Hidden folder naming convention
│   │   ├── reset.css
│   │   └── style.css
│   ├── pages/
│   │   ├── flexboxStudio.html   # Flexbox tutorial/playground
│   │   └── informativa.html     # Info page
│   └── index.html               # Registration form
│
├── Lesson_4/                    # Introduzione a JavaScript
│   ├── css/
│   ├── js/
│   │   ├── script001.js         # Script placement demo
│   │   ├── script002.js         # Basic syntax
│   │   └── script003.js         # Variables and output
│   ├── data_types.html          # JS data types reference
│   ├── example.html             # Console output examples
│   └── index.html               # Entry point
│
├── Lesson_4_TODO/               # To-Do List Project
│   ├── css/
│   ├── js/
│   │   └── script.js            # To-Do list functionality
│   └── index.html               # Interactive to-do app
│
└── Lesson_5/                    # JavaScript Exercises Collection
    ├── css/
    │   ├── reset.css            # Modern CSS reset
    │   └── style.css            # Wireframe Design System
    ├── js/                      # 30+ exercise scripts
    │   ├── closure.js           # Closures & lexical scoping
    │   ├── counter.js           # Interactive counter
    │   ├── calculator.js        # Calculator app
    │   ├── callbacks.js         # Callback functions
    │   ├── callbacks2.js        # Advanced callbacks
    │   ├── wordle.js            # Wordle game
    │   └── ... (many more)
    ├── pages/                   # Exercise pages
    │   ├── learning-center.html # Educational reference
    │   ├── closure.html         # Closure exercises
    │   ├── counter.html
    │   ├── calculator.html
    │   ├── callbacks.html
    │   ├── callbacks2.html
    │   ├── wordle.html
    │   ├── todo.html
    │   └── ... (25+ exercises)
    ├── index.html               # Exercise directory
    └── favicon.ico
```

---

## Lesson Breakdown

### Lesson 1: HTML Basics & Float Layout
- **File**: `Lesson_1/index.html`
- **Concepts**: 
  - Basic HTML document structure
  - Semantic elements (`<section>`, `<div>`, `<h1>`-`<h2>`)
  - Inline CSS styling
  - Float-based layout (`float: left`)
  - Image embedding with `<img>`
  - Hyperlinks (`<a>` tags)
- **Note**: Uses old-school float layout technique (deprecated approach for educational purposes)

### Lesson 2: External CSS & Flexbox
- **File**: `Lesson_2/index.html`
- **Concepts**:
  - External CSS file linking
  - CSS reset patterns for cross-browser consistency
  - Flexbox layout (`display: flex`)
  - CSS classes and selectors
  - Responsive image handling (`object-fit`, `max-width`)
- **Layout**: Album/song cards in flex containers

### Lesson 3: Forms & Advanced Flexbox
- **File**: `Lesson_3/index.html`
- **Concepts**:
  - HTML forms (`<form>`, `<fieldset>`, `<legend>`)
  - Form controls: text inputs, email, date, number, password
  - Selection controls: radio buttons, checkboxes, dropdowns
  - Range sliders and text areas
  - Pseudo-classes (`:hover`)
  - Nested Flexbox containers
- **Additional Pages**:
  - `flexboxStudio.html`: Interactive Flexbox demonstration
  - `informativa.html`: Static information page

### Lesson 4: Introduzione a JavaScript
- **File**: `Lesson_4/index.html`
- **Concepts**:
  - Script placement strategies (head vs body)
  - `console.log()` for debugging
  - Basic syntax and data types
  - Variable declaration (`let`, `const`)
- **Files**: `script001.js`, `script002.js`, `script003.js`

### Lesson 4_TODO: To-Do List Application
- **File**: `Lesson_4_TODO/index.html`
- **Concepts**:
  - DOM manipulation
  - Event listeners
  - Array methods
  - Dynamic HTML generation

### Lesson 5: JavaScript Exercises Collection
- **File**: `Lesson_5/index.html`
- **Total Exercises**: 29 interactive exercises
- **Key Exercises**:
  - **Basics**: Hello World, Variables, Operators
  - **Strings**: Methods, searching, manipulation
  - **Conditionals**: if/else, switch statements
  - **Loops**: for, while, nested loops
  - **Arrays**: Methods, random selection, sorting
  - **DOM**: Counter, Calculator, Color Picker, To-Do
  - **Functions**: Parameters, Callbacks, Closures
  - **Games**: Guess Number, Wordle, Lotto
- **Learning Center**: `learning-center.html` - Educational reference with HTML/CSS/JS breakdowns

---

## Design System (Lesson 5)

Lesson 5 uses a **Wireframe Design System** with a distinctive sketch/hand-drawn aesthetic:

### Color Palette
```css
--paper:       #f3efe6;    /* Background */
--paper-dark:  #e8e2d6;    /* Secondary background */
--ink:         #1a1714;    /* Primary text/borders */
--ink-mid:     #5a534d;    /* Secondary text */
--ink-light:   #9c948c;    /* Muted text */
--grid:        #cec8be;    /* Grid lines */
--accent:      #1b4f72;    /* Links, buttons */
--accent-dim:  #2e86c1;    /* Hover states */
--red:         #922b21;    /* Errors */
```

### Typography
- **Headings**: `Caveat` (handwritten font)
- **Body/UI**: `Courier Prime` (monospace)

### Visual Style
- Grid-paper background pattern
- Solid and dashed borders (`--border-solid`, `--border-dash`)
- Sketch-like animation on cards
- Two-column layout: exercise-area + logic-panel

---

## Code Style Guidelines

### HTML Conventions
- Use **4-space indentation**
- Use lowercase for HTML tags and attributes
- Include `alt` attributes on all images for accessibility
- Use semantic HTML elements where appropriate
- Language attribute set to `lang="en"`
- Meta viewport tag included for mobile responsiveness

### CSS Conventions
- **4-space indentation**
- Use lowercase for selectors and properties
- Organize CSS by component/section
- Use semantic class names (e.g., `.exercise-box`, `.counter-display`)
- Comment sections for clarity (e.g., `/* ── Counter specific ── */`)
- Use CSS custom properties (variables) for theming

### JavaScript Conventions
- **4-space indentation**
- Use `const` by default, `let` when reassignment needed
- Prefer arrow functions for callbacks
- Use descriptive variable names
- Comment complex logic
- Wrap exercise code in `DOMContentLoaded` event listener
- Console log on load: `console.log('ExerciseName loaded!')`

### File Organization
- Each lesson is self-contained in its own directory
- CSS files stored in `css/` subdirectory (Lesson 2+)
- JavaScript files stored in `js/` subdirectory
- Images stored in `img/` subdirectory
- Additional pages stored in `pages/` subdirectory

---

## CSS Reset Strategy

The project uses a modern CSS reset file (`reset.css`) based on best practices:

```css
/* Key reset features: */
- box-sizing: border-box (universal)
- margin: 0 (removed default margins)
- line-height: 1.5 (accessible line height)
- -webkit-font-smoothing: antialiased (improved text rendering)
- max-width: 100% on media elements (responsive images)
- font: inherit on form controls (consistent typography)
- overflow-wrap: break-word (prevent text overflow)
```

---

## How to Run

Since this is a static HTML project, no build process is required:

1. **Direct File Opening**: Open any `index.html` file directly in a web browser
2. **Local Server** (recommended for proper resource loading):
   ```bash
   # Using Python
   cd Lesson_5 && python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve Lesson_5
   
   # Using PHP
   php -S localhost:8000 -t Lesson_5
   ```
3. **VS Code**: Use Live Server extension for automatic reloading

---

## Development Workflow

### Adding New Lessons
1. Create a new directory: `Lesson_N/`
2. Create standard subdirectories: `css/`, `js/`, `img/`, `pages/`
3. Copy `reset.css` from Lesson_5 as starting point
4. Copy `style.css` for consistent design system
5. Create `index.html` as the entry point with standard header/nav structure

### Adding New Exercises (Lesson 5)
1. Create HTML page in `pages/` directory
2. Create JS file in `js/` directory with same base name
3. Link both in `index.html` exercise grid
4. Add navigation link to all page headers
5. Add to Learning Center with detailed breakdown
6. Update AGENTS.md with exercise description

### Adding Styles
1. Link `reset.css` first in the HTML `<head>`
2. Link custom `style.css` after reset
3. Follow existing naming conventions for classes
4. Add new component styles to `style.css` with section comment

### Image Assets
- Supported formats: `.webp`, `.jpg`, `.png`
- Store in `img/` directory within each lesson
- Use descriptive filenames or kebab-case

---

## Testing Strategy

**Manual Testing Checklist:**
- [ ] Page renders correctly in Chrome/Firefox/Safari/Edge
- [ ] Images load without 404 errors
- [ ] CSS styles apply correctly
- [ ] Form inputs accept user interaction
- [ ] Links navigate to correct destinations
- [ ] Responsive behavior works on mobile viewport
- [ ] JavaScript console shows no errors
- [ ] Interactive elements respond to user input

**No automated testing framework is configured** - this is an educational project.

---

## Git History

Recent commits (from `git log`):
- `77e1065` - flexbox
- `90daa9c` - Lesson2 Ex
- `4f98c1e` - addded things
- `59a6c81` - Compiti
- `7deab9f` - index nuovo

---

## Notes for AI Agents

1. **Language Context**: The project uses English for structure and most content, but some Italian terms appear in Lesson 3 forms (e.g., "Anagrafica", "Uomo", "Donna") and throughout Lesson 5 - this is intentional for learning purposes.

2. **CSS Folder Naming**: Lesson 3 uses `.css/` (hidden folder convention) while Lessons 2, 4, and 5 use `css/` - be aware of this inconsistency when referencing paths.

3. **No Dependencies**: Do not attempt to install npm packages, Python requirements, or other dependencies. This project has zero external dependencies.

4. **Float vs Flexbox**: Lesson 1 intentionally uses `float` layout for educational comparison. Modern pages should use Flexbox (Lesson 2+) or CSS Grid.

5. **Form Action**: Forms use `action="#"` as placeholder - no backend is configured.

6. **Design System Consistency**: When working on Lesson 5, maintain the wireframe design system:
   - Use existing CSS variables for colors
   - Use Caveat font for headings, Courier Prime for body
   - Follow the exercise-box / logic-panel two-column layout
   - Add new exercises to the Learning Center for educational completeness

7. **JavaScript Patterns**: 
   - All Lesson 5 exercises use the pattern: wait for `DOMContentLoaded`, select elements, add event listeners
   - Console logging is used for debugging and demonstration
   - Closures are used for private state management in advanced exercises

---

## Security Considerations

- This is a **client-side only** project - no server-side processing
- Form submissions go nowhere (`action="#"`)
- No authentication or authorization mechanisms
- No sensitive data handling
- Safe to open locally in browser
