import { Zap, Settings } from "lucide-react";
import React from "react";
import { HashLink } from "react-router-hash-link";
import Hero from "../assets/hero_images/hero-img.jpg"; 
import { Clock, User } from "lucide-react";
import { services } from "../constants/index"; 
import { Link } from "react-router-dom";

 
export default function Home() {
  

  return (
    <>
      <section
  className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white"
  id="home"
>
  <div className="container mx-auto px-4 py-24 md:py-32">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Expert Auto Repair Services You Can Trust
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          Quality automotive care with honest pricing and exceptional
          customer service.
        </p>

        <div className="flex flex-wrap gap-4">
          <HashLink
            smooth
            to="/booking"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-medium text-white transition"
          >
            Book an Appointment
          </HashLink>

          <Link
            smooth
            to="/services"
            className="border border-white font-bold px-8 py-4 rounded-lg text-lg text-white hover:bg-white hover:text-gray-900 transition"
          >
           Our Services
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={Hero}   // put your image in public/ folder or import it
          alt="Hero Car"
          className="w-full h-[300px] max-w-md rounded-lg shadow-lg"
        />
      </div>

    </div>
  </div>
</section>
<section className="py-16" id="about">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            About Our Auto Shop
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            With over 25 years of experience, our certified technicians provide
            reliable and affordable auto repair services.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 mx-auto">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Techs</h3>
              <p className="text-gray-600">
                ASE-certified professionals with extensive training.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                Most repairs completed same day or within 24 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 mx-auto">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty</h3>
              <p className="text-gray-600">
                12-month/12,000-mile warranty on all repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16" id="service">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 md:text-4xl">
            Our Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-100">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                    <p className="text-sm text-gray-500">
                      {service.duration}
                     
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}
