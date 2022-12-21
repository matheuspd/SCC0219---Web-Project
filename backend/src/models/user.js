"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }],
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    telephone: {
        type: String,
        required: true,
        trim: true,
        pattern: "^(\\([0-9]{2}\\))?[0-9]{4}-[0-9]{4}$"
    },
    address: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("User", schema);