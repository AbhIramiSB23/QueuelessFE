import React from "react";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa6";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        <div className="bg-[#102B46] text-white p-10 md:p-14 flex flex-col justify-center">
          <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
            <FaHospital className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Join Queue<span className="text-teal-400">Less</span>
          </h1>

          <p className="text-slate-300 mt-5 leading-8">
            Create your account and experience convenient token booking, queue
            tracking and patient assistance.
          </p>

          <div className="mt-10 bg-white/10 rounded-2xl p-6">
            <h3 className="font-bold text-lg">
              A smarter way to visit hospitals.
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Spend less time waiting and more time focusing on your health.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#102B46]">Create Account</h2>
          <p className="text-slate-500 mt-2 mb-7">
            Fill in your details to get started.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaUser className="text-teal-600" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaEnvelope className="text-teal-600" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaPhone className="text-teal-600" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaLock className="text-teal-600" />
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confirm Password
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaLock className="text-teal-600" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            <Link
              to="/login"
              className="block text-center bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-xl font-semibold"
            >
              Create Account
            </Link>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?
            <Link to="/login" className="text-teal-600 font-bold ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
