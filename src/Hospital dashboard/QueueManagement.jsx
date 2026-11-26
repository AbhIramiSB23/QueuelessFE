
import React from "react";
import HospitalSidebar from "../Hospital dashboard/HospitalSidebar";
import {
  FaTicket,
  FaClock,
  FaUsers,
  FaMagnifyingGlass,
  FaEllipsisVertical
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const QueueManagement = () => {
  return (
    <div className="min-h-screen flex bg-slate-100">

      <HospitalSidebar />

      <main className="flex-1 min-w-0 p-5 md:p-8">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#102B46]">
              Queue Management
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Monitor patient queues across all hospital departments
            </p>
          </div>
          <FaEllipsisVertical className="text-slate-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center">
              <FaTicket className="text-teal-600 text-xl" />
            </div>
            <p className="text-sm text-slate-500 mt-4">Total Tokens Today</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">120</h2>
            <p className="text-xs text-slate-400 mt-2">Across all departments</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center">
              <FaClock className="text-orange-500 text-xl" />
            </div>
            <p className="text-sm text-slate-500 mt-4">Waiting Patients</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">35</h2>
            <p className="text-xs text-slate-400 mt-2">Waiting for consultation</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
              <FaUsers className="text-blue-600 text-xl" />
            </div>
            <p className="text-sm text-slate-500 mt-4">Currently Consulting</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">12</h2>
            <p className="text-xs text-slate-400 mt-2">Doctors in consultation</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
            <p className="text-sm text-slate-500 mt-4">Completed Tokens</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">73</h2>
            <p className="text-xs text-slate-400 mt-2">Consultations completed</p>
          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-lg font-bold text-[#102B46]">
              Department Queue Status
            </h2>
            <p className="text-sm text-slate-500 mt-1 mb-7">
              Current patient waiting conditions
            </p>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#102B46]">Cardiology</span>
                  <span className="text-sm text-slate-500">12 Waiting</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full w-[75%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#102B46]">Orthopedics</span>
                  <span className="text-sm text-slate-500">08 Waiting</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[55%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#102B46]">Neurology</span>
                  <span className="text-sm text-slate-500">09 Waiting</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-[65%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-[#102B46]">Pediatrics</span>
                  <span className="text-sm text-slate-500">06 Waiting</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full w-[40%]"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-[#102B46] text-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-lg font-bold">Emergency Queue</h2>
            <p className="text-sm text-slate-300 mt-1">
              Priority patient overview
            </p>

            <h2 className="text-4xl font-bold mt-8">03</h2>
            <p className="text-sm text-red-300 mt-2">Emergency Cases</p>

            <div className="border-t border-slate-600 my-6"></div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-300">High Priority</span>
              <span className="font-semibold">02</span>
            </div>

            <div className="flex justify-between text-sm mt-4">
              <span className="text-slate-300">Under Treatment</span>
              <span className="font-semibold">01</span>
            </div>

            <div className="bg-red-500/20 text-red-300 p-3 rounded-xl mt-6 text-center text-sm">
              Emergency cases require priority attention
            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-[#102B46]">
                Patient Token Details
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Hospital-wide token information
              </p>
            </div>

            <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2">
              <FaMagnifyingGlass className="text-slate-400" />
              <input
                type="text"
                placeholder="Search token or patient..."
                className="outline-none text-sm w-full"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-85">

              <thead>
                <tr className="border-b text-sm text-slate-500">
                  <th className="p-4">Token</th>
                  <th className="p-4">Patient Name</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Doctor</th>
                  <th className="p-4">Waiting Time</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>

              <tbody className="text-sm text-slate-600">

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-4 font-semibold text-[#102B46]">T101</td>
                  <td className="p-4">Rahul Kumar</td>
                  <td className="p-4">Cardiology</td>
                  <td className="p-4">Dr. Arun</td>
                  <td className="p-4">Completed</td>
                  <td className="p-4">Normal</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Completed</span>
                  </td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-4 font-semibold text-[#102B46]">T102</td>
                  <td className="p-4">Anjali Menon</td>
                  <td className="p-4">Orthopedics</td>
                  <td className="p-4">Dr. Meera</td>
                  <td className="p-4">15 min</td>
                  <td className="p-4">Normal</td>
                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Consulting</span>
                  </td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-4 font-semibold text-[#102B46]">T103</td>
                  <td className="p-4">Vishnu Raj</td>
                  <td className="p-4">Cardiology</td>
                  <td className="p-4">Dr. Arun</td>
                  <td className="p-4">25 min</td>
                  <td className="p-4">Normal</td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Waiting</span>
                  </td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-4 font-semibold text-[#102B46]">T104</td>
                  <td className="p-4">Meera S</td>
                  <td className="p-4">Neurology</td>
                  <td className="p-4">Dr. Rahul</td>
                  <td className="p-4">Immediate</td>
                  <td className="p-4">
                    <span className="text-red-600 font-semibold">Emergency</span>
                  </td>
                  <td className="p-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">Priority</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-[#102B46]">T105</td>
                  <td className="p-4">Arjun S</td>
                  <td className="p-4">Pediatrics</td>
                  <td className="p-4">Dr. Anjali</td>
                  <td className="p-4">10 min</td>
                  <td className="p-4">Normal</td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Waiting</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-sm text-slate-500">
            <p>Showing 5 of 120 tokens</p>
            <div className="flex gap-2">
              <button className="border px-3 py-2 rounded-lg">Previous</button>
              <button className="bg-teal-600 text-white px-3 py-2 rounded-lg">1</button>
              <button className="border px-3 py-2 rounded-lg">2</button>
              <button className="border px-3 py-2 rounded-lg">Next</button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default QueueManagement;
