import express from "express";
import { drink } from "../controllers/drink.js";
const router = express.Router();

router.post("/1drink", drink.insert);
router.get("/2drink", drink.all);
router.post("/3drink", drink.findOne);

export default router;