"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function validate() {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters.";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) return;

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({
      name: "",
      email: "",
      message: "",
    });
  }

  if (submitted) {
    return (
      <div className="card">
        <h2>Thank you! 🎉</h2>

        <p>Your message has been successfully sent.</p>

        <button onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <p>
        Fill out the form below and we will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />

          {errors.name && (
            <span className="error-msg">{errors.name}</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="user@example.com"
          />

          {errors.email && (
            <span className="error-msg">{errors.email}</span>
          )}
        </div>

        <div>
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          />

          {errors.message && (
            <span className="error-msg">{errors.message}</span>
          )}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
