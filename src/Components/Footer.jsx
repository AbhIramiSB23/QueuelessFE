import React from "react";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#102B46] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-teal-500 p-3 rounded-xl">
              <FaHospital className="text-2xl" />
            </div>

            <h2 className="text-2xl font-bold">
              Queue<span className="text-teal-400">Less</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm leading-7">
            A smart hospital queue management system designed to make patient
            visits easier, faster and more convenient.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5 text-teal-400">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <Link to="/" className="hover:text-teal-400">
              Home
            </Link>
            <Link to="/booking" className="hover:text-teal-400">
              Book Appointment
            </Link>
            <Link to="/queue-tracking" className="hover:text-teal-400">
              Track Queue
            </Link>
            <Link to="/chatbot" className="hover:text-teal-400">
              AI Assistant
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5 text-teal-400">
            Our Features
          </h3>

          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <p>Online Token Booking</p>
            <p>Real-Time Queue Tracking</p>
            <p>Waiting Time Prediction</p>
            <p>Emergency Priority</p>
            <p>AI Patient Assistance</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5 text-teal-400">
            Contact Us
          </h3>

          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <p className="flex items-center gap-3">
              <FaPhone className="text-teal-400" />
              +91 98765 43210
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-teal-400" />
              support@queueless.com
            </p>

            <p className="flex items-center gap-3">
              <FaLocationDot className="text-teal-400" />
              Kerala, India
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-400">
          <p>© 2026 QueueLess. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-red-400" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
