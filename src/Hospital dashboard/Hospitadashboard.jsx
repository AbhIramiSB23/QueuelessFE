import React from "react";
import {
  FaHospital,
  FaUserDoctor,
  FaUsers,
  FaClock,
  FaCalendarCheck,
  FaTicket,
  FaHouse,
  FaListCheck,
  FaBuilding,
  FaEllipsisVertical,
  FaBell,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hospitaldashboard = () => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <aside className="w-64 bg-[#102B46] text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-10">
          Medi<span className="text-teal-400">Care</span>
        </h1>

        <p className="text-xs text-slate-400 mb-4">MAIN MENU</p>

        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-teal-600">
            <FaHouse />
            Dashboard
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 text-slate-300">
            <FaUserDoctor />
            <Link to='./doctor-management'>Doctor Management</Link>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 text-slate-300">
            <FaUsers />
           <Link to='./patient-managemnet'> Patient Management</Link>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 text-slate-300">
            <FaListCheck />
           <Link to='./queue-management'> Queue Management</Link>
          </div>

         

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 text-slate-300">
            <FaBuilding />
           <Link to='./department'> Departments</Link>
          </div>

          
        </div>

        <div className="mt-20 bg-slate-700/50 p-4 rounded-xl">
          <p className="font-semibold text-sm">Hospital Admin</p>
          <p className="text-xs text-slate-400 mt-1">Management Portal</p>
        </div>
      </aside>

      <main className="flex-1 p-5 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#102B46]">
              Hospital Dashboard
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Welcome back! Here's your hospital overview.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <FaBell className="text-xl text-slate-500" />

            <div className="hidden sm:block text-right">
              <p className="font-semibold text-sm text-[#102B46]">
                City Care Hospital
              </p>
              <p className="text-xs text-slate-500">Hospital Admin</p>
            </div>

            <div className="w-11 h-11 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
              <FaHospital />
            </div>

            <FaEllipsisVertical className="text-slate-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm flex flex-col md:flex-row justify-between gap-5">
          <div>
            <p className="text-sm text-slate-500">Hospital Overview</p>
            <h2 className="text-2xl font-bold text-[#102B46] mt-2">
              City Care Hospital
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Thiruvananthapuram, Kerala
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-green-600 font-medium">
                Hospital Active
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-12">
            <div>
              <p className="text-sm text-slate-500">Departments</p>
              <h2 className="text-2xl font-bold text-[#102B46] mt-2">08</h2>
            </div>

            <div>
              <p className="text-sm text-slate-500">Working Doctors</p>
              <h2 className="text-2xl font-bold text-[#102B46] mt-2">24</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-500">Total Doctors</p>
              <FaUserDoctor className="text-xl text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#102B46] mt-4">24</h2>
            <p className="text-xs text-slate-400 mt-2">Registered doctors</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-500">Total Patients</p>
              <FaUsers className="text-xl text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#102B46] mt-4">850</h2>
            <p className="text-xs text-slate-400 mt-2">Registered patients</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-500">Waiting Patients</p>
              <FaClock className="text-xl text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold text-[#102B46] mt-4">35</h2>
            <p className="text-xs text-slate-400 mt-2">Currently in queue</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-500">Appointments</p>
              <FaCalendarCheck className="text-xl text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#102B46] mt-4">120</h2>
            <p className="text-xs text-slate-400 mt-2">Today's appointments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#102B46]">
                  Doctor Overview
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Recently registered doctors
                </p>
              </div>

              <span className="text-teal-600 text-sm font-semibold">
                View All <FaArrowRight className="inline ml-1" />
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-50">
                <thead>
                  <tr className="border-b text-sm text-slate-500">
                    <th className="py-3">Doctor</th>
                    <th>Department</th>
                    <th>Doctor ID</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-4 font-medium">Dr. Arun Kumar</td>
                    <td>Cardiology</td>
                    <td>DOC101</td>
                    <td>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-4 font-medium">Dr. Meera Nair</td>
                    <td>Orthopedics</td>
                    <td>DOC102</td>
                    <td>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 font-medium">Dr. Rahul Das</td>
                    <td>Neurology</td>
                    <td>DOC103</td>
                    <td>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#102B46] text-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold">Queue Overview</h3>
            <p className="text-sm text-slate-300 mt-1">
              Hospital-wide queue condition
            </p>

            <div className="mt-7">
              <p className="text-sm text-slate-300">Total Waiting</p>
              <h2 className="text-4xl font-bold mt-2">35</h2>
              <p className="text-xs text-teal-400 mt-2">
                Patients across all departments
              </p>
            </div>

            <div className="border-t border-slate-600 my-6"></div>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-slate-300">Active Tokens</span>
              <span className="font-semibold">120</span>
            </div>

            <div className="flex justify-between text-sm mb-6">
              <span className="text-slate-300">Completed Tokens</span>
              <span className="font-semibold">85</span>
            </div>

            <div className="bg-teal-600 text-center p-3 rounded-xl text-sm font-semibold">
              Queue Status: Active
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
          <h3 className="text-lg font-bold text-[#102B46] mb-5">
            Department Overview
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-sm text-slate-500">Cardiology</p>
              <h3 className="text-xl font-bold mt-2">05 Doctors</h3>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-sm text-slate-500">Orthopedics</p>
              <h3 className="text-xl font-bold mt-2">04 Doctors</h3>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-sm text-slate-500">Neurology</p>
              <h3 className="text-xl font-bold mt-2">03 Doctors</h3>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-sm text-slate-500">Pediatrics</p>
              <h3 className="text-xl font-bold mt-2">04 Doctors</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hospitaldashboard;
