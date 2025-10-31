// app.js
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import helmet from 'helmet';
import carbonRoutes from './routes/carbonRoutes.js';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/health', healthRoutes); 

app.use('/api/carbon', carbonRoutes);



// Global error handler
app.use(errorMiddleware);

export default app;
