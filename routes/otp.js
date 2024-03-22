// routes/otpRoutes.js
const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

// Route to create an OTP for a user
router.post('/create/:userId', otpController.createOTP);

// Route to verify an OTP
router.post('/verify', otpController.verifyOTP);

module.exports = router;
