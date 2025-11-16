import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doctors } from "../data/dummyDoctors";

export default function DoctorResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { specialization, date, pin } = location.state || {};

  const filteredDoctors = doctors.filter(
    (doc) => doc.specialization === specialization
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Available {specialization}s
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Showing doctors near PIN <span className="font-semibold">{pin}</span>{" "}
          on{" "}
          <span className="font-semibold">
            {date ? new Date(date).toLocaleDateString() : "selected date"}
          </span>
        </p>

        {filteredDoctors.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No doctors found for this specialization.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg p-5 cursor-pointer transition"
                onClick={() => navigate(`/doctor/${doc.id}`)}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {doc.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {doc.specialization}
                </p>
                <p className="text-sm text-gray-500 text-center mt-1">
                  ⭐ {doc.rating} | {doc.experience}
                </p>
                <p className="text-sm text-gray-500 text-center mt-1">
                  {doc.fees}
                </p>
                <p className="text-sm text-gray-400 text-center mt-1">
                  {doc.availability}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
