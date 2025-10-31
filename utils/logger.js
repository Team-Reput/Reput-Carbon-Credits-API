// utils/logger.js
import winston from 'winston';

// Configure the logger
const logger = winston.createLogger({
  level: 'info', // Default level to log
  format: winston.format.combine(
    winston.format.colorize(),  // Colorize log messages in the console
    winston.format.timestamp(), // Add timestamp
    winston.format.printf(
      ({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`
    )
  ),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }), // Console logging
    new winston.transports.File({ filename: 'app.log' }) // File logging (optional)
  ],
});

export default logger;
