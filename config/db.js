// config/db.js
import { Pool } from 'pg'; // Import the Pool class from the pg package
import dotenv from 'dotenv';

dotenv.config();

// PostgreSQL configuration
const pgConfig = {
  user: process.env.DB_USER,  // PostgreSQL username
  password: process.env.DB_PASSWORD,  // PostgreSQL password
  host: process.env.DB_HOST,  // PostgreSQL host (e.g., localhost)
  database: process.env.DB_NAME,  // The name of the database
  port: process.env.DB_PORT || 5432,  // Default PostgreSQL port is 5432
  max: 10,  // Maximum number of connections in the pool
  min: 0,  // Minimum number of connections
  idleTimeoutMillis: 30000,  // Time before idle connection is released
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false, // SSL config
};

let pool; // Declare pool variable

// Function to get or create the connection pool
export const getConnection = async () => {
  try {
    if (pool) {
      return pool; // reuse existing pool if it exists
    }

    pool = new Pool(pgConfig);
    console.log('PostgreSQL connected');
    return pool; // Return the pool object for future queries
  } catch (err) {
    console.error('PostgreSQL connection failed:', err);
    throw err; // Throw the error to be caught by the calling code
  }
};

// Export the Pool class if needed elsewhere
export { Pool };
