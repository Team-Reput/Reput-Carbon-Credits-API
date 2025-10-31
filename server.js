// server.js
import dotenv from 'dotenv';
import app from './app.js';

// Load environment variables from .env file
dotenv.config();

import { getConnection } from './config/db.js'; // Import the getConnection function for DB check

const testDbConnection = async () => {
  try {
      const pool = await getConnection(); // Get the pool (i.e., establish a connection)
      const result = await pool.query('SELECT NOW()'); // Query to check the connection
      console.log('✅ Database connection successful:',result.rows[0].now); // Log the current timestamp from PostgreSQL
  } catch (error) {
      console.error('❌ Database connection failed:', error.message); // Handle any errors that occur during connection
  }
};
await testDbConnection();


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});