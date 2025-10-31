// middlewares/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something went wrong!',
  });
};

export default errorMiddleware;
