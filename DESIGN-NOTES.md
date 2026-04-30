## Week 3: Interactive Features

### Feature 1 — Theme Toggle

**What it does:**
A button in the navigation bar switches the site between light and dark
color schemes, saving the user's preference so it persists across page
loads and navigation.

**Why it matters:**
Users increasingly expect control over display brightness, especially
in low-light environments. Forcing a single color scheme creates eye
strain and reduces accessibility for users with visual sensitivities.

**Events involved:**
- `click` — fires when the user presses the toggle button, triggering
  the theme switch.
- Page initialization reads `localStorage` synchronously so no visible
  flash of the wrong theme occurs.

**State to track:**
- `theme` — a string, either `"light"` or `"dark"`, stored in
  `localStorage` and reflected as a `data-theme` attribute on
  `<html>`. All color CSS variables react to this attribute.

---

### Feature 2 — Form Validation (Contact Form)

**What it does:**
A contact form on the `/contact` page validates all three fields
(name, email, message) inline before accepting the submission,
displaying contextual error messages beneath each field and
replacing the form with a success message on valid input.

**Why it matters:**
Without inline validation, users only discover mistakes after a full
page reload or — in a single-page context — not at all. Immediate,
field-level feedback reduces frustration and increases successful
form completion rates.

**Events involved:**
- `submit` — fires on the `<form>` element; `event.preventDefault()`
  stops the browser's default page reload so we can handle validation
  in JavaScript.
- `input` (optional enhancement) — could be used to clear error
  messages as the user corrects a field in real time.

**State to track:**
- `valid` — a boolean that aggregates all field checks; the form is
  only accepted when `true`.
- Individual error strings per field — updated in the DOM as `textContent`
  of dedicated `<span role="alert">` elements.
- `formSubmitted` — implicit in the DOM (form is hidden, success div
  is shown) after a successful validation pass.
