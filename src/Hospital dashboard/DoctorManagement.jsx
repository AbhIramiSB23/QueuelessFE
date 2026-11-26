
import React from "react";
import HospitalSidebar from "../Hospital dashboard/HospitalSidebar";
import {
  FaUserDoctor,
  FaUsers,
  FaUserCheck,
  FaClock,
  FaMagnifyingGlass,
  FaPlus,
  FaEllipsisVertical
} from "react-icons/fa6";

const DoctorManagement = () => {
  return (
    <div className="min-h-screen flex bg-slate-100">

      <HospitalSidebar />

      <main className="flex-1 p-5 md:p-8">

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#102B46]">
              Doctor Management
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage and monitor hospital doctors
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-teal-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-semibold">
              <FaPlus />
              Add Doctor
            </button>

            <FaEllipsisVertical className="text-slate-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <FaUserDoctor className="text-teal-600 text-xl" />
            <p className="text-sm text-slate-500 mt-3">Total Doctors</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">24</h2>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <FaUserCheck className="text-green-600 text-xl" />
            <p className="text-sm text-slate-500 mt-3">Active Doctors</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">20</h2>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <FaClock className="text-orange-500 text-xl" />
            <p className="text-sm text-slate-500 mt-3">Pending Approval</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">04</h2>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <FaUsers className="text-blue-600 text-xl" />
            <p className="text-sm text-slate-500 mt-3">Departments</p>
            <h2 className="text-3xl font-bold text-[#102B46] mt-2">08</h2>
          </div>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

            <div>
              <h2 className="text-lg font-bold text-[#102B46]">
                Registered Doctors
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Doctor details and availability
              </p>
            </div>

            <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2">
              <FaMagnifyingGlass className="text-slate-400" />
              <input
                type="text"
                placeholder="Search doctors..."
                className="outline-none text-sm w-full"
              />
            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left min-w-85">

              <thead>
                <tr className="border-b text-sm text-slate-500">
                  <th className="p-4">Doctor</th>
                  <th className="p-4">Doctor ID</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Specialization</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Status</th>
                  
                </tr>
              </thead>

              <tbody className="text-sm">

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                        <FaUserDoctor />
                      </div>
                      <div>
                        <p className="font-semibold text-[#102B46]">Dr. Arun Kumar</p>
                        <p className="text-xs text-slate-500">arun@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">DOC101</td>
                  <td className="p-4">Cardiology</td>
                  <td className="p-4">Heart Specialist</td>
                  <td className="p-4">9876543210</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Active</span>
                  </td>
                 
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                        <FaUserDoctor />
                      </div>
                      <div>
                        <p className="font-semibold text-[#102B46]">Dr. Meera Nair</p>
                        <p className="text-xs text-slate-500">meera@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">DOC102</td>
                  <td className="p-4">Orthopedics</td>
                  <td className="p-4">Bone Specialist</td>
                  <td className="p-4">9876543211</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Active</span>
                  </td>
                 
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                        <FaUserDoctor />
                      </div>
                      <div>
                        <p className="font-semibold text-[#102B46]">Dr. Rahul Das</p>
                        <p className="text-xs text-slate-500">rahul@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">DOC103</td>
                  <td className="p-4">Neurology</td>
                  <td className="p-4">Brain Specialist</td>
                  <td className="p-4">9876543212</td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Pending</span>
                  </td>
                  
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center">
                        <FaUserDoctor />
                      </div>
                      <div>
                        <p className="font-semibold text-[#102B46]">Dr. Anjali Menon</p>
                        <p className="text-xs text-slate-500">anjali@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">DOC104</td>
                  <td className="p-4">Pediatrics</td>
                  <td className="p-4">Child Specialist</td>
                  <td className="p-4">9876543213</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Active</span>
                  </td>
                 
                </tr>

              </tbody>

            </table>

          </div>

          <div className="flex justify-between items-center mt-6 text-sm text-slate-500">
            <p>Showing 4 of 24 doctors</p>
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

export default DoctorManagement;
