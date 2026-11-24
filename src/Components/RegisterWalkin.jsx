
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaUser,
  FaPhone,
  FaHospital,
  FaUserDoctor,
  FaCalendar,
  FaArrowLeft,
} from "react-icons/fa6";

const RegisterWalkin = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <Link
            to="/queue-management"
            className="text-teal-600 font-semibold flex items-center gap-2 mb-6 hover:text-teal-800"
          >
            <FaArrowLeft /> Back to Queue
          </Link>

          <p className="text-teal-600 font-semibold">
            RECEPTIONIST PORTAL
          </p>

          <h1 className="text-3xl font-bold text-[#102B46] mt-2">
            Register Walk-in Patient
          </h1>

          <p className="text-slate-500 mt-2">
            Enter patient details to register a new hospital visit.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal-50 text-teal-600 p-4 rounded-xl">
              <FaUserPlus className="text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#102B46]">
                Patient Information
              </h2>
              <p className="text-sm text-slate-500">
                Fill in the details below
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Patient Name
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaUser className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter patient name"
                  className="w-full p-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Phone Number
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaPhone className="text-slate-400" />
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full p-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter age"
                className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Gender
              </label>
              <select className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Department
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaHospital className="text-slate-400" />
                <select className="w-full p-4 outline-none bg-white">
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>General Medicine</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                  <option>Pediatrics</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Select Doctor
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaUserDoctor className="text-slate-400" />
                <select className="w-full p-4 outline-none bg-white">
                  <option>Select Doctor</option>
                  <option>Dr. Arun</option>
                  <option>Dr. Meera</option>
                  <option>Dr. Rahul</option>
                  <option>Dr. Anjali</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Visit Date
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaCalendar className="text-slate-400" />
                <input
                  type="date"
                  className="w-full p-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Visit Type
              </label>
              <input
                type="text"
                value="Walk-in"
                readOnly
                className="w-full border border-slate-200 rounded-xl p-4 bg-slate-100 text-slate-500 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-semibold text-slate-700 mb-2">
                Symptoms / Additional Notes
              </label>
              <textarea
                rows="4"
                placeholder="Enter patient symptoms or additional information..."
                className="w-full border border-slate-200 rounded-xl p-4 outline-teal-500"
              />
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/queue-management"
              className="flex-1 bg-slate-100 text-slate-700 rounded-xl p-4 text-center font-semibold hover:bg-slate-200 transition"
            >
              Cancel
            </Link>

            <Link
              to="/queue-management"
              className="flex-1 bg-teal-600 text-white rounded-xl p-4 text-center font-semibold hover:bg-teal-700 transition"
            >
              Register Patient
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterWalkin;
