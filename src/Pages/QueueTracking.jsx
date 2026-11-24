import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock, FaTicket, FaUsers, FaUserDoctor } from "react-icons/fa6";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const QueueTracking = () => {
  return (
   <>
   <Header/>

    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-teal-600 font-semibold">LIVE QUEUE OVERVIEW</p>
          <h1 className="text-3xl font-bold text-[#102B46] mt-2">
            Queue Tracking
          </h1>
          <p className="text-slate-500 mt-2">
            View your token position and estimated waiting time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#102B46] text-white p-8 rounded-3xl">
            <p className="text-teal-300">YOUR TOKEN</p>
            <h2 className="text-6xl font-bold mt-3">T105</h2>
            <p className="text-slate-300 mt-3">Cardiology Department</p>

            <div className="grid grid-cols-2 gap-5 mt-9">
              <div>
                <p className="text-slate-400 text-sm">Current Token</p>
                <h3 className="text-2xl font-bold mt-1">T101</h3>
              </div>
              <div>
                <p className="text-slate-400 text-sm">People Ahead</p>
                <h3 className="text-2xl font-bold mt-1">04</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-center">
            <FaClock className="text-teal-600 text-4xl mb-4" />
            <p className="text-slate-500">Estimated Waiting Time</p>
            <h2 className="text-5xl font-bold text-[#102B46] mt-3">20 min</h2>
            <p className="text-teal-600 mt-4 font-semibold">
              Estimated time for demonstration
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 mt-7 shadow-sm">
          <h2 className="text-xl font-bold text-[#102B46] mb-7">
            Queue Progress
          </h2>

          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-0 w-full h-1 bg-slate-200"></div>
            <div className="absolute top-5 left-0 w-2/3 h-1 bg-teal-500"></div>

            <div className="relative text-center">
              <div className="w-11 h-11 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto">
                <FaCheckCircle />
              </div>
              <p className="font-semibold text-sm mt-3">Booked</p>
            </div>

            <div className="relative text-center">
              <div className="w-11 h-11 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto">
                <FaUsers />
              </div>
              <p className="font-semibold text-sm mt-3">Waiting</p>
            </div>

            <div className="relative text-center">
              <div className="w-11 h-11 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center mx-auto">
                <FaUserDoctor />
              </div>
              <p className="font-semibold text-sm mt-3">Consultation</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-7">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaTicket className="text-teal-600 text-2xl mb-3" />
            <p className="text-slate-500 text-sm">Total Queue</p>
            <h3 className="text-3xl font-bold text-[#102B46] mt-2">25</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaUsers className="text-teal-600 text-2xl mb-3" />
            <p className="text-slate-500 text-sm">Patients Ahead</p>
            <h3 className="text-3xl font-bold text-[#102B46] mt-2">04</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaClock className="text-teal-600 text-2xl mb-3" />
            <p className="text-slate-500 text-sm">Average Time</p>
            <h3 className="text-3xl font-bold text-[#102B46] mt-2">5 min</h3>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
   
   </>
  );
};

export default QueueTracking;
