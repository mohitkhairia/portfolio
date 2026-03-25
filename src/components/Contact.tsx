"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: "mohitkhairia@gmail.com",
          },
          publicKey
        );
      } else {
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.open(`mailto:mohitkhairia@gmail.com?subject=${subject}&body=${body}`);
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-neutral-500 mt-4 max-w-lg mx-auto">
            Whether you have a project in mind, need technical consulting, or
            want to discuss AI and engineering — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-neutral-950 border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:mohitkhairia@gmail.com"
                  className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600">Email</p>
                    <p className="text-sm text-white">mohitkhairia@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919680605583"
                  className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600">Phone</p>
                    <p className="text-sm text-white">+91 9680605583</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-neutral-400">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600">Location</p>
                    <p className="text-sm text-white">Alwar, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/mohitkhairia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-neutral-950 border border-white/5 flex items-center justify-center hover:border-white/20 transition-all group"
              >
                <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/mohitkhairia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-neutral-950 border border-white/5 flex items-center justify-center hover:border-white/20 transition-all group"
              >
                <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-neutral-500 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-500 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors text-sm"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-neutral-500 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors text-sm resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 rounded-lg bg-white text-black hover:bg-neutral-200 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent!"
                : status === "error"
                ? "Failed — Try Again"
                : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-neutral-300 text-sm text-center">
                Thank you! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-neutral-400 text-sm text-center">
                Something went wrong. Please email me directly at mohitkhairia@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
