import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import FindDoctor from "./pages/findDoctor.jsx";
import DoctorDetails from "./pages/doctorDetails.jsx";
import BookAppointment from "./pages/bookAppointment.jsx";
import Register from "./pages/register.jsx";
import DoctorResults from "./pages/doctorResults.jsx";
import PatientRecords from "./pages/patientRecord.jsx";
import login from "./pages/login.jsx";
import about from "./pages/about.jsx";
import contact from "./pages/contact.jsx";
import myProfile from "./pages/myProfile.jsx";  
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/find-doctor/:speciality" element={<FindDoctor />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/doctor/:id/book" element={<BookAppointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctor-results" element={<DoctorResults />} />
        <Route path="/patient-records" element={<PatientRecords />} />
        <Route path="/login" element={<login />} />
        <Route path="/about" element={<about />} />
        <Route path="/contact" element={<contact />} />
        <Route path="/my-profile" element={<myProfile  />} />


      </Routes>
    </Router>
  );
}
