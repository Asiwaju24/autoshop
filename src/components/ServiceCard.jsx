import React from "react";
import { 
  Check, 
  RotateCw, 
  Shield, 
  Clock, 
  ArrowRight,
  Zap,
  FileText,
  Award,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

// Card 1: Tire Service - Modern Gradient Design
export function TireServiceCard() {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 text-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Header */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <RotateCw className="w-8 h-8 text-white" />
          </div>
          <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
        
        <h2 className="text-2xl font-bold mb-3">Premium Tire Care</h2>
        <p className="text-blue-100 mb-6">
          Complete tire maintenance for optimal performance and safety
        </p>

        {/* Price */}
        
      </div>

      {/* Features */}
      <div className="bg-white/10 backdrop-blur-sm p-8">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Package Includes:
        </h3>
        <ul className="space-y-3">
          {[
            "Precision tire rotation",
            "Computer wheel balancing",
            "Tread depth analysis",
            "Pressure monitoring",
            "Lug nut torque spec",
            "Road force variation check"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-blue-100">
              <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="p-8 bg-white/5">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <Shield className="w-6 h-6 text-blue-300 mx-auto mb-2" />
            <p className="text-xs text-blue-200">24-month warranty</p>
          </div>
          <div>
            <Clock className="w-6 h-6 text-blue-300 mx-auto mb-2" />
            <p className="text-xs text-blue-200">60 min service</p>
          </div>
          <div>
            <Users className="w-6 h-6 text-blue-300 mx-auto mb-2" />
            <p className="text-xs text-blue-200">500+ served</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-8">
        <button className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
          <Link to="/booking">Get Tire Service</Link>
        </button>
      </div>
    </div>
  );
}

// Card 2: Engine Service - Tech Industrial Design
export function EngineServiceCard() {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl hover:shadow-gray-900/50 transition-all duration-300">
      {/* Header with Circuit Pattern */}
      <div className="relative p-8 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
            </div>
            <span className="bg-gray-900 text-orange-400 text-sm font-bold px-3 py-1 rounded-full border border-orange-400">
              ADVANCED
            </span>
          </div>
          
          <h2 className="text-2xl font-bold mb-3">Engine Diagnostics</h2>
          <p className="text-orange-100">
            Comprehensive engine analysis and performance optimization
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Price */}

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-orange-400 font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Diagnostic Features:
          </h3>
          <ul className="space-y-3">
            {[
              "Computerized engine scan",
              "Real-time performance data",
              "Emissions system check",
              "Fuel injection analysis",
              "Ignition system test",
              "ECU error code reading"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Specs */}
        <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
          <h4 className="text-orange-400 text-sm font-semibold mb-3">TECH SPECS</h4>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-gray-400">Accuracy:</span>
              <span className="text-white block">99.8%</span>
            </div>
            <div>
              <span className="text-gray-400">Time:</span>
              <span className="text-white block">90 min</span>
            </div>
            <div>
              <span className="text-gray-400">Reports:</span>
              <span className="text-white block">Digital + Print</span>
            </div>
            <div>
              <span className="text-gray-400">Warranty:</span>
              <span className="text-white block">18 months</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 flex items-center justify-center gap-2 group">
          <Link to="/booking">Diagnose Engine</Link>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

// Card 3: Brake Service - Safety Focus Design
export function BrakeServiceCard() {
  return (
    <div className="max-w-sm mx-auto bg-white border-2 border-red-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300">
      {/* Safety Header */}
      <div className="bg-red-600 text-white p-6 text-center">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Brake System Service</h2>
        <p className="text-red-100">Your safety is our priority</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Urgency Badge */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-800 font-semibold text-sm">
              Recommended every 12 months
            </span>
          </div>
        </div>

        {/* Pricing Options */}
        

        {/* Safety Features */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-red-600" />
            Safety Features:
          </h3>
          <ul className="space-y-2">
            {[
              "Brake pad thickness measurement",
              "Rotor surface inspection",
              "Fluid level and quality check",
              "Caliper function test",
              "ABS system diagnostic",
              "Road test verification"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Statistics */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-red-600">99.3%</div>
              <div className="text-xs text-gray-500">Safety Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">2.4M</div>
              <div className="text-xs text-gray-500">Miles Serviced</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200">
          <Link to="/booking">Check Brakes Now</Link>
        </button>
        <p className="text-center text-gray-500 text-xs mt-3">
          Free brake inspection with any service
        </p>
      </div>
    </div>
  );
}
