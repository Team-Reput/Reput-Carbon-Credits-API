import { getConnection } from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();


export const signup = async (req, res) => {
  try {
    const {
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
    } = req.body;

    const pool = await getConnection();

    const query = `
      SELECT * FROM dbo.signup_user($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ,$11,$12 ,$13 ,$14);
    `;

    const values = [
    
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
    ];

    const result = await pool.query(query, values);
    const executionResult = result.rows[0];

    console.log("result",result);
     console.log("checking",executionResult);

    if (!executionResult.o_status) {
      return res.status(400).json({ success: false, message: executionResult.o_message });
    }

    return res.status(200).json({
      success: true,
      o_message: 'Data saved successfully.',
      data: result.rows || []
    });

   
    

  } catch (err) {
    console.error('signup Error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error.', error: err.message });
  }
};