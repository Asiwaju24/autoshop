import { useState } from "react";
import React from "react";
import { Mail, Clock, Settings, Home, User, Phone } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Hero from "../assets/hero-car1.jpg"; // Replace with your actual image path



export default function AutoShopWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fake submission delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     


      {/* About Section */}
      

      {/* Services */}
      

      {/* Contact */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-center text-3xl font-bold mb-12 md:text-4xl">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-600">
                  <User className="text-blue-600" /> +2349066964407
                </p>
                <p className="flex items-center gap-3 text-gray-600">
                  <Phone className="text-blue-600" /> +2347054453539
                </p>
                <p className="flex items-center gap-3 text-gray-600">
                  <Mail className="text-blue-600" /> arautomotivetechnologycompany@gmail.com
                </p>
                <p className="flex items-center gap-3 text-gray-600">
                  <Clock className="text-blue-600" /> Mon-Fri: 8am - 6pm | Sat:
                  9am - 3pm
                </p>
              </div>
            </div>

            {/* Contact Form */}
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} AR AutoRepair. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
