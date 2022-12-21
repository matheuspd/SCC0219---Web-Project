"use strict"

const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = async() => {
    const res = await Product.find({
            active: true
        });
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product.findOne({
            slug: slug,
            active: true
        });
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.getByTag = async(tag) => {
    const res = await Product.find({
            tags: tag,
            active: true
        }, "title description price slug rating tags");
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
            $set : {
                title: data.title,
                slug: data.slug,
                description: data.description,
                price: data.price,
                rating: data.rating,
                tags: data.tags,
                image: data.image
            }
    });
}

exports.delete = async(id) => {
    await Product.findByIdAndRemove(id);
}
