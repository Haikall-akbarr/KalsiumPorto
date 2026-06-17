"use client";

import React, { useState } from "react";
import { IoMailOutline, IoLocationOutline, IoCallOutline } from "react-icons/io5";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  return (
    <section id="contact" className="section contact" aria-label="contact">
      <div className="container">
        <p className="section-subtitle">Get In Touch</p>
        <h2 className="h2 section-title">Contact Me</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="section-text">
              I am open to discussing new projects, creative design ideas, or engineering opportunities. Let&apos;s build something amazing together!
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <IoMailOutline />
              </div>
              <div>
                <p className="contact-info-title">Email Me</p>
                <a href="mailto:info@haekalakbar.com" className="contact-info-value">
                  info@haekalakbar.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <IoCallOutline />
              </div>
              <div>
                <p className="contact-info-title">Call Me</p>
                <a href="tel:+628123456789" className="contact-info-value">
                  +62 812 3456 789
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <IoLocationOutline />
              </div>
              <div>
                <p className="contact-info-title">Location</p>
                <p className="contact-info-value">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your Name"
                disabled={status === "sending"}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Your Email"
                disabled={status === "sending"}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell me about your project..."
                disabled={status === "sending"}
                required
              ></textarea>
            </div>

            {status === "success" && (
              <div className="form-status success">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="form-status error">
                Please fill in all the fields before submitting.
              </div>
            )}

            <button
              type="submit"
              className="btn"
              disabled={status === "sending"}
            >
              <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
