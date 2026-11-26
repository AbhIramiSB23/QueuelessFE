
import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaCalendarCheck,
  FaClock,
  FaTicket,
  FaHospital,
  FaArrowRight,
  FaComments,
  FaStar,
  FaUser,
  FaStethoscope,
  FaHeart
} from 'react-icons/fa6'

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      <header className="bg-[#102B46] text-white px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Queue<span className="text-teal-400">Less</span>
        </h1>

        <div className="flex items-center gap-5">
          <span className="text-sm text-slate-300">Welcome, Patient</span>
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
            <FaUser />
          </div>
        </div>
      </header>

      <main className="p-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#102B46]">Patient Dashboard</h2>
            <p className="text-slate-500 mt-2">Manage your appointments and track your tokens</p>
          </div>

          <Link to="/booking" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            <FaCalendarCheck />
            Book Appointment
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Total Tokens</p>
                <h3 className="text-3xl font-bold text-[#102B46] mt-2">08</h3>
              </div>
              <div className="bg-blue-100 text-blue-700 p-4 rounded-lg">
                <FaTicket size={22} />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">Your total generated tokens</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Waiting Time</p>
                <h3 className="text-3xl font-bold text-[#102B46] mt-2">20 min</h3>
              </div>
              <div className="bg-orange-100 text-orange-600 p-4 rounded-lg">
                <FaClock size={22} />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">Estimated waiting time</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Appointments</p>
                <h3 className="text-3xl font-bold text-[#102B46] mt-2">03</h3>
              </div>
              <div className="bg-green-100 text-green-700 p-4 rounded-lg">
                <FaCalendarCheck size={22} />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">Your booked appointments</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Departments</p>
                <h3 className="text-3xl font-bold text-[#102B46] mt-2">06</h3>
              </div>
              <div className="bg-purple-100 text-purple-700 p-4 rounded-lg">
                <FaHospital size={22} />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">Available hospital departments</p>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#102B46]">Current Token Status</h3>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                In Queue
              </span>
            </div>

            <div className="bg-[#102B46] text-white rounded-xl p-6">
              <p className="text-slate-300 text-sm">Your Token Number</p>
              <h2 className="text-5xl font-bold text-teal-400 mt-2">T105</h2>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-slate-300 text-sm">Department</p>
                  <p className="font-semibold mt-1">Cardiology</p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Estimated Waiting</p>
                  <p className="font-semibold mt-1">20 Minutes</p>
                </div>
              </div>

              <Link to="/queue-tracking" className="inline-flex items-center gap-2 mt-6 bg-teal-600 hover:bg-teal-700 px-5 py-2 rounded-lg text-sm font-semibold">
                Track Queue <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-[#102B46] mb-5">Quick Access</h3>

            <div className="space-y-4">

              <Link to="/booking" className="flex items-center justify-between p-4 bg-slate-50 hover:bg-teal-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaCalendarCheck className="text-teal-600" />
                  <span className="font-medium text-slate-700">Book Appointment</span>
                </div>
                <FaArrowRight className="text-slate-400" />
              </Link>

              <Link to="/book-token" className="flex items-center justify-between p-4 bg-slate-50 hover:bg-teal-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaTicket className="text-teal-600" />
                  <span className="font-medium text-slate-700">Token Details</span>
                </div>
                <FaArrowRight className="text-slate-400" />
              </Link>

              <Link to="/queue-tracking" className="flex items-center justify-between p-4 bg-slate-50 hover:bg-teal-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaClock className="text-teal-600" />
                  <span className="font-medium text-slate-700">Queue Status</span>
                </div>
                <FaArrowRight className="text-slate-400" />
              </Link>

              <Link to="/chatbot" className="flex items-center justify-between p-4 bg-slate-50 hover:bg-teal-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaComments className="text-teal-600" />
                  <span className="font-medium text-slate-700">Chatbot</span>
                </div>
                <FaArrowRight className="text-slate-400" />
              </Link>

            </div>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-[#102B46]">Recent Appointments</h3>
            <Link to="/appointments" className="text-teal-600 font-semibold text-sm">View All</Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-90">

              <thead>
                <tr className="text-slate-500 text-sm border-b border-slate-200">
                  <th className="py-4 px-3">Doctor</th>
                  <th className="py-4 px-3">Hospital</th>
                  <th className="py-4 px-3">Department</th>
                  <th className="py-4 px-3">Date</th>
                  <th className="py-4 px-3">Time</th>
                  <th className="py-4 px-3">Status</th>
                </tr>
              </thead>

              <tbody className="text-sm">

                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-semibold text-[#102B46]">Dr. Arun Kumar</td>
                  <td className="py-4 px-3">City Care Hospital</td>
                  <td className="py-4 px-3">Cardiology</td>
                  <td className="py-4 px-3">25 Nov 2026</td>
                  <td className="py-4 px-3">10:30 AM</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Completed</span>
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-semibold text-[#102B46]">Dr. Meera Nair</td>
                  <td className="py-4 px-3">Lakeshore Hospital</td>
                  <td className="py-4 px-3">General Medicine</td>
                  <td className="py-4 px-3">28 Nov 2026</td>
                  <td className="py-4 px-3">11:00 AM</td>
                  <td className="py-4 px-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Upcoming</span>
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-semibold text-[#102B46]">Dr. Rahul Das</td>
                  <td className="py-4 px-3">KIMS Hospital</td>
                  <td className="py-4 px-3">Orthopedics</td>
                  <td className="py-4 px-3">30 Nov 2026</td>
                  <td className="py-4 px-3">09:30 AM</td>
                  <td className="py-4 px-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Confirmed</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">

          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#102B46]">Share Your Experience</h3>
            <p className="text-slate-500 text-sm mt-1">
              Help us improve your MediCare experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div>
              <p className="text-sm font-semibold text-slate-700 mb-3">Rate Our Web Application</p>

              <div className="flex gap-2 text-2xl mb-5">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-slate-300" />
              </div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Review
              </label>

              <textarea
                rows="4"
                placeholder="Share your experience with our web application..."
                className="w-full border border-slate-300 rounded-lg p-4 outline-none focus:border-teal-600 resize-none"
              ></textarea>

              <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold">
                Submit Review
              </button>
            </div>

            <div className="bg-[#102B46] text-white rounded-xl p-6 flex flex-col justify-center">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <FaHeart size={22} />
              </div>

              <h4 className="text-xl font-bold mb-3">Why Your Feedback Matters</h4>

              <p className="text-slate-300 text-sm leading-6 mb-5">
                Your feedback helps us make healthcare services easier and more convenient for everyone.
              </p>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <FaStar className="text-teal-400" />
                  Better patient experience
                </div>

                <div className="flex items-center gap-3">
                  <FaClock className="text-teal-400" />
                  Improved appointment process
                </div>

                <div className="flex items-center gap-3">
                  <FaStethoscope className="text-teal-400" />
                  Better healthcare services
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      <footer className="bg-[#102B46] text-slate-300 text-center py-5 text-sm">
        © 2026 MediCare. All Rights Reserved.
      </footer>

    </div>
  )
}

export default PatientDashboard
