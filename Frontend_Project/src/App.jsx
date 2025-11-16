import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import FindDoctor from "./pages/findDoctor.jsx";
import DoctorDetails from "./pages/doctorDetails.jsx";
import BookAppointment from "./pages/bookAppointment.jsx";
import Register from "./pages/register.jsx";
import DoctorResults from "./pages/doctorResults.jsx";
import PatientRecords from "./pages/patientRecord.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/doctor/:id/book" element={<BookAppointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctor-results" element={<DoctorResults />} />
        <Route path="/patient-records" element={<PatientRecords />} />


      </Routes>
    </Router>
  );
}
