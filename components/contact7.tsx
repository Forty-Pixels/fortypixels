"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { openCalendly } from "@/lib/calendly";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Contact the support team at Shadcnblocks.",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "example@shadcnblocks.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "+123 456 7890",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
}: Contact7Props) => {
  return (
    <section className="bg-background px-5 py-12 md:py-24">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-14 text-center md:text-left">
          <h1 className="mb-3 mt-2 text-balance text-3xl font-bold md:text-5xl text-black">
            {title}
          </h1>
          <p className="text-gray-600 max-w-xl text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Column 1: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-black">Get in touch</h3>
              <p className="text-gray-600 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message or book a call to get started.
              </p>
            </div>

            {email && (
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-xl shrink-0">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-black mb-1">{emailLabel}</p>
                  <p className="text-sm text-gray-600 mb-2">{emailDescription}</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-black font-medium hover:underline underline-offset-4"
                  >
                    {email}
                  </a>
                </div>
              </div>
            )}
          </div>


          {/* Column 2: Lead Capture Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-6 hover:cursor-pointer">Send a Message</h3>
            <ContactForm />
          </div>

          {/* Column 3: CTA Card */}
          <div className="bg-[#B9FF66] rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <div className="bg-black/10 p-3 rounded-xl w-fit mb-6">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{chatLabel}</h3>
              <p className="text-black/80 leading-relaxed mb-8">
                {chatDescription}
              </p>
            </div>

            <button
              onClick={openCalendly}
              className="w-full bg-black text-white font-medium py-4 rounded-xl text-center hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
            >
              {chatLink}
              <MessageCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
  ;

// Contact Form Component with Web3Forms Integration
const ContactForm = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const formData = new FormData(event.currentTarget);

    // Add Web3Forms access key
    formData.append("access_key", "a4ee5954-60ba-4db0-8ecb-1974362b5486");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We'll get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] focus:border-transparent transition-all"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="name@example.com"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] focus:border-transparent transition-all"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={500}
          placeholder="Tell us about your project... (Max 500 chars)"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] focus:border-transparent transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white font-medium py-4 rounded-xl hover:bg-gray-800 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
      {result && (
        <p className={`text-sm text-center ${result.includes("success") ? "text-green-600" : "text-red-600"}`}>
          {result}
        </p>
      )}
    </form>
  );
};

export { Contact7 };
