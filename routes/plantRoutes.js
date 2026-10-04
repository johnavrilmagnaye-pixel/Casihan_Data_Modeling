import express from "express";
import { plant } from "../controllers/plant.js";
const router = express.Router();

router.post("/1plant", plant.insert);
router.get("/2plant", plant.all);
router.get("/3plant/:id", plant.findOne);
export default router;
