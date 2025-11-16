import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doctors } from "../data/dummyDoctors";
//import Navbar from "../components/navbar.jsx";

export default function BookAppointment() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("In-person");
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !patientName || !age) return alert("Please fill all details.");
    setConfirmed(true);
  };

  if (!doctor)
    return (
      <div className="h-screen flex items-center justify-center text-gray-700">
        Doctor not found
      </div>
    );

  if (confirmed)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 text-gray-800 px-6">
        {/* <Navbar />  */}
        <div className="bg-white p-10 rounded-xl shadow-md max-w-md">
          <h2 className="text-3xl font-bold text-sky-700 mb-4">Appointment Confirmed ✅</h2>
          <p className="text-lg mb-4">
            Your appointment with <strong>{doctor.name}</strong> has been booked successfully.
          </p>
          <p className="text-gray-600">
            Date: <strong>{date?.toLocaleDateString()}</strong><br />
            Time: <strong>{time}</strong><br />
            Mode: <strong>{mode}</strong>
          </p>
          <Link
            to="/find-doctor"
            className="inline-block mt-6 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition"
          >
            Back to Find Doctors
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Doctor Summary */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 object-contain rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-sky-700">{doctor.name}</h1>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-gray-500 mt-1">⭐ {doctor.rating} | {doctor.experience}</p>
            <p className="text-gray-500 mt-1">{doctor.fees}</p>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Select Date</label>
              <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
                placeholderText="Choose Date"
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Select Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
              >
                <option value="">Choose Time Slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mode of Consultation */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Consultation Mode</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
            >
              <option>In-person</option>
              <option>Online</option>
            </select>
          </div>

          {/* Patient Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Patient Name</label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
                placeholder="Enter patient name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
                placeholder="Age"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg px-5 py-3 transition mt-2"
          >
            Confirm Appointment
          </button>
        </form>

        <Link
          to={`/`}/*doctor/${doctor.id} */
          className="block text-sky-600 mt-6 hover:underline text-center"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
