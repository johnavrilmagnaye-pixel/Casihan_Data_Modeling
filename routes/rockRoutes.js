import express from "express";
import { rock } from "../controllers/rock.js";
const router = express.Router();

router.post("/1rock", rock.insert);
router.get("/2rock", rock.all);
router.get("/3rock/:id", rock.findOne);
export default router;
