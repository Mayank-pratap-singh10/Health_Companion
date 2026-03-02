// src/components/Navbar.jsx

import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import AuthModal from "./authModal";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const [darkMode, setDarkMode] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  // Persist dark mode
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", newMode);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
                alt="logo"
                className="h-8 w-8"
              />
            </Link>
            <h1 className="text-xl font-bold text-sky-700 dark:text-sky-200">
              Health Companion
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:block text-sm text-gray-600 dark:text-gray-300">
              Serving across India 🌍
            </span>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-sky-100 dark:bg-gray-700 hover:bg-sky-200 dark:hover:bg-gray-600"
            >
              {darkMode ? (
                <Sun size={18} className="text-sky-500" />
              ) : (
                <Moon size={18} className="text-sky-700" />
              )}
            </button>

            {user ? (
              <>
                <span className="text-sky-700 font-medium">Welcome 👋</span>
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
      </nav>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
}