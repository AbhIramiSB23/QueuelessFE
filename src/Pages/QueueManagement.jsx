
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaClock,
  FaTicket,
  FaUserPlus,
  FaTriangleExclamation,
  FaTrash,
} from "react-icons/fa6";

const QueueManagement = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <p className="text-teal-600 font-semibold">RECEPTIONIST PORTAL</p>
            <h1 className="text-3xl font-bold text-[#102B46] mt-2">
              Queue Management
            </h1>
            <p className="text-slate-500 mt-2">
              Manage online and walk-in patient queues.
            </p>
          </div>

          <Link
            to="/register-walkin"
            className="bg-teal-600 text-white px-5 py-3 rounded-xl flex items-center gap-3 font-semibold hover:bg-teal-700 transition"
          >
            <FaUserPlus /> Register Walk-in
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaUsers className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Total Patients</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">45</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaClock className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Waiting</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">18</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaTicket className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Online Tokens</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">30</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaUserPlus className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Walk-in Patients</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">15</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-7">
          <div className="flex flex-wrap justify-between gap-4 items-center">
            <h2 className="text-xl font-bold text-[#102B46]">Patient Queue</h2>
            <input
              type="text"
              placeholder="Search patient or token..."
              className="border border-slate-200 rounded-xl px-4 py-3 outline-teal-500 w-full sm:w-72"
            />
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left min-w-85">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="p-4">Token</th>
                  <th className="p-4">Patient Name</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-bold">T101</td>
                  <td className="p-4">Rahul</td>
                  <td className="p-4">Cardiology</td>
                  <td className="p-4">Online</td>
                  <td className="p-4">Normal</td>
                  <td className="p-4 text-green-600">Completed</td>
                  <td className="p-4">
                    <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-red-100">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-bold">T102</td>
                  <td className="p-4">Anjali</td>
                  <td className="p-4">Neurology</td>
                  <td className="p-4">Walk-in</td>
                  <td className="p-4">Normal</td>
                  <td className="p-4 text-orange-600">Waiting</td>
                  <td className="p-4">
                    <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-red-100">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-bold">T103</td>
                  <td className="p-4">Meera</td>
                  <td className="p-4">Cardiology</td>
                  <td className="p-4">Online</td>
                  <td className="p-4 text-red-600">Emergency</td>
                  <td className="p-4 text-red-600">Priority</td>
                  <td className="p-4">
                    <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-red-100">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-bold">T104</td>
                  <td className="p-4">Arjun</td>
                  <td className="p-4">Orthopedics</td>
                  <td className="p-4">Online</td>
                  <td className="p-4">Normal</td>
                  <td className="p-4 text-orange-600">Waiting</td>
                  <td className="p-4">
                    <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-red-100">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex gap-4 items-center">
          <FaTriangleExclamation className="text-red-600 text-3xl" />
          <div>
            <h3 className="font-bold text-red-700">
              Emergency Priority Management
            </h3>
            <p className="text-red-600 text-sm mt-1">
              Emergency patients should be handled according to hospital triage
              protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueManagement;
