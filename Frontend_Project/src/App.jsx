import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import FindDoctor from "./pages/findDoctor.jsx";
import DoctorDetails from "./pages/doctorDetails.jsx";
import BookAppointment from "./pages/bookAppointment.jsx";
import Register from "./pages/register.jsx";
import DoctorResults from "./pages/doctorResults.jsx";
import PatientRecords from "./pages/patientRecord.jsx";
import Login from "./pages/login.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import MyProfile from "./pages/myProfile.jsx";  
import Navbar from "./components/Navbar.jsx";
import Doctorss from "./pages/doctorss.jsx";

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
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile  />} />
        <Route path="/doctor-deatails" element={<DoctorDetails />} />
        <Route path="/doctorss" element={<Doctorss  />} />


      </Routes>
    </Router>
  );
}
