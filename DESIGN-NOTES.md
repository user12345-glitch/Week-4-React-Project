## Week 3: Interactive Features
### Feature 1. Theme Toggle
What it does: 
There is a button in the navigation bar that lets the user switch the site between a color scheme and a dark color scheme. 
Why it matters: 
People want to be able to control how bright their screen is, especially when they are in a room with light. If a website only has one color scheme it can hurt people’s eyes, making it hard for them to use the site if they have trouble with their vision.
Events involved:
- When the user clicks the toggle button it triggers the theme to switch.
- When the page loads it checks the users storage to see what theme they like so the right theme shows up away.
State to track:
- The theme is stored as a string that says either "light" or "dark" and it is saved in the user’s storage.
- This theme is also shown as an attribute on the html tag and all the colors on the site change based on this attribute.

### Feature 2. Form Validation (Contact Form)
What it does: 
The contact form on the contact page checks all the fields, like name and email and message to make sure they are filled out right before it lets the user submit the form. If something is wrong it shows an error message under the field that needs to be fixed. If everything is filled out right it hides the form. Shows a success message.
Why it matters: 
If the form does not check for mistakes away the user will not know something is wrong until they try to submit the form and the page reloads. If the form checks for mistakes as the user types they can fix them away and it makes it more likely that they will be able to submit the form successfully.
Events involved:
- When the user tries to submit the form it stops the page from reloading so that the form can be checked for mistakes.

State to track:
- We need to keep track of whether the form is valid or not. The form is only accepted if it is valid.
- We need to keep track of the error messages, for each field and show them to the user.
- We also need to keep track of whether the form has been submitted which we can do by hiding the form and showing a success message.


# Week 4: Component Architecture
app/
│
├── contact/
│   └── page.tsx
│
├── globals.css
├── layout.tsx
├── page.tsx
│
components/
│
├── Header.tsx
├── Footer.tsx
├── Nav.tsx
├── Card.tsx
├── ThemeToggle.tsx
├── ContactForm.tsx

## State Ownership

ThemeToggle
- Holds theme state using useState
- Uses useEffect with localStorage
- Client Component

ContactForm
- Holds form state and validation
- Controlled inputs
- Client Component

Header/Footer/Nav/Card
- Stateless
- Server Components