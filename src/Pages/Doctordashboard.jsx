
import React from "react";
import {
  FaUserDoctor,
  FaUsers,
  FaClock,
  FaCalendarCheck,
  FaTicket,
} from "react-icons/fa6";

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <p className="text-teal-600 font-semibold">DOCTOR PORTAL</p>
          <h1 className="text-3xl font-bold text-[#102B46] mt-2">
            Doctor Dashboard
          </h1>
          <p className="text-slate-500 mt-2">
            Manage your appointments, patients and hospital requests.
          </p>
        </div>

        <div className="bg-[#102B46] rounded-2xl p-8 text-white mb-8 flex flex-wrap justify-between items-center gap-5">
          <div>
            <p className="text-teal-300">Welcome Back</p>
            <h2 className="text-3xl font-bold mt-2">
              Dr. Arun Kumar
            </h2>
            <p className="text-slate-300 mt-2">
              Cardiologist | Doctor ID: DOC102
            </p>
            <span className="inline-block mt-4 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
              Available Today
            </span>
          </div>

          <div className="bg-teal-500 p-5 rounded-2xl">
            <FaUserDoctor className="text-5xl" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaUsers className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Total Patients</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">25</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaTicket className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Today's Tokens</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">12</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaClock className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Average Waiting</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">18 min</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaCalendarCheck className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Completed</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">08</h2>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#102B46] mb-6">
              Today's Patient Queue
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between items-center bg-slate-50 rounded-xl p-4">
                <div>
                  <p className="font-semibold text-[#102B46]">Rahul S</p>
                  <p className="text-sm text-slate-500">Token T101</p>
                </div>
                <span className="text-green-600 bg-green-50 px-3 py-2 rounded-full text-xs">
                  Completed
                </span>
              </div>

              <div className="flex justify-between items-center bg-slate-50 rounded-xl p-4">
                <div>
                  <p className="font-semibold text-[#102B46]">Anjali M</p>
                  <p className="text-sm text-slate-500">Token T102</p>
                </div>
                <span className="text-blue-600 bg-blue-50 px-3 py-2 rounded-full text-xs">
                  Consulting
                </span>
              </div>

              <div className="flex justify-between items-center bg-slate-50 rounded-xl p-4">
                <div>
                  <p className="font-semibold text-[#102B46]">Vishnu K</p>
                  <p className="text-sm text-slate-500">Token T103</p>
                </div>
                <span className="text-orange-600 bg-orange-50 px-3 py-2 rounded-full text-xs">
                  Waiting
                </span>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#102B46] mb-6">
              Doctor Information
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-slate-500">Doctor Name</span>
                <span className="font-semibold text-[#102B46]">Dr. Arun Kumar</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Specialization</span>
                <span className="font-semibold text-[#102B46]">Cardiology</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Hospital</span>
                <span className="font-semibold text-[#102B46]">City Care Hospital</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Consultation</span>
                <span className="font-semibold text-[#102B46]">9 AM - 1 PM</span>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-white rounded-2xl p-7 shadow-sm mt-6">

          <div className="mb-6">
            <p className="text-teal-600 font-semibold text-sm">HOSPITAL PARTNERSHIP</p>
            <h2 className="text-xl font-bold text-[#102B46] mt-2">
              Hospital Joining Request
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Submit your details to request permission to join a hospital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Doctor Name
              </label>
              <input
                type="text"
                placeholder="Enter doctor name"
                className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Specialization
              </label>
              <select className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:border-teal-500">
                <option>Select specialization</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>General Medicine</option>
                <option>Orthopedics</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Select Hospital
              </label>
              <select className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:border-teal-500">
                <option>Select hospital</option>
                <option>City Care Hospital</option>
                <option>Sunrise Medical Centre</option>
                <option>Green Valley Hospital</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Experience
              </label>
              <input
                type="text"
                placeholder="Example: 3 years"
                className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Consultation Time
              </label>
              <input
                type="text"
                placeholder="Example: 9 AM - 1 PM"
                className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:border-teal-500"
              />
            </div>

          </div>

          <div className="mt-5">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Joining Message
            </label>
            <textarea
              rows="3"
              placeholder="Write a message to the hospital administrator..."
              className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:border-teal-500"
            ></textarea>
          </div>

          <button className="mt-5 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold">
            Submit Joining Request
          </button>

          <div className="mt-6 bg-orange-50 border border-orange-100 rounded-xl p-5">
            <p className="text-orange-700 font-semibold">
              Request Status: Pending
            </p>
            <p className="text-sm text-orange-600 mt-1">
              Your hospital joining request is waiting for administrator approval.
            </p>
          </div>

        </div>

       

      </div>
    </div>
  );
};

export default DoctorDashboard;
