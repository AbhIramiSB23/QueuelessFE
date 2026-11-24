import React from "react";
import { Link } from "react-router-dom";
import {
  FaTicket,
  FaClock,
  FaCalendarCheck,
  FaUserDoctor,
  FaArrowRight,
} from "react-icons/fa6";

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <p className="text-teal-600 font-semibold">PATIENT PORTAL</p>
            <h1 className="text-3xl font-bold text-[#102B46] mt-2">
              Welcome, Patient!
            </h1>
            <p className="text-slate-500 mt-2">
              Manage your hospital visits in one place.
            </p>
          </div>

          <Link
            to="/booking"
            className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            + Book Appointment
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaTicket className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Total Tokens</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">08</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaClock className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Waiting Time</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">20 min</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaCalendarCheck className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Appointments</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">03</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaUserDoctor className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Departments</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">06</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-7 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#102B46]">
                Current Token
              </h2>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
                In Queue
              </span>
            </div>

            <div className="bg-[#102B46] text-white p-7 rounded-2xl">
              <p className="text-teal-300">Your Token Number</p>
              <h1 className="text-6xl font-bold mt-3">T105</h1>
              <div className="grid grid-cols-2 gap-5 mt-8">
                <div>
                  <p className="text-slate-300 text-sm">Department</p>
                  <p className="font-semibold mt-1">Cardiology</p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Estimated Waiting</p>
                  <p className="font-semibold mt-1">20 Minutes</p>
                </div>
              </div>
            </div>

            <Link
              to="/queue-tracking"
              className="text-teal-700 font-semibold flex items-center gap-2 mt-6"
            >
              Track Your Queue <FaArrowRight />
            </Link>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-[#102B46] mb-6">
              Quick Access
            </h2>

            <div className="space-y-4">
              <Link
                to="/booking"
                className="block bg-teal-50 p-4 rounded-xl text-teal-800 font-semibold"
              >
                Book New Token
              </Link>
              <Link
                to="/book-token"
                className="block bg-slate-100 p-4 rounded-xl text-[#102B46] font-semibold"
              >
                Token Details
              </Link>
              <Link
                to="/queue-tracking"
                className="block bg-slate-100 p-4 rounded-xl text-[#102B46] font-semibold"
              >
                Queue Status
              </Link>
              <Link
                to="/chatbot"
                className="block bg-slate-100 p-4 rounded-xl text-[#102B46] font-semibold"
              >
                AI Assistant
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white p-7 rounded-2xl shadow-sm mt-6">
          <h2 className="text-xl font-bold text-[#102B46] mb-5">
            Recent Appointments
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-55">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="p-4">Token</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Doctor</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">T105</td>
                  <td className="p-4">Cardiology</td>
                  <td className="p-4">Dr. Arun</td>
                  <td className="p-4 text-green-600">In Queue</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">T082</td>
                  <td className="p-4">General Medicine</td>
                  <td className="p-4">Dr. Meera</td>
                  <td className="p-4 text-slate-500">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
