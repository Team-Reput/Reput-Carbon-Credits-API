// routes/userRoutes.js
import express from 'express';
import { getUserProfile } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to get user profile (protected route)
router.get('/profile', verifyToken, getUserProfile);

export default router;
