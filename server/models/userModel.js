const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
        type: String,
        required: true,
        trim: true,
    },
    profilePic: {
        type: String,
        default: 'default-profile-pic.png'
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        requried: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    moblieNumber: {
        type: String,
        trim: true,
        unique: true,
    },
    age: {
        type: Number,
    },
    address: {
        country: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        pinCode: {
            type: Number,
            maxLength: 6,
            minLength: 6,
        }
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model(userSchema, "User")