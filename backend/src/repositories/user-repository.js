"use strict"

const mongoose = require("mongoose");
const User = mongoose.model("User");
const md5 = require("md5");

exports.create = async(data) => {
    var user = new User(data);
    await user.save();
}

exports.authenticate = async(data) => {
    const res = await User.findOne({
        username: data.username,
        password: data.password
    });
    return res;
}

exports.getById = async(id) => {
    const res = await User.findById(id);
    return res;
}

exports.getByUsername = async(data) => {
    const res = await User.findOne({username: data.username});
    return res;
}

exports.update = async(id, userData) => {
    await User.findByIdAndUpdate(id, {
        $set : {
            username: userData.username,
            password: md5(userData.password + global.SALT_KEY),
            email: userData.email,
            roles: userData.roles,
            name: userData.name,
            telephone: userData.telephone,
            address: userData.address
        }
    });
}

exports.delete = async(id) => {
    await User.findByIdAndRemove(id);
}

exports.getAll = async() => {
    const res = await User.find();
    return res;
}