import React from "react";
import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/dummyDoctors";
//import Navbar from "../components/navbar.jsx";   // 


export default function DoctorDetails() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor)
    return (
      <div className="h-screen flex items-center justify-center text-gray-700">
        Doctor not found
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* <Navbar/> */}
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-full object-contain"
          />
          <div>
            <h1 className="text-3xl font-bold text-sky-700 mb-2">
              {doctor.name}
            </h1>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-gray-500 mt-1">{doctor.experience}</p>
            <p className="text-gray-500 mt-1">⭐ {doctor.rating} rating</p>
            <p className="text-gray-600 mt-2">
              <strong>Consultation Fee:</strong> {doctor.fees}
            </p>
            <p className="text-gray-600 mt-1">
              <strong>Availability:</strong> {doctor.availability}
            </p>
            <p className="text-gray-600 mt-1">
              <strong>Clinic:</strong> {doctor.address}
            </p>

            <Link
  to={`/doctor/${doctor.id}/book`}
  className="mt-5 inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-lg transition"
>
  Book Appointment
</Link>

          </div>
        </div>
        <Link
          to="/"
          className="text-sky-600 mt-6 inline-block hover:underline"
        >
          ← Back to Dashboard 
        </Link>
      </div>
    </div>
  );
}
