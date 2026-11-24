import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaUserDoctor,
  FaHospital,
  FaArrowRight,
} from "react-icons/fa6";

const Booking = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-teal-600 font-semibold">ONLINE APPOINTMENT</p>
          <h1 className="text-3xl font-bold text-[#102B46] mt-2">
            Book Your Appointment
          </h1>
          <p className="text-slate-500 mt-2">
            Select your department and preferred doctor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#102B46] mb-7">
              Appointment Details
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block font-semibold text-slate-700 mb-2">
                  Patient Name
                </label>
                <input
                  type="text"
                  placeholder="Enter patient name"
                  className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-2">
                  Select Department
                </label>
                <select className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500">
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>General Medicine</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                  <option>Pediatrics</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-2">
                  Select Doctor
                </label>
                <select className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500">
                  <option>Select Doctor</option>
                  <option>Dr. Arun - Cardiologist</option>
                  <option>Dr. Meera - General Physician</option>
                  <option>Dr. Rahul - Neurologist</option>
                  <option>Dr. Anjali - Dermatologist</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-slate-700 mb-2">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-2">
                    Appointment Type
                  </label>
                  <select className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500">
                    <option>Online Token</option>
                    <option>Walk-in</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Enter your message..."
                  className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500"
                ></textarea>
              </div>

              <Link
                to="/book-token"
                className="bg-teal-600 text-white rounded-xl p-4 flex justify-center items-center gap-3 font-semibold"
              >
                Continue to Token <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-[#102B46] text-white rounded-2xl p-7">
              <FaCalendarCheck className="text-4xl text-teal-400 mb-5" />
              <h3 className="text-xl font-bold">Easy Booking</h3>
              <p className="text-slate-300 text-sm leading-7 mt-3">
                Choose your preferred department and doctor for your hospital
                visit.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <FaUserDoctor className="text-3xl text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-[#102B46]">
                Expert Doctors
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Explore different medical departments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <FaHospital className="text-3xl text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-[#102B46]">
                Online & Walk-in
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                A unified view of hospital queues.
              </p>
            </div>
            <Link
              to="/"
              className="w-full bg-slate-100 text-red-500 rounded-full py-4 px-6 flex justify-center items-center gap-2 font-semibold border border-slate-200 hover:bg-[#102B46] hover:text-white hover:border-[#102B46] "
            >
              <span>←</span>
              <span>Take me back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
