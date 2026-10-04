import express from "express";
import { motor } from "../controllers/motor.js";
const router = express.Router();

router.post("/1motor", motor.insert);
router.get("/2motor", motor.all);
router.get("/3motor/:id", motor.findOne);
export default router;
