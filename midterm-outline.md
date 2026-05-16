# Midterm Presentation Outline

## Section 1 — Overview & Target User (~90 sec)

- Introduction to the Week 4 Next.js project
- Purpose of the website and what it demonstrates
- Target users: students, lecturers, and beginner web users
- Reason for choosing the project:
  - practice React and Next.js concepts
  - improve frontend architecture skills
  - implement responsive and interactive design
- Main technologies used:
  - Next.js
  - React
  - TypeScript
  - CSS


## Section 2 — Live Walkthrough (~3 min)

1. Open homepage
   - Show navigation bar
   - Show reusable card sections
   - Explain responsive layout

2. Demonstrate navigation links
   - Move between pages
   - Show consistent design system

3. Demonstrate dark/light mode toggle
   - Switch themes
   - Explain CSS variables
   - Refresh browser to show localStorage persistence

4. Demonstrate responsive design
   - Resize browser window
   - Show layout adapting to smaller screens

5. Demonstrate contact form
   - Enter sample data
   - Show validation messages
   - Explain React state updates

6. Briefly show project structure in VS Code
   - components folder
   - app folder
   - reusable components


## Section 3 — Architectural Decisions (~3 min)

### Decision 1 — Semantic HTML
- Used semantic elements:
  - header
  - nav
  - main
  - footer
  - article
- Improved accessibility and structure
- Rejected alternative:
  - using only generic div elements

### Decision 2 — Shared Design System
- Used CSS variables for reusable styling
- Maintained consistent colors and layouts
- Supported dark/light themes
- Rejected alternative:
  - repeating inline styles across pages

### Decision 3 — React State Management
- Used useState for:
  - theme switching
  - form handling
  - validation
- Interface updates automatically
- Rejected alternative:
  - manual DOM manipulation using vanilla JavaScript

### Decision 4 — Component Architecture
- Created reusable components:
  - Nav
  - Card
  - ThemeToggle
  - ContactForm
- Reduced repeated code
- Improved scalability and maintenance
- Rejected alternative:
  - placing all code inside one large page file

---

## Section 4 — Reflection (~90 sec)

### One Thing I Would Reverse
- Improve state organization earlier
- Reduce repeated logic from the beginning

### One Thing I Am Proud Of
- Successfully implemented reusable components and dark/light mode

### What’s Next
- Improve backend integration and add more advanced features in future versions
