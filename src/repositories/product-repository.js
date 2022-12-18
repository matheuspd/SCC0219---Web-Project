"use strict"

const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = async() => {
    const res = await Product.find({
            active: true
        }, "title price slug rating tags");
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product.findOne({
            slug: slug,
            active: true
        }, "title description price slug rating tags");
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
    
    /* req.body = 
    product.title = req.body.title;
    product.slug = req.body.slug;
    product.description = req.body.description;
    product.price = req.body.price;
    product.rating = req.body.rating;
    product.active = req.body.active;
    product.tags = req.body.tags;
    */

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
                tags: data.tags
            }
    });
}

exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}
