
import React from 'react'
import {  Routes, Route } from 'react-router-dom'

import Header from './Components/Header'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PatientDashboard from './Pages/PatientDashboard'
import Booking from './Pages/Booking'
import BookToken from './Pages/BookToken '
import QueueTracking from './Pages/QueueTracking'
import Chatbot from './Pages/Chatbot'
import Hospitaldashboard from './Hospital dashboard/Hospitadashboard'
import RegisterWalkin from './Components/RegisterWalkin'
import Admin from './Pages/Admin '

import Footer from './Components/Footer'
import DoctorManagement from './Hospital dashboard/DoctorManagement'
import PatientManagement from './Hospital dashboard/PatientManagement'
import QueueManagement from './Hospital dashboard/QueueManagement'

import Department from './Hospital dashboard/Department'
import HospitalSidebar from './Hospital dashboard/HospitalSidebar'






const App = () => {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/book-token" element={<BookToken />} />
        <Route path="/queue-tracking" element={<QueueTracking />} />
        <Route path="/chatbot" element={<Chatbot />} />
      
        <Route path="/register-walkin" element={<RegisterWalkin />} />


        <Route path="/hospital-dashboard" element={<Hospitaldashboard />} />
        <Route path="/doctor-management" element={<DoctorManagement />} />
        <Route path="/patient-management" element={<PatientManagement />} />
        <Route path="/queue-management" element={<QueueManagement />} />
        
        <Route path="/department" element={<Department />} />
        <Route path="/sidebar" element={<HospitalSidebar />} />


        <Route path="/admin" element={<Admin />} />
      </Routes>

      
    </>
  )
}

export default App
