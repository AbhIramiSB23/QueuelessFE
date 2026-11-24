import React from "react";
import {
  FaRobot,
  FaUser,
  FaPaperPlane,
  FaCircleQuestion,
} from "react-icons/fa6";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Chatbot = () => {
  return (
    <>
    <Header/>


    <div className="min-h-screen bg-slate-100 p-5 md:p-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-7">
          <p className="text-teal-600 font-semibold">PATIENT SUPPORT</p>
          <h1 className="text-3xl font-bold text-[#102B46] mt-2">
            AI Patient Assistant
          </h1>
          <p className="text-slate-500 mt-2">
            An assistant interface for common hospital questions.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="bg-[#102B46] p-6 text-white flex items-center gap-4">
            <div className="bg-teal-500 p-4 rounded-xl">
              <FaRobot className="text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold">QueueLess Assistant</h2>
              <p className="text-teal-300 text-sm">
                Conversation interface
              </p>
            </div>
          </div>

          <div className="p-6 md:p-9 min-h-40 space-y-7 bg-slate-50">
            <div className="flex gap-3">
              <div className="bg-teal-100 text-teal-700 p-3 rounded-xl h-fit">
                <FaRobot />
              </div>
              <div className="bg-white shadow-sm p-5 rounded-2xl max-w-md">
                <p className="font-semibold text-[#102B46]">
                  Hello! Welcome to QueueLess.
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  How can I help you today?
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-teal-600 text-white p-5 rounded-2xl max-w-md">
                <p className="text-sm">How can I book a hospital token?</p>
              </div>
              <div className="bg-slate-200 text-slate-600 p-3 rounded-xl h-fit">
                <FaUser />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-teal-100 text-teal-700 p-3 rounded-xl h-fit">
                <FaRobot />
              </div>
              <div className="bg-white shadow-sm p-5 rounded-2xl max-w-md">
                <p className="font-semibold text-[#102B46]">
                  You can book your token easily!
                </p>
                <p className="text-slate-500 text-sm mt-2 leading-7">
                  Visit the Booking page, select your department and preferred
                  doctor, then choose your appointment date.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-teal-100 text-teal-700 p-3 rounded-xl h-fit">
                <FaRobot />
              </div>
              <div className="bg-white shadow-sm p-5 rounded-2xl max-w-md">
                <p className="text-sm text-slate-600">
                  You can also check your queue position through the Queue
                  Tracking page.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 border-t flex gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-slate-200 rounded-xl p-4 outline-teal-500"
            />
            <div className="bg-teal-600 text-white p-4 rounded-xl flex items-center justify-center">
              <FaPaperPlane />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Chatbot;
