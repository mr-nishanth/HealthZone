const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Please enter your name'],
        },
        email: {
            type: String,
            trim: true,
            unique: [true, 'This email is already registered'],
            validate: [validator.isEmail, 'Please enter valid email address'],
            required: [true, 'Please enter your email address'],
        },
        mobile: {
            type: String,
            trim: true,
            unique: [true, 'This mobile is already registered'],
            required: [true, 'Please enter your mobile number'],
        },
        password: {
            type: String,
            select: false,
            minlength: [6, 'Your password must be longer than 6 characters'],
            required: [true, 'Please enter your password'],
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            default: 'user',
        },
        resetPasswordToken: String,
        resetPasswordTokenExpire: Date,
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    // if the password is not modified, then move on to the next middleware
    if (!this.isModified('password')) {
        next();
    }
    // if the password is modified, then hash the password and move on to the next middleware
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.getJWTToken = function () {
    // return a signed token with the user id and the secret key
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};

userSchema.methods.isValidatePassword = async function (enteredPassword) {
    // compare the entered password with the password in the database
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getResetPasswordToken = function () {
    // generate a token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // hash and set to resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash('sha256') // sha256 is a hashing algorithm that is used to hash the token (resetToken) below and store it in database (resetPasswordToken field)
        .update(resetToken) // update the token with the hashing algorithm above (sha256) and store it in database (resetPasswordToken field) - this is the hashed token that is stored in the database
        .digest('hex');

    // set token expire time to 30 minutes from now and set to resetPasswordTokenExpire field in the database (in milliseconds) - 30 * 60 * 1000 = 30 minutes
    this.resetPasswordTokenExpire = Date.now() + 30 * 60 * 1000;

    // NOTE: The token only set to the field(columns) not saved to the database
    // Saving is done in the auth.controllers.js file in the forgotPassword function
    return resetToken;
};

module.exports = mongoose.model('User', userSchema);
