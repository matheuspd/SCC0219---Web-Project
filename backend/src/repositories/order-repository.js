"use strict"

const mongoose = require("mongoose");
const Order = mongoose.model("Order");

exports.getAll = async() => {
    var res = await Order
        .find({});
    return res;
}

exports.getByUserId = async(id) => {
    var res = await Order
        .find({user: {_id: id}});
    return res;
}

exports.getById = async(id) => {
    var res = await Order
        .find({id});
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}

exports.update = async(data) => {
    await Order.findOneAndUpdate({
        user: {_id: data.user},
        status: "created"
        },
        {$set: {
            status: data.status,
            items: data.items
        }}
    )
}

exports.delete = async(id) => {
    await Order.findByIdAndRemove(id);
}