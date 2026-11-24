import React from "react";
import { Link } from "react-router-dom";
import { FaHospital, FaBars, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-[#102B46] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-teal-500 p-3 rounded-xl">
            <FaHospital className="text-2xl text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Queue<span className="text-teal-400">Less</span>
            </h1>
            <p className="text-xs text-slate-300">
              Smart Hospital Queue System
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-teal-400 transition">
            Home
          </Link>
          <Link to="/booking" className="hover:text-teal-400 transition">
            Book Appointment
          </Link>
          <Link to="/queue-tracking" className="hover:text-teal-400 transition">
            Track Queue
          </Link>
          <Link to="/chatbot" className="hover:text-teal-400 transition">
            AI Assistant
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden sm:block border border-teal-400 text-teal-300 px-5 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-teal-500 px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            Register
          </Link>

          <FaBars className="text-xl md:hidden text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
