import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Stethoscope from "../assets/images/Stethoscope.jpg"

export default function FindDoctor() {
  const [specialization, setSpecialization] = useState("");
  const [date, setDate] = useState(null);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const specializations = [
    "General Physician", "Cardiologist", "Dermatologist", "Dentist", "Neurologist",
    "Gynecologist", "Pediatrician", "Orthopedic", "Psychiatrist", "Ophthalmologist",
    "ENT Specialist", "Urologist", "Gastroenterologist", "Pulmonologist", "Nephrologist",
    "Oncologist", "Endocrinologist", "Physiotherapist", "Nutritionist", "Radiologist"
  ];

  const handleSearch = () => {
    if (!/^\d{6}$/.test(pin)) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }
    if (!specialization) {
      setError("Please select a specialization.");
      return;
    }

    setError("");
    navigate("/doctor-results", {
      state: {
        specialization,
        date,
        pin,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center py-10 px-6">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <div className="md:w-1/2 bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col items-center justify-center p-8">
          <img
            src={Stethoscope}
            alt="Doctor illustration"
            className="w-72 h-auto object-contain mb-6"
          />
          <h2 className="text-2xl font-bold text-blue-700">Your Health Matters</h2>
          <p className="text-gray-600 text-center mt-2 text-sm">
            Find trusted doctors near you and book appointments effortlessly.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 p-8 bg-white relative">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Find a Doctor
          </h2>

          <div className="grid gap-5">
            {/* Specialization Dropdown */}
            <select
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">Select Specialization</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>

            {/* Date Picker */}
            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Select Date"
              dateFormat="dd-MM-yyyy"
              minDate={new Date()}
            />

            {/* Pin Code */}
            <input
              type="text"
              placeholder="Enter 6-digit PIN"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={6}
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white font-semibold rounded-lg py-3 hover:bg-blue-700 transition duration-200"
            >
              Search
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}

          {/* Decorative Images */}
          <div className="flex justify-between mt-10 opacity-95">
            <img
              src="https://undraw.co/api/illustrations/svg/undraw_medicine_re_kb4j.svg"
              alt="Medical Team"
              className="w-28 h-auto"
            />
            <img
              src="https://undraw.co/api/illustrations/svg/undraw_doctors_p6aq.svg"
              alt="Doctors Illustration"
              className="w-28 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
