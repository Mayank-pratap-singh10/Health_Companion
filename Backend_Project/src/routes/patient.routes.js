import { Router } from "express";
import { registerPatient, loginPatient } from "../controllers/patient.controllers.js";

const router = Router();

router.route("/register").post(registerPatient);
router.route("/login").post(loginPatient);

export default router;
