"use client";
export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // CRITICAL: stops page reload

    const form = e.currentTarget;
    const nameInput = form.querySelector<HTMLInputElement>("#name")!;
    const emailInput = form.querySelector<HTMLInputElement>("#email")!;
    const messageInput = form.querySelector<HTMLTextAreaElement>("#message")!;
    const successMsg = document.getElementById("form-success")!;
    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));

    // Validate name
    if (nameInput.value.trim() === "") {
      document.getElementById("name-error")!.textContent = "Name is required.";
      valid = false;
    }

    // Validate email using browser built-in validity API
    if (!emailInput.validity.valid) {
      document.getElementById("email-error")!.textContent =
        "Please enter a valid email address.";
      valid = false;
    }

    // Validate message length
    if (messageInput.value.trim().length < 10) {
      document.getElementById("message-error")!.textContent =
        "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      form.style.display = "none";
      successMsg.style.display = "block";
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Jane Doe" />
          <span id="name-error" className="error-msg" role="alert" aria-live="polite"></span>
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="jane@example.com" />
          <span id="email-error" className="error-msg" role="alert" aria-live="polite"></span>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} placeholder="Write your message here..."></textarea>
          <span id="message-error" className="error-msg" role="alert" aria-live="polite"></span>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div id="form-success" style={{ display: "none" }} role="status" aria-live="polite">
        <h2>Thank you! Your message has been received.</h2>
        <p>We will get back to you within 1-2 business days.</p>
      </div>
    </div>
  );
}
