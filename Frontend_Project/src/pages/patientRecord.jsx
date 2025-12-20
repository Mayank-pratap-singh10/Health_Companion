import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays, Stethoscope, Clock, FileText, Upload, HeartPulse } from "lucide-react";
import { AuthContext } from "../context/authContext.jsx";
import { Link } from "react-router-dom";

export default function PatientRecords() {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user) return;
      try {
        const res = await axios.get(
          `http://localhost:4000/api/appointments/${user._id}`,
          { withCredentials: true }
        );
        setAppointments(res.data || []);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [user]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-700">
        <HeartPulse className="text-sky-500 w-20 h-20 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Access Restricted</h2>
        <p className="mb-6 text-gray-500">Please login to view your health records and appointments.</p>
        <Link to="/" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg">
          Go to Login
        </Link>
      </div>
    );
  }

  const today = new Date();
  const upcomingAppointments = appointments.filter(a => new Date(a.date) >= today);
  const pastAppointments = appointments.filter(a => new Date(a.date) < today);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file to upload");
    const formData = new FormData();
    formData.append("prescription", file);
    formData.append("patientId", user._id);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/prescriptions/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      setUploadStatus(" Prescription uploaded successfully!");
      setFile(null);
    } catch (err) {
      console.error(err);
      setUploadStatus(" Upload failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-sky-700 dark:text-sky-300">
            {user.name ? `${user.name}'s Health Records` : "Your Health Records"}
          </h1>
          <FileText className="text-sky-600 w-8 h-8" />
        </div>
      </div>

      {/* Prescription Upload */}
      <div className="max-w-6xl mx-auto mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center mb-4">
          <Upload className="text-sky-600 w-6 h-6 mr-2" />
          <h2 className="text-xl font-semibold">Upload Prescription</h2>
        </div>
        <p className="text-gray-500 text-sm mb-4">
          Upload your prescription image or PDF. It will be securely stored in your record.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="file"
            accept="image/*, .pdf"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-auto"
          />
          <button
            onClick={handleUpload}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg"
          >
            Upload
          </button>
        </div>
        {uploadStatus && <p className="mt-3 text-sm">{uploadStatus}</p>}
      </div>

      {/* Upcoming Appointments */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center mb-4">
          <CalendarDays className="text-sky-600 w-6 h-6 mr-2" />
          <h2 className="text-2xl font-semibold">Upcoming Appointments</h2>
        </div>
        {loading ? (
          <p>Loading appointments...</p>
        ) : upcomingAppointments.length === 0 ? (
          <p className="text-gray-500">No upcoming appointments yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingAppointments.map((appt) => (
              <div key={appt._id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                    alt={appt.doctor}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-300">{appt.doctorName}</h3>
                    <p className="text-sm text-gray-500">{appt.specialty}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 mr-1 text-sky-500" /> {appt.date} • {appt.time}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{appt.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Past Appointments */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center mb-4">
          <Stethoscope className="text-sky-600 w-6 h-6 mr-2" />
          <h2 className="text-2xl font-semibold">Past Appointments</h2>
        </div>
        {loading ? (
          <p>Loading appointments...</p>
        ) : pastAppointments.length === 0 ? (
          <p className="text-gray-500">No past appointments yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {pastAppointments.map((appt) => (
              <div key={appt._id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4320/4320346.png"
                    alt={appt.doctor}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-300">{appt.doctorName}</h3>
                    <p className="text-sm text-gray-500">{appt.specialty}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 mr-1 text-sky-500" /> {appt.date} • {appt.time}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{appt.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4 border-t border-gray-300 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Health Companion — Your trusted medical partner.
      </footer>
    </div>
  );
}
