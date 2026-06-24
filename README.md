# Google IT Support Cert — Study Guide

![Status](https://img.shields.io/badge/status-in%20progress-yellow) ![Courses](https://img.shields.io/badge/courses-4%20of%205%20complete-blue) ![Questions](https://img.shields.io/badge/questions-120-cyan)

A personal study site I'm building alongside the Google IT Support Professional Certificate. Notes, flashcards, and quizzes as I go through each course.

## What's in here

- **Course notes** — each course gets its own page with organized, collapsible sections. Content gets added as I study, not all at once.
- **Rapid fire flashcards** — 148 open-ended cards across all courses, shuffled every session.
- **Multiple choice quiz** — 120 questions (30 per course), same deal, shuffled. Good cert prep since the real thing is multiple choice.
- **Daily question** — one MC question a day on the homepage, rotates automatically.
- **Resources** — downloadable reference sheets (ports, subnetting, CLI commands cheat sheet).
- **Subnet practice** — interactive subnetting tool linked from Course 2. Favorite part hands down
- **CLI practice** — type-the-command terminal game linked from Course 3. 5 random questions per round from a shuffled pool.

## Courses

1. Technical Support Fundamentals ✅
2. Bits & Bytes of Networking ✅
3. Operating Systems ✅
4. System Administration ✅
5. IT Security ← in progress

## Running it

No build step, no dependencies. Just open `index.html` in a browser or serve it locally:

```
python3 -m http.server 8080
```

Stack: vanilla HTML, CSS, and JS. Built by vibe coding with Claude off my own course notes.

---

Side thought — is vanilla HTML/CSS/JS the move now with AI? Feels like you can get static sites up so fast with no framework bloat. Idk, just a thought.

### To Do
- Separate inline JS to own JS files
- Generally clean up this project structure 