const User = require('../models/user');
const OTP = require('../models/otp'); // Assuming this is your OTP model
const otpController = require('./otpController');

// Register a new user
const register = async (req, res, next) => {
    const { first_name, last_name, email, password, phone_number, role } = req.body;

    try {
        const user = new User({
            first_name,
            last_name,
            email,
            phone_number,
            role,
            password,
        });
        await user.save();
        res.json({ message: 'Registration successful' });
    } catch (error) {
        res.json({message: "error creating user"})
    }
};

// Login with an existing user
const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
   
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await user.comparePassword(password);
      
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }


        const otp = otpController.generateOTP(); 
        const expiresAt = new Date();

        expiresAt.setMinutes(expiresAt.getMinutes() + 10); 

        await OTP.create({
            userId: user._id,
            otp,
            expiresAt
        });

        console.log(`OTP for user ${user._id}: ${otp}`);
        return res.status(200).json({ 
            message: 'OTP has been sent. Please verify to continue.',
            userId: user._id, 
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { register, login };