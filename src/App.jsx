
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
import DoctorDashboard from './Pages/Doctordashboard'
import QueueManagement from './Pages/QueueManagement'
import RegisterWalkin from './Components/RegisterWalkin'
import Admin from './Pages/Admin '

import Footer from './Components/Footer'




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
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/queue-management" element={<QueueManagement />} />
        <Route path="/register-walkin" element={<RegisterWalkin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      
    </>
  )
}

export default App
