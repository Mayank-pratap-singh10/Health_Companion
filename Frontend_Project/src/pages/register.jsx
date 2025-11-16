import React, { useState } from "react";
// import LandingNavbar from "../components/Navbar.jsx";
import axiosInstance from "../api/axiosInstance";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    gender: "",
    bloodGroup: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axiosInstance.post("/patient/register", formData);

    if (res.status === 200 || res.status === 201) {
      alert("🎉 Registration successful!");
      console.log("Response from backend:", res.data);
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert(error.response?.data?.message || "Registration failed. Please try again.");
  }
};

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const genders = ["Male", "Female", "Other"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <LandingNavbar />

      <div className="flex justify-center items-center py-10 px-4">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="Enter your age"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
              >
                <option value="">Select Gender</option>
                {genders.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Blood Group
              </label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-sky-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg px-5 py-3 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-sky-600 font-medium hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
