// controllers/authController.js
import { validationResult } from 'express-validator';
import { generateToken } from '../services/authService.js';
import { userExists, getUserById , signupfunc } from '../services/userService.js';
import logger from '../utils/logger.js';

// Register user
const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    if (await userExists(email)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Insert the new user into the database (assuming your database model handles this)
    // userService.createUser(email, hashedPassword); 

    const token = generateToken({ email }); // Use the user info for token creation
    logger.info(`User registered with email: ${email}`);
    res.status(201).json({ token });
  } catch (error) {
    logger.error(`Error in registration: ${error.message}`);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!(await userExists(email))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = await getUserById(email); // Replace with appropriate DB query

    const token = generateToken(user);
    logger.info(`User logged in: ${email}`);
    res.json({ token });
  } catch (error) {
    logger.error(`Error in login: ${error.message}`);
    res.status(500).json({ message: 'Server error' });
  }
};




const signup = async (req, res) => {
  const { auditorName,designation,userName,password,userType,carbonCreditsUser,orgType,firstName, lastName,phoneNo,country,idProof,taxId,authSignId
   } = req.body;

   console.log("request body",req.body);
   

  try {
    // if (!(await userExists(email))) {
    //   return res.status(400).json({ message: 'Invalid credentials' });
    // }

    const user = await signupfunc(auditorName,designation,userName,password,userType,carbonCreditsUser,orgType,firstName, lastName,phoneNo,country,idProof,taxId,authSignId); 

    console.log("user" , user);
    

    // const token = generateToken(user);
    logger.info(`User logged in: ${email}`);
    res.json({ token });
     res.status(201).json({ token, user });
  } catch (error) {
    logger.error(`Error in login: ${error.message}`);
    res.status(500).json({ message: 'Server error' });
  }
};

export { register, login , signup };
