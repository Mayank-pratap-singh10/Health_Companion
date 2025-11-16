import  { useState, useContext } from "react";
import axiosInstance from "../api/axiosInstance";
import { AuthContext } from "../context/authContext.jsx";

export default function AuthModal({ isOpen, onClose }) {
  const { login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    gender: "",
    bloodGroup: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const endpoint = isLogin ? "/patient/login" : "/patient/register";
    const res = await axiosInstance.post(endpoint, formData);

    // 🔹 Ensure backend actually returned a token
    if (res.data && res.data.token) {
      login(res.data.token); // store JWT globally
      alert(`${isLogin ? "Login" : "Registration"} successful!`);
      onClose(); // close modal
    } else {
      console.error("No token in response:", res.data);
      alert("Unexpected server response. Please try again.");
    }
  } catch (error) {
    console.error("Auth Error:", error);
    const message =
      error.response?.data?.message ||
      (error.code === "ERR_NETWORK"
        ? "Network error: check backend connection or CORS settings."
        : "Something went wrong.");
    alert(message);
  }
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center text-sky-700 mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input name="username" placeholder="Username" onChange={handleChange} className="w-full border p-2 rounded" required />
              <input name="age" type="number" placeholder="Age" onChange={handleChange} className="w-full border p-2 rounded" required />
              <select name="gender" onChange={handleChange} className="w-full border p-2 rounded" required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select name="bloodGroup" onChange={handleChange} className="w-full border p-2 rounded" required>
                <option value="">Select Blood Group</option>
                <option>A+</option><option>A-</option>
                <option>B+</option><option>B-</option>
                <option>O+</option><option>O-</option>
                <option>AB+</option><option>AB-</option>
              </select>
            </>
          )}
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 rounded" required />
          <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded font-medium">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center mt-3 text-sm text-gray-600">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)} className="text-sky-600 hover:underline cursor-pointer">Register</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)} className="text-sky-600 hover:underline cursor-pointer">Login</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
