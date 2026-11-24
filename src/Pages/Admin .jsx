import React from "react";
import { FaEdit } from "react-icons/fa";
import {
  FaUsers,
  FaUserDoctor,
  FaHospital,
  FaTicket,
  FaChartLine,
  FaClock,
  FaPlus,
  FaTrash,
  FaCheck,
  FaXmark,
  FaLocationDot,
} from "react-icons/fa6";

const Admin = () => {
  return (
    
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-teal-600 font-semibold">ADMINISTRATION</p>
          <h1 className="text-3xl font-bold text-[#102B46] mt-2">
            Admin Dashboard
          </h1>
          <p className="text-slate-500 mt-2">
            Manage hospitals, doctors and hospital operations.
          </p>
        </div>

        <div className="bg-[#102B46] rounded-2xl p-8 text-white mb-8 flex justify-between items-center gap-5">
          <div>
            <p className="text-teal-300">System Overview</p>
            <h2 className="text-3xl font-bold mt-2">Welcome, Administrator</h2>
            <p className="text-slate-300 mt-2">
              Manage hospitals and doctor requests from one place.
            </p>
          </div>
          <div className="bg-teal-500 p-5 rounded-2xl">
            <FaHospital className="text-4xl" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaHospital className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Total Hospitals</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">03</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaUserDoctor className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Registered Doctors</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">08</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaUsers className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Total Patients</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">125</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FaTicket className="text-teal-600 text-3xl mb-4" />
            <p className="text-slate-500">Today's Tokens</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">32</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-7">
              <FaChartLine className="text-teal-600 text-2xl" />
              <h2 className="text-xl font-bold text-[#102B46]">
                Hospital Overview
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-semibold">City Care Hospital</span>
                  <span className="text-slate-500">85%</span>
                </div>
                <div className="bg-slate-100 h-3 rounded-full">
                  <div className="bg-teal-500 h-3 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-semibold">Sunrise Medical Centre</span>
                  <span className="text-slate-500">65%</span>
                </div>
                <div className="bg-slate-100 h-3 rounded-full">
                  <div className="bg-teal-500 h-3 rounded-full w-[65%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-semibold">Green Valley Hospital</span>
                  <span className="text-slate-500">45%</span>
                </div>
                <div className="bg-slate-100 h-3 rounded-full">
                  <div className="bg-teal-500 h-3 rounded-full w-[45%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-7">
              <FaClock className="text-teal-600 text-2xl" />
              <h2 className="text-xl font-bold text-[#102B46]">
                System Statistics
              </h2>
            </div>

            <div className="space-y-5">
              <div className="bg-slate-50 rounded-xl p-5 flex justify-between">
                <span className="text-slate-600">Average Waiting Time</span>
                <span className="font-bold text-[#102B46]">18 min</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 flex justify-between">
                <span className="text-slate-600">Active Hospitals</span>
                <span className="font-bold text-[#102B46]">03</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 flex justify-between">
                <span className="text-slate-600">Pending Doctor Requests</span>
                <span className="font-bold text-orange-500">02</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-sm mt-6">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#102B46]">
                Manage Hospitals
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Add, edit and manage registered hospitals
              </p>
            </div>

            <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">
              <FaPlus /> Add Hospital
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaHospital className="text-teal-600 text-2xl" />
              </div>
              <h3 className="font-bold text-[#102B46] text-lg">
                City Care Hospital
              </h3>
              <p className="text-sm text-slate-500 flex items-center gap-2 mt-2">
                <FaLocationDot /> Trivandrum
              </p>
              <div className="flex justify-between text-sm mt-4">
                <span className="text-slate-500">Doctors: 03</span>
                <span className="text-green-600 font-semibold">Active</span>
              </div>
              <div className="flex gap-3 mt-5">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaEdit /> Edit
                </button>
                <button className="flex-1 bg-red-50 text-red-500 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaHospital className="text-teal-600 text-2xl" />
              </div>
              <h3 className="font-bold text-[#102B46] text-lg">
                Sunrise Medical Centre
              </h3>
              <p className="text-sm text-slate-500 flex items-center gap-2 mt-2">
                <FaLocationDot /> Kochi
              </p>
              <div className="flex justify-between text-sm mt-4">
                <span className="text-slate-500">Doctors: 03</span>
                <span className="text-green-600 font-semibold">Active</span>
              </div>
              <div className="flex gap-3 mt-5">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaEdit /> Edit
                </button>
                <button className="flex-1 bg-red-50 text-red-500 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaHospital className="text-teal-600 text-2xl" />
              </div>
              <h3 className="font-bold text-[#102B46] text-lg">
                Green Valley Hospital
              </h3>
              <p className="text-sm text-slate-500 flex items-center gap-2 mt-2">
                <FaLocationDot /> Kollam
              </p>
              <div className="flex justify-between text-sm mt-4">
                <span className="text-slate-500">Doctors: 02</span>
                <span className="text-green-600 font-semibold">Active</span>
              </div>
              <div className="flex gap-3 mt-5">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaEdit /> Edit
                </button>
                <button className="flex-1 bg-red-50 text-red-500 py-2 rounded-lg flex items-center justify-center gap-2">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-sm mt-6">
          <div className="mb-6">
            <p className="text-teal-600 text-sm font-semibold">
              DOCTOR MANAGEMENT
            </p>
            <h2 className="text-xl font-bold text-[#102B46] mt-2">
              Doctor Registration Requests
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Review hospital joining requests submitted by doctors.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-85">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="p-4">Doctor</th>
                  <th className="p-4">Specialization</th>
                  <th className="p-4">Hospital</th>
                  <th className="p-4">Experience</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-4">
                    <p className="font-semibold text-[#102B46]">
                      Dr. Arun Kumar
                    </p>
                    <p className="text-xs text-slate-500">arun@gmail.com</p>
                  </td>
                  <td className="p-4">Cardiology</td>
                  <td className="p-4">City Care Hospital</td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Pending
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="bg-green-50 text-green-600 px-3 py-2 rounded-lg flex items-center gap-1">
                        <FaCheck /> Approve
                      </button>
                      <button className="bg-red-50 text-red-500 px-3 py-2 rounded-lg flex items-center gap-1">
                        <FaXmark /> Reject
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-4">
                    <p className="font-semibold text-[#102B46]">
                      Dr. Meera Nair
                    </p>
                    <p className="text-xs text-slate-500">meera@gmail.com</p>
                  </td>
                  <td className="p-4">Neurology</td>
                  <td className="p-4">Sunrise Medical Centre</td>
                  <td className="p-4">5 Years</td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Pending
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="bg-green-50 text-green-600 px-3 py-2 rounded-lg flex items-center gap-1">
                        <FaCheck /> Approve
                      </button>
                      <button className="bg-red-50 text-red-500 px-3 py-2 rounded-lg flex items-center gap-1">
                        <FaXmark /> Reject
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
