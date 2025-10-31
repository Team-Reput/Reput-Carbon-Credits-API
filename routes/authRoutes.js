// routes/authRoutes.js
import express from 'express';
import { validateRegistration, validateLogin, checkValidation } from '../utils/validate.js';
import { register, login ,signup  } from '../controllers/authController.js';

const router = express.Router();

// User registration route
router.post('/register', validateRegistration, checkValidation, register);

// User login route
router.post('/login', validateLogin, checkValidation, login);


router.post('/signup',    signup);



export default router;
