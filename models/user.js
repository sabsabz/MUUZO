const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: false
    },
    last_name: {
      type: String,
      required: true,
      unique: false
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone_number:{
      type: String,
      required: true,
      unique: false
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['cashier', 'admin'],
      default: 'cashier'
    }
  },
  { timestamps: true }
);

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  console.log(password);
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;