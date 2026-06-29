# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

No build step. Open any `.html` file directly in a browser, or serve locally:

```
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Architecture

**Vanilla HTML/CSS/JS — no dependencies, no bundler, no package manager.**

```
index.html                        ← dashboard with course cards + progress bars
style.css                         ← single shared stylesheet for all pages
courses/
  01-technical-support-fundamentals.html
  02-bits-and-bytes-networking.html
  03-operating-systems.html
  04-system-administration.html
  05-it-security.html
```

### CSS design system

All pages share `style.css`. Course pages override the accent colour palette via a `data-course="NN"` attribute on `<body>`:

```css
[data-course="02"] { --accent: #0891b2; --accent-light: #22d3ee; --accent-dim: rgba(8,145,178,.12); }
```

Core CSS variables are defined in `:root` and used everywhere — `--bg-0/1/2/3`, `--border`, `--text-0/1/2/3`, `--accent`, `--accent-light`, `--accent-dim`, `--success`, `--warning`, `--danger`, `--font-body`, `--font-mono`.

### Progress persistence

Progress is stored in `localStorage` under the key `itcert_progress` as a flat JSON object mapping section IDs to booleans:

```json
{ "c02-s1": true, "c02-s3": true }
```

Section checkboxes carry `data-section="cXX-sY"`. The index page reads this store to render per-course progress bars; it maps course IDs to their expected section arrays in a `SECTIONS` constant at the bottom of `index.html`.

If you add a new section to a course, add its ID to the `SECTIONS` map in `index.html` and update the `— / N sections` label on the matching course card.

### Accordion pattern

Each collapsible section is a `.topic-section` div. Opening/closing works by toggling the `.open` class and setting `body.style.maxHeight` to `scrollHeight` (open) or `0` (closed). **Any time content inside an open section changes height dynamically** (e.g., an interactive tool showing feedback), call `refreshHeight(el)` with any element inside that section to recalculate the max-height.

### Adding content to a course page

Each course page follows this repeating structure inside `.section-list`:

```html
<div class="topic-section" id="sN">
  <div class="section-header" onclick="toggleSection(this)">
    …checkbox with data-section="cXX-sN"…
  </div>
  <div class="section-body">
    <div class="section-inner">
      <div class="subsection">
        <p class="subsection-title">…</p>
        …content using .concept-list, .ref-table, .layer-table, .term-grid, .math-block, .example-box, .note…
      </div>
      <div class="practice-section">…</div>
    </div>
  </div>
</div>
```

Interactive tools (quizzes, calculators) go inside a `.subsection`. Their JS lives in the page-level `<script>` block at the bottom of the file, wrapped in an IIFE. Global handler functions (`onclick="…"`) are exposed via `window.fnName = function`.

### Practice questions & Rapid Fire

`quiz.html` is the Rapid Fire page — a timed MC/flashcard drill that pulls from a shared question pool defined in `questions.js` files per course/module. When adding a new module's HTML content, also add the corresponding MC questions batch so they appear in Rapid Fire.

The `.practice-section` at the bottom of each `.section-inner` holds collapsible short-answer questions (`.practice-btn` → `.practice-body` → `.q-list` / `.a-list`). The flashcard modal (`.quiz-overlay` / `.quiz-modal`) is triggered by `.quiz-me-btn` buttons and renders term-definition pairs for that section.

### Mobile nav

The navbar uses a burger menu on mobile (≤700 px). The `<button class="nav-burger">` and `<div class="nav-mobile-menu">` are present in **all 8 HTML files** (5 course pages + `index.html`, `quiz.html`, `resources.html`). Toggle state is `.menu-open` on `.site-nav`; a close-on-outside-click `<script>` block lives right after `</nav>` on each page. If you add a new page or nav link, update all 8 files.
