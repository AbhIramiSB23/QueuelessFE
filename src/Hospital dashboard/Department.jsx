import React from "react";
import HospitalSidebar from "../Hospital dashboard/HospitalSidebar";
import {
  FaHeartPulse,
  FaBone,
  FaBrain,
  FaChild,
  FaEye,
  FaStethoscope,
  FaEarListen,
  FaPerson,
} from "react-icons/fa6";

const Department = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <HospitalSidebar />

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#102B46]">
                Department Management
              </h1>
              <p className="text-gray-500 mt-2">
                Manage all hospital departments
              </p>
            </div>

            <button className="bg-teal-600 text-white px-6 py-3 rounded-xl">
              + Add Department
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-500 text-sm">Total Departments</p>
              <h2 className="text-3xl font-bold text-[#102B46] mt-2">8</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-500 text-sm">Active Departments</p>
              <h2 className="text-3xl font-bold text-[#102B46] mt-2">8</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-500 text-sm">Total Doctors</p>
              <h2 className="text-3xl font-bold text-[#102B46] mt-2">24</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-500 text-sm">Total Patients</p>
              <h2 className="text-3xl font-bold text-[#102B46] mt-2">775</h2>
            </div>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#102B46]">
                  All Departments
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Overview of hospital departments
                </p>
              </div>

              <input
                type="text"
                placeholder="Search departments..."
                className="border border-gray-200 rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

              <div className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl">
                    <FaHeartPulse />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mt-4">Cardiology</h3>
                <p className="text-sm text-gray-500 mt-1">Heart and cardiovascular care</p>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-500">Doctors</p>
                    <p className="text-xl font-bold text-[#102B46]">4</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Patients</p>
                    <p className="text-xl font-bold text-[#102B46]">120</p>
                  </div>
                </div>
                
              </div>

              <div className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl">
                    <FaBone />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mt-4">Orthopedics</h3>
                <p className="text-sm text-gray-500 mt-1">Bone and joint treatment</p>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-500">Doctors</p>
                    <p className="text-xl font-bold text-[#102B46]">3</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Patients</p>
                    <p className="text-xl font-bold text-[#102B46]">95</p>
                  </div>
                </div>
               
              </div>

              <div className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl">
                    <FaBrain />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mt-4">Neurology</h3>
                <p className="text-sm text-gray-500 mt-1">Brain and nervous system care</p>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-500">Doctors</p>
                    <p className="text-xl font-bold text-[#102B46]">3</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Patients</p>
                    <p className="text-xl font-bold text-[#102B46]">80</p>
                  </div>
                </div>
              
              </div>

              <div className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl">
                    <FaChild />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mt-4">Pediatrics</h3>
                <p className="text-sm text-gray-500 mt-1">Healthcare for children</p>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-500">Doctors</p>
                    <p className="text-xl font-bold text-[#102B46]">4</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Patients</p>
                    <p className="text-xl font-bold text-[#102B46]">110</p>
                  </div>
                </div>
               
              </div>

              <div className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl">
                    <FaEye />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mt-4">Ophthalmology</h3>
                <p className="text-sm text-gray-500 mt-1">Eye care and treatment</p>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-500">Doctors</p>
                    <p className="text-xl font-bold text-[#102B46]">2</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Patients</p>
                    <p className="text-xl font-bold text-[#102B46]">65</p>
                  </div>
                </div>
                
              </div>

              <div className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl">
                    <FaStethoscope />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mt-4">General Medicine</h3>
                <p className="text-sm text-gray-500 mt-1">General health consultation</p>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-500">Doctors</p>
                    <p className="text-xl font-bold text-[#102B46]">4</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Patients</p>
                    <p className="text-xl font-bold text-[#102B46]">160</p>
                  </div>
                </div>
                
              </div>

              <div className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl">
                    <FaEarListen />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mt-4">ENT</h3>
                <p className="text-sm text-gray-500 mt-1">Ear, nose and throat treatment</p>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-500">Doctors</p>
                    <p className="text-xl font-bold text-[#102B46]">2</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Patients</p>
                    <p className="text-xl font-bold text-[#102B46]">55</p>
                  </div>
                </div>
                
              </div>

              <div className="border border-gray-100 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl">
                    <FaPerson />
                  </div>
                  <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#102B46] mt-4">Gynecology</h3>
                <p className="text-sm text-gray-500 mt-1">Women's health and maternity care</p>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-500">Doctors</p>
                    <p className="text-xl font-bold text-[#102B46]">2</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Patients</p>
                    <p className="text-xl font-bold text-[#102B46]">90</p>
                  </div>
                </div>
               
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Department;