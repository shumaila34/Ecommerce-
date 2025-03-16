"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <main className="flex-1 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 text-center bg-blue-50">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-blue-800">Contact Us</h1>
          <p className="text-lg max-w-xl mx-auto mt-4 text-blue-600">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-blue-700">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  text: "123 EcoStore Street, Green City, EC 12345",
                },
                { icon: Phone, title: "Phone", text: "+1 (234) 567-8900" },
                { icon: Mail, title: "Email", text: "support@ecostore.com" },
                {
                  icon: Clock,
                  title: "Business Hours",
                  text: "Mon-Fri: 9 AM - 6 PM\nSat: 10 AM - 4 PM\nSun: Closed",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-blue-100 p-4 rounded-lg shadow"
                >
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-white border-blue-300"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-white border-blue-300"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white border-blue-300"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="bg-white border-blue-300"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[150px] bg-white border-blue-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-700 text-white hover:bg-blue-600 py-3 font-semibold rounded-md"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
