import React from "react";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaUserDoctor,
  FaUsers,
  FaListCheck,
  FaCalendarCheck,
  FaBuilding,
  FaHospitalUser
} from "react-icons/fa6";

const HospitalSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-[#102B46] text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        Queue<span className="text-teal-400">Less</span>
      </h1>

      <p className="text-xs text-slate-400 mb-4">HOSPITAL MENU</p>

      <div className="space-y-2">

        <Link
          to="/hospital-dashboard"
          className="flex items-center gap-3 p-3 rounded-lg bg-teal-600 text-white"
        >
          <FaHouse />
          <span className="text-sm">Dashboard</span>
        </Link>

        <Link
          to="/doctor-management"
          className="flex items-center gap-3 p-3 rounded-lg text-slate-300 hover:bg-slate-700"
        >
          <FaUserDoctor />
          <span className="text-sm">Doctor Management</span>
        </Link>

        <Link
          to="/patient-management"
          className="flex items-center gap-3 p-3 rounded-lg text-slate-300 hover:bg-slate-700"
        >
          <FaUsers />
          <span className="text-sm">Patient Management</span>
        </Link>

        <Link
          to="/queue-management"
          className="flex items-center gap-3 p-3 rounded-lg text-slate-300 hover:bg-slate-700"
        >
          <FaListCheck />
          <span className="text-sm">Queue Management</span>
        </Link>

        

        <Link
          to="/department"
          className="flex items-center gap-3 p-3 rounded-lg text-slate-300 hover:bg-slate-700"
        >
          <FaBuilding />
          <span className="text-sm">Departments</span>
        </Link>

       

      </div>
    </aside>
  );
};

export default HospitalSidebar;