// utils/validate.js
import { body, validationResult } from 'express-validator';

/**
 * Middleware to validate user input on registration
 */
const validateRegistration = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('password').matches(/\d/).withMessage('Password must contain a number'),
];

/**
 * Middleware to validate user input on login
 */
const validateLogin = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

/**
 * Middleware to check validation result
 */
const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { validateRegistration, validateLogin, checkValidation };
