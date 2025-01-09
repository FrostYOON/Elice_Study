import express from "express";
import { signUpValidator } from "../../../validators/auth.validator.js";
import { signUpController, loginController } from "../../../controllers/auth.controller.js";
import { auth, googleAuth, googleCallback } from "../../../middlewares/auth.js";

const router = express.Router();

router.post('/signup', signUpValidator, signUpController);
router.post('/login', auth, loginController);
router.get('/login/google', googleAuth);
router.get('/login/google/callback', googleCallback, loginController);

export default router;
