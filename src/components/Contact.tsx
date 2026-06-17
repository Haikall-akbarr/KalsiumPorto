"use client";

import React, { useState } from "react";
import { IoMailOutline, IoLocationOutline, IoCallOutline } from "react-icons/io5";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage("Please fill in all fields before submitting.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setErrorMessage("Network error. Please check your internet connection.");
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  return (
    <section id="contact" className="section contact" aria-label="contact">
      <div className="container">
        <p className="section-subtitle">Hubungi Saya</p>
        <h2 className="h2 section-title">Hubungi Saya</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="section-text">
              Saya terbuka untuk mendiskusikan proyek baru, ide pengembangan aplikasi, kolaborasi pemrograman, atau integrasi AI. Hubungi saya langsung di bawah!
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <IoMailOutline />
              </div>
              <div>
                <p className="contact-info-title">Email Saya</p>
                <a href="mailto:haikalakbar.dev@gmail.com" className="contact-info-value">
                  haikalakbar.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <IoCallOutline />
              </div>
              <div>
                <p className="contact-info-title">Telepon</p>
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
                <p className="contact-info-title">Lokasi</p>
                <p className="contact-info-value">Banjarmasin, Kalimantan Selatan, Indonesia</p>
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
                {errorMessage || "Please fill in all the fields before submitting."}
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
