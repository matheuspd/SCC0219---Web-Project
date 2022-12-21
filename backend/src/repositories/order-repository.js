"use strict"

const mongoose = require("mongoose");
const Order = mongoose.model("Order");

exports.getAll = async() => {
    var res = await Order
        .find({}, 'number status user items')
        .populate('user', 'name')
        .populate('items.product', 'title');
    return res;
}

exports.getByUserId = async(id) => {
    var res = await Order
        .find({user: {_id: id}}, 'number status user items')
        .populate('user', 'name')
        .populate('items.product', 'title');
    return res;
}

exports.getById = async(id) => {
    var res = await Order
        .find({id}, 'number status user items')
        .populate('user', 'name')
        .populate('items.product', 'title');
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}

exports.delete = async(id) => {
    await Order.findByIdAndRemove(id);
}