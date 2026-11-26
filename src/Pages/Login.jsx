import React from "react";
import { Link } from "react-router-dom";
import { FaHospital, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        <div className="bg-[#102B46] text-white p-10 md:p-14 flex flex-col justify-center">
          <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
            <FaHospital className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold">Welcome Back!</h1>

          <p className="text-slate-300 mt-5 leading-8">
            Sign in to your QueueLess account and enjoy a smarter, simpler
            hospital experience.
          </p>

          <div className="mt-10 border-t border-slate-600 pt-7">
            <p className="text-teal-400 font-semibold">QUEUELESS</p>
            <p className="text-sm text-slate-400 mt-2">
              Less Waiting. Better Care.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-14">
          <h2 className="text-3xl font-bold text-[#102B46]">Login</h2>
          <p className="text-slate-500 mt-2 mb-8">
            Enter your account details to continue.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <div className="flex items-center border border-slate-200 rounded-xl px-4">
                <FaEnvelope className="text-teal-600" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 outline-none bg-transparent"
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
                  placeholder="Enter your password"
                  className="w-full p-4 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="accent-teal-600" />
                Remember me
              </label>
              <span className="text-teal-600 font-semibold cursor-pointer">
                Forgot Password?
              </span>
            </div>

            <Link
              to="/"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-xl font-semibold flex justify-center items-center gap-3"
            >
              Login <FaArrowRight />
            </Link>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Don't have an account?
            <Link to="/register" className="text-teal-600 font-bold ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
