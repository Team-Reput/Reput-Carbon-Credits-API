// routes/healthRoutes.js
import express from 'express';
import { getConnection } from '../config/db.js';

const router = express.Router();

// Health check endpoint
router.get('/health', async (req, res) => {
  try {
    const client = await getConnection();
    const result = await client.query('SELECT NOW()'); // Simple query to check DB connection
    res.status(200).json({
      status: 'success',
      message: 'Database is connected',
      time: result.rows[0].now, // The current timestamp from the database
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Database connection failed',
      error: err.message,
    });
  }
});

export default router;
