// services/userService.js
import { getConnection } from '../config/db.js';

/**
 * Fetch a user by their ID
 */
const getUserById = async (userId) => {
  const client = await getConnection();
  const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
  return result.rows[0];  // Return the first user (if exists)
};

/**
 * Check if a user exists by their email
 */
const userExists = async (email) => {
  const client = await getConnection();
  const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows.length > 0; // Returns true if user exists
};


const signupfunc = async(email) =>{
   const client = await getConnection();
   const result = await client.query(
  'SELECT * FROM dbo.signup_user($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )',[
   auditorName,
      designation,
      userName,
      password,
      userType,
      carbonCreditsUser,
      orgType,
      firstName,
      lastName,
      phoneNo,
      country,
      idProof,
      taxId,
      authSignId
  ]
);

  return result.rows[0];

}




export { getUserById, userExists ,signupfunc };
