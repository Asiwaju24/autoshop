
import React from "react";
import { TireServiceCard, EngineServiceCard, BrakeServiceCard } from "../components/ServiceCard";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional auto care services to keep your vehicle running smoothly and safely. 
            Trust our certified technicians for quality workmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <TireServiceCard />
          <EngineServiceCard />
          <BrakeServiceCard />
          
          {/* If you want to add more cards, you can create additional components */}
          {/* <OilServiceCard /> */}
          {/* <ACServiceCard /> */}
          {/* <BatteryServiceCard /> */}
        </div>

        {/* Additional Content */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-600">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Certified Technicians</h3>
              <p className="text-sm">ASE-certified professionals with years of experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Quick Service</h3>
              <p className="text-sm">Most services completed same day or within 24 hours</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">Warranty</h3>
              <p className="text-sm">12-month warranty on all parts and labor</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Service Your Vehicle?</h2>
          <p className="text-gray-600 mb-6">Schedule an appointment with our expert technicians today.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            <Link to="/booking">Book Appointment Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}