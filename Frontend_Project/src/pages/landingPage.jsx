// src/pages/LandingPage.jsx
import { useState } from 'react';
import React, { useContext } from "react";
import { Moon, Sun } from 'lucide-react';
import { Link } from "react-router-dom";
import AuthModal from "../components/authModal.jsx";
import { AuthContext } from "../context/authContext.jsx";
import Cipla from "../assets/images/Cipla.png"
import dettol from "../assets/images/dettol.png"
import dolo from "../assets/images/dolo.png"
import drReddys from "../assets/images/drReddys.png"
import Eno from "../assets/images/Eno.png"
import Himalaya from "../assets/images/Himalaya.png"
import Liv52 from "../assets/images/Liv52.png"
import Revital from "../assets/images/Revital.png"
import savlon from "../assets/images/savlon.jpg"
import sunPharma from "../assets/images/sunPharma.png"
import Volini from "../assets/images/Volini.png"
import heroImage from "../assets/images/heroImage.jpg"
import coldFlue from "../assets/images/coldFlue.png"
import heartHealth from "../assets/images/heartHealth.png"
import immunity from "../assets/images/immunity.jpg"
import Diabetes from "../assets/images/Diabetes.jpg"
import crocinAdvance from "../assets/images/crocinAdvance.png"







export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const brands = [
    {
      name: 'Cipla',
      logo: Cipla,
      desc: 'Global pharmaceutical company delivering healthcare solutions.'
    },
    {
      name: 'Sun Pharma',
      logo: sunPharma,
      desc: 'One of India’s largest and trusted pharma brands.'
    },
    {
      name: 'Dr. Reddy’s',
      logo:  drReddys,
      desc: 'Innovation‐driven medicines and wellness products.'
    },
    {
      name: 'Himalaya',
      logo:  Himalaya,
      desc: 'Leading wellness & herbal health brand.'
    }
  ];

  const popularProducts = [
    {
      name: 'Crocin Advance',
      img: crocinAdvance,
      brand: 'GSK',
      price: '₹25',
      desc: 'Fast and effective relief from headaches and fever.'
    },
    {
      name: 'Revital H Capsules',
      img:  Revital,
      brand: 'Sun Pharma',
      price: '₹90',
      desc: 'Vital vitamins and minerals for energy support.'
    },
    {
      name: 'Volini Pain Relief Spray',
      img: Volini,
      brand: 'Sun Pharma',
      price: '₹120',
      desc: 'Instant relief for joint and muscle pain.'
    },
    {
      name: 'Dettol Antiseptic Liquid 550 ml',
      img:  dettol,
      brand: 'Reckitt',
      price: '₹110',
      desc: 'Trusted protection against germs and infections.'
    },
    {
      name: 'Dolo 650 Tablet 15s',
      img: dolo,
      brand: 'Micro Labs',
      price: '₹30',
      desc: 'Relief from pain & fever – trusted worldwide.'
    },
    {
      name: 'Liv 52 Tablet 100s',
      img: Liv52,
      brand: 'Himalaya',
      price: '₹150',
      desc: 'Herbal liver support supplement.'
    },
    {
      name: 'ENO Fruit Salt Lemon Flavour',
      img: Eno,
      brand: 'GSK',
      price: '₹15',
      desc: 'Fast relief from acidity and heartburn.'
    },
    {
      name: 'Savlon Hand Sanitizer 55 ml',
      img: savlon,
      brand: 'ITC',
      price: '₹25',
      desc: 'Kills 99.9% germs. Skin friendly.'
    }
  ];

  const healthIssues = [
    { title: 'Cold & Flu', img: coldFlue },
    { title: 'Diabetes Care', img: Diabetes },
    { title: 'Heart Health', img: heartHealth },
    { title: 'Immunity Boosters', img: immunity }
  ];

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}>
      
      {/* Main Navbar */}
       <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <a href=""></a><img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" alt="logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-sky-700 dark:text-sky-200">Health Companion</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:block text-sm text-gray-600 dark:text-gray-300">Serving across India 🌍</span>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-sky-100 dark:bg-gray-700 hover:bg-sky-200 dark:hover:bg-gray-600">
              {darkMode ? <Sun size={18} className="text-sky-500" /> : <Moon size={18} className="text-sky-700" />}
            </button>
             <div className="space-x-4">
          {user ? (
            <>
              <span className="text-sky-700 font-medium">
                Welcome 👋
              </span>
              <button
                onClick={logout}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowAuth(true)}
              className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-lg"
            >
              Login / Register
            </button>
          )}
        </div>
           

          </div>
        </div>
      </nav>



      {/* Sub-Nav Bar */}
      <div className="bg-white dark:bg-gray-800 py-3">
        <div className="max-w-8xl mx-auto flex justify-center space-x-8 text-m font-medium text-sky-700 dark:text-sky-200">
          
  <Link
    to="/find-doctor"
    className="hover:text-sky-900 dark:hover:text-sky-300"
  >
    Book Appointment
  </Link>
  <Link to="/doctor/:id" className="hover:text-sky-900 dark:hover:text-sky-300">Find a Doctor</Link>
          <a href="#" className="hover:text-sky-900 dark:hover:text-sky-300">Online Pharmacy</a>
          <Link
    to="/patient-records"
    className="hover:text-sky-900 dark:hover:text-sky-300"
  >
    Records
  </Link>
        </div>
      </div>

      {/* Hero Section */}
      
<section
   className="relative h-[70vh] flex flex-col justify-center items-center text-center text-sky-700"
  style={{
    backgroundImage:`url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 max-w-2xl px-4">
    <h2 className="text-5xl font-bold mb-4">Your Health, Our Priority</h2>
    <p className="text-lg mb-6 text-gray-100">
      Manage your health with confidence — from online pharmacy to expert consultations.
    </p>
    <div className="flex justify-center gap-4">
  {!user ? (
    // Show "Get Started" only if user not logged in
    <button
      onClick={() => setShowAuth(true)} 
      className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg text-lg"
    >
      Get Started
    </button>
  ) : null}

  {/* Always show Book Appointment */}
  <button
    onClick={() => {
      if (user) {
        window.location.href = "/find-doctor";
      } else {
        setShowAuth(true);
      }
    }}
    className="bg-white text-sky-700 hover:bg-gray-300 px-6 py-3 rounded-lg font-medium shadow-md transition"
  >
    Book Appointment
  </button>
</div>

    <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
  </div>
</section>

      {/* Common Health Issues */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-3xl font-bold mb-8 text-center text-sky-700 dark:text-sky-200">
        Common Health Issues
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {healthIssues.map((h, i) => (
          <a
            key={i}
            href={`/health-issue/${h.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace("&", "and")}`} // ✅ Fix URLs with '&'
            className="group block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={h.img}
                alt={`Illustration of ${h.title}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 text-center">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                {h.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </section>

      {/* Shop by Brand */}
      <section className="py-10 px-6">
        <h3 className="text-2xl font-semibold mb-6 text-center text-sky-700 dark:text-sky-200">Shop by Brand</h3>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {brands.map((b,i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition p-6 text-center">
              <img src={b.logo} alt={b.name} className="h-40 w-full mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{b.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-10 px-6 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-6 text-center text-sky-700 dark:text-sky-200">Shop by Popular Products</h3>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {popularProducts.map((p,i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden">
              <img src={p.img} alt={p.name} className="h-30 w-full object-cover mb-3" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">{p.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-sky-700 dark:text-sky-200">{p.price}</span>
                  <a href="#" className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded transition">Add to Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Health Companion. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2 text-sm">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
