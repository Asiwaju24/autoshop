// src/pages/About.jsx
import React from 'react';
import { 
  Users, 
  Award, 
  Shield, 
  Clock, 
  Star, 
  Car, 
  Wrench, 
  MapPin,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

// Team members data
const teamMembers = [
  {
    name: "Michael Rodriguez",
    position: "Master Technician",
    experience: "15+ years",
    specialty: "Engine Diagnostics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sarah Johnson",
    position: "Service Manager",
    experience: "12+ years",
    specialty: "Customer Relations",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "James Wilson",
    position: "Brake Specialist",
    experience: "10+ years",
    specialty: "Brake Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Chen",
    position: "Electrical Systems Expert",
    experience: "8+ years",
    specialty: "Auto Electronics",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  }
];

// Stats data
const stats = [
  { number: "20+", label: "Years Experience", icon: Calendar },
  { number: "10,000+", label: "Cars Serviced", icon: Car },
  { number: "98%", label: "Customer Satisfaction", icon: Star },
  { number: "24/7", label: "Roadside Assistance", icon: Clock }
];

// Values data
const values = [
  {
    icon: Shield,
    title: "Quality Workmanship",
    description: "We stand behind every repair with a 12-month warranty and use only premium parts."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We communicate clearly and provide honest recommendations."
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Our technicians are ASE-certified and continuously trained on the latest automotive technologies."
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "We respect your time and work efficiently to get you back on the road as quickly as possible."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Auto Repair</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted auto repair services with over 20 years of excellence in keeping your vehicles running smoothly.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2003, Auto Repair started as a small family-owned garage with a simple mission: 
                  to provide honest, quality auto repairs at fair prices. What began as a two-bay shop has grown 
                  into a full-service automotive center serving thousands of satisfied customers.
                </p>
                <p>
                  Our founder, Alex Rodriguez, believed that auto repair should be transparent and trustworthy. 
                  Today, we continue that legacy by investing in the latest technology and ongoing training for 
                  our team of certified technicians.
                </p>
                <p>
                  We take pride in being more than just a repair shop – we're your partners in vehicle maintenance, 
                  ensuring your safety and peace of mind on the road.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
                alt="Our auto repair shop"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-1">{member.experience} experience</p>
                  <p className="text-sm text-gray-500">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Quality Auto Care?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust AR Auto Repair with their vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HashLink
              smooth
              to="/booking#"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Book an Appointment
            </HashLink>
            <HashLink
              smooth
              to="/contact#"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </HashLink>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Visit Our Shop</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Our Location
                </h3>
                <p className="text-gray-600 mb-4">123 Auto Street<br />City, State 12345</p>
                
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Business Hours
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">info@autorepair.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872426608!3d40.75473897138839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f9f3f3b3d%3A0x9cce7a5b4b4b4b4b!2sAuto%20Repair%20Shop!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="AR Auto Repair Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}