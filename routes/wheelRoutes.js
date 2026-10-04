import express from "express";
import { wheel } from "../controllers/wheel.js";
const router = express.Router();

router.post("/1wheel", wheel.insert);
router.get("/2wheel", wheel.all);
router.get("/3wheel/:id", wheel.findOne);
export default router;
