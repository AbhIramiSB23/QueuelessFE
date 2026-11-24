import React from "react";
import { Link } from "react-router-dom";
import { FaTicket, FaHospital, FaClock, FaUserDoctor } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const BookToken = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="bg-teal-600 text-white p-8 text-center">
          <FaRegCheckCircle className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Token Details</h1>
          <p className="text-teal-100 mt-2">
            Sample token confirmation preview
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="text-center border-b border-dashed border-slate-300 pb-8">
            <p className="text-slate-500 font-semibold">YOUR TOKEN NUMBER</p>
            <h2 className="text-7xl font-bold text-[#102B46] mt-3">T105</h2>
            <span className="inline-block mt-4 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
              Status: Confirmed
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-7 mt-8">
            <div className="flex gap-4 items-center">
              <div className="bg-teal-50 p-4 rounded-xl text-teal-600">
                <FaUserDoctor className="text-2xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Doctor</p>
                <h3 className="font-bold text-[#102B46]">Dr. Arun</h3>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-teal-50 p-4 rounded-xl text-teal-600">
                <FaHospital className="text-2xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Department</p>
                <h3 className="font-bold text-[#102B46]">Cardiology</h3>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-teal-50 p-4 rounded-xl text-teal-600">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Estimated Waiting</p>
                <h3 className="font-bold text-[#102B46]">20 Minutes</h3>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-teal-50 p-4 rounded-xl text-teal-600">
                <FaTicket className="text-2xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">People Ahead</p>
                <h3 className="font-bold text-[#102B46]">04 Patients</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Please arrive before your estimated appointment time.
            </p>
          </div>

          <Link
            to="/queue-tracking"
            className="block text-center bg-[#102B46] text-white rounded-xl p-4 mt-7 font-semibold"
          >
            Track My Queue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookToken;
