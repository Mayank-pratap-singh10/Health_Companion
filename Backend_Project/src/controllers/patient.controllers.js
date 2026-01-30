import { asyncHandler } from "../utils/asyncHandler.js";
import { Patient } from "../models/patient.models.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";


const registerPatient = asyncHandler(async (req, res) => {
  const { username, age, gender, bloodGroup, email, password } = req.body;

  if (!username || !age || !gender || !bloodGroup || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const existingPatient = await Patient.findOne({ email });
  if (existingPatient) {
    return res.status(409).json({ success: false, message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newPatient = await Patient.create({
    username,
    age,
    gender,
    bloodGroup,
    email,
    password: hashedPassword,
  });

  const token = generateToken(newPatient._id);

  return res.status(201).json({
    success: true,
    message: "Patient registered successfully!",
    token,
    data: {
      id: newPatient._id,
      username: newPatient.username,
      email: newPatient.email,
    },
  });
});


const loginPatient = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  const patient = await Patient.findOne({ email });
  if (!patient) {
    return res.status(404).json({ success: false, message: "Patient not found" });
  }

  const isMatch = await bcrypt.compare(password, patient.password);
  if (!isMatch) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const token = generateToken(patient._id);

  return res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    data: {
      id: patient._id,
      username: patient.username,
      email: patient.email,
    },
  });
});

export { registerPatient, loginPatient };
