"use client";
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, label, children }) => (
  <div className="flex items-start">
    <div className="w-6 h-6 text-primary mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold mb-1 text-foreground">{label}</h3>
      <div className="text-muted-foreground text-sm">{children}</div>
    </div>
  </div>
);

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder = "",
  rows,
}) => (
  <div>
    <label htmlFor={id} className="block text-foreground mb-2">
      {label}
    </label>
    {rows ? (
      <textarea
        id={id}
        rows={rows}
        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
    ) : (
      <input
        id={id}
        type={type}
        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
    )}
  </div>
);

export const ContactUs: React.FC = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions about our immigration services? Contact us today for a consultation.
          </p>

          <div className="space-y-6">
            <ContactMethod icon={<Phone />} label="Phone">
              +1 (555) 123-4567
            </ContactMethod>
            <ContactMethod icon={<Mail />} label="Email">
              info@visaland.com
            </ContactMethod>
            <ContactMethod icon={<MapPin />} label="Address">
              123 Business Street, Suite 100<br />
              New York, NY 10001
            </ContactMethod>
            <ContactMethod icon={<Clock />} label="Business Hours">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM
            </ContactMethod>
          </div>
        </div>

        {/* Right column (form) */}
        <div>
          <form className="bg-card p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField id="name" label="Name" placeholder="Your name" />
              <InputField id="email" label="Email" type="email" placeholder="Your email" />
            </div>
            <InputField id="subject" label="Subject" placeholder="Subject" />
            <InputField
              id="message"
              label="Message"
              rows={5}
              placeholder="Your message"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
