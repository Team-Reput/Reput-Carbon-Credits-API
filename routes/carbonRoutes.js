// routes/authRoutes.js
import express from 'express';
import { validateRegistration, validateLogin, checkValidation } from '../utils/validate.js';
import {InsertBuyerData} from '../controllers/carbonController.js'

const router = express.Router();



router.post('/insertbuyerdata', InsertBuyerData);




export default router;
