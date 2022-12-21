"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {  // Exemplo: Camiseta Verde = camiseta-verde
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }],
    image: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 10
    }
});

module.exports = mongoose.model("Product", schema);