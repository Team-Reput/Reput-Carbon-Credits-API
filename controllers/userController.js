// controllers/userController.js
const getUserProfile = (req, res) => {
  res.json({ user: req.user }); // req.user is attached by the verifyToken middleware
};

export { getUserProfile };
