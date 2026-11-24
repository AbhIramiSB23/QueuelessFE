import React from "react";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaClock,
  FaTicket,
  FaRobot,
  FaUserDoctor,
  FaArrowRight,
  FaShieldHeart,
} from "react-icons/fa6";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    
   <div>
    <Header/>


     <div className="bg-slate-50 min-h-screen">
      <section className="bg-[#102B46] text-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-400 font-semibold mb-4 tracking-widest">
              SMART HEALTHCARE EXPERIENCE
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Less Waiting.
              <span className="text-teal-400"> Better Care.</span>
            </h1>

            <p className="text-slate-300 mt-6 leading-8 text-lg">
              Experience a smarter way to manage hospital visits. Book tokens
              online, track your queue and plan your visit with QueueLess.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/booking"
                className="bg-teal-500 hover:bg-teal-600 px-7 py-3 rounded-lg font-semibold flex items-center gap-3"
              >
                Book Your Token <FaArrowRight />
              </Link>

              <Link
                to="/queue-tracking"
                className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-[#102B46]"
              >
                Track Queue
              </Link>
            </div>

            <div className="flex gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-teal-400">24/7</h3>
                <p className="text-sm text-slate-300">Online Access</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-teal-400">Smart</h3>
                <p className="text-sm text-slate-300">Queue Tracking</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-teal-400">Easy</h3>
                <p className="text-sm text-slate-300">Token Booking</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 text-[#102B46] shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-slate-500 text-sm">Queue Overview</p>
                <h2 className="text-2xl font-bold">Today's Activity</h2>
              </div>
              <div className="bg-teal-100 text-teal-700 p-4 rounded-2xl">
                <FaHospital className="text-3xl" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl">
                <FaTicket className="text-teal-600 text-2xl mb-3" />
                <h3 className="text-3xl font-bold">128</h3>
                <p className="text-slate-500 text-sm">Tokens Issued</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <FaClock className="text-teal-600 text-2xl mb-3" />
                <h3 className="text-3xl font-bold">15 min</h3>
                <p className="text-slate-500 text-sm">Avg. Waiting Time</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <FaUserDoctor className="text-teal-600 text-2xl mb-3" />
                <h3 className="text-3xl font-bold">12</h3>
                <p className="text-slate-500 text-sm">Available Doctors</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <FaShieldHeart className="text-teal-600 text-2xl mb-3" />
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-slate-500 text-sm">Patient Support</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-5">
              Illustrative sample dashboard data
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#102B46] mt-2">
            Healthcare Made Simpler
          </h2>
          <p className="text-slate-500 mt-3">
            Everything you need for a smoother hospital visit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100">
            <FaTicket className="text-3xl text-teal-600 mb-5" />
            <h3 className="text-xl font-bold text-[#102B46]">Online Booking</h3>
            <p className="text-slate-500 text-sm leading-7 mt-3">
              Book your hospital token from anywhere.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100">
            <FaClock className="text-3xl text-teal-600 mb-5" />
            <h3 className="text-xl font-bold text-[#102B46]">Queue Tracking</h3>
            <p className="text-slate-500 text-sm leading-7 mt-3">
              View your queue position and estimated waiting time.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100">
            <FaRobot className="text-3xl text-teal-600 mb-5" />
            <h3 className="text-xl font-bold text-[#102B46]">AI Assistant</h3>
            <p className="text-slate-500 text-sm leading-7 mt-3">
              Get assistance with common patient questions.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100">
            <FaUserDoctor className="text-3xl text-teal-600 mb-5" />
            <h3 className="text-xl font-bold text-[#102B46]">
              Doctor Selection
            </h3>
            <p className="text-slate-500 text-sm leading-7 mt-3">
              Explore departments and available doctors.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-600 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Your Time Matters. Your Health Matters.
        </h2>
        <p className="mt-4 text-teal-50">
          Start your smarter hospital experience with QueueLess.
        </p>
        <Link
          to="/register"
          className="inline-block mt-7 bg-white text-teal-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-100"
        >
          Get Started
        </Link>
      </section>
    </div>

    <Footer/>
   </div>
  );
};

export default Home;
