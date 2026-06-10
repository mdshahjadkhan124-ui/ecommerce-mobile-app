const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Route definitions (Dhyan dein dono POST requests hain)
router.post('/register', registerUser); 
router.post('/login', loginUser);

module.exports = router;