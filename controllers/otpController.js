// controllers/otpController.js
const OTP = require('../models/otp');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Function to generate a random 6-digit number
const generateOTP = () => {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

// Export the generateOTP function
exports.generateOTP = generateOTP;

exports.createOTP = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const otp = generateOTP();
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 10); // OTP expires after 10 minutes
        
        const newOTP = await OTP.create({
            userId,
            otp,
            expiresAt
        });

        // Here you would typically send the OTP to the user's email or phone number
        console.log(`OTP for user ${userId}: ${otp}`);
        
        return res.status(201).json({ message: 'OTP generated and sent to the user' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.verifyOTP = async (req, res) => {
    try {
        const { userId, otp } = req.body;
        
        const validOTP = await OTP.findOne({ userId, otp });


     
        if (!validOTP || validOTP.expiresAt < new Date()) {
          console.log("here");
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        } else{
          
          const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
              expiresIn: '1 hour',
          });  
          // Send the JWT token to the user
          return res.status(200).json({ 
              message: 'OTP verified successfully',
              token: token 
          });

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
