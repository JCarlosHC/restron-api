import { Router } from "express";
import * as controller from "../controllers/reservation";
import { check, validationResult } from "express-validator";

const router = Router();

router.get('/', controller.getAllReservations);
router.get('/find/:code', controller.findReservation);
router.post('/make', controller.makeReservation);

export default router;