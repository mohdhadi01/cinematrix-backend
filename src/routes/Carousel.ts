import { Router } from "express";
import {
  createCarousel,
  getCarousel,
} from "../controllers/caraouselController";

const router = Router();

router.get("/", getCarousel);
router.post("/", createCarousel);

export default router;
