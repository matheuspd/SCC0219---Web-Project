"use strict"

const ValidationContract = require("../validators/validator");
const repository = require("../repositories/product-repository");
const guid = require("guid");
var config = require("../config");

// Get all products
exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    }
    catch(e) {
        res.status(500).send({
            message: "Failed to process the request."
        })
    }
};

exports.getBySlug = async(req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    }
    catch(e) {
        res.status(500).send({
            message: "Failed to process the request."
        })
    }
};

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
}

exports.getByTag = async(req, res, next) => {
    try {
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    }
    catch(e) {
        res.status(500).send({
            message: "Failed to process the request."
        })
    }
};

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, "The title must contain 3 or more letters.");
    contract.hasMinLen(req.body.slug, 3, "The slug must contain 3 or more letters.");
    contract.hasMinLen(req.body.description, 3, "The description must contain 3 or more letters.");
    contract.isGreaterThan(req.body.price, 0, "The price must be zero or greater than zero.");
    contract.isGreaterThan(req.body.rating, 0, "The rating must be zero or greater than zero.");
    contract.isLessThan(req.body.rating, 5, "The max rating must be 5 or less.");

    // Se os dados forem invalidos
    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({ 
            message: "Product has been successfully registered."
        });
    }
    catch(e) {
        res.status(500).send({
            message: "Failed to process the request."
        })
    }    
};

// Atualiza produto
exports.put = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, "The title must contain 3 or more letters.");
    contract.hasMinLen(req.body.slug, 3, "The slug must contain 3 or more letters.");
    contract.hasMinLen(req.body.description, 3, "The description must contain 3 or more letters.");
    contract.isGreaterThan(req.body.price, 0, "The price must be zero or greater than zero.");
    contract.isGreaterThan(req.body.rating, 0, "The rating must be zero or greater than zero.");
    contract.isLessThan(req.body.rating, 5, "The max rating must be 5 or less.");

    // Se os dados forem invalidos
    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: "Product has been successfully updated."
        });
    }
    catch(e) {
        res.status(500).send({
            message: "Failed to process the request."
        })
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
                message: "Product has been successfully removed."
            });
    }
    catch(e) {
        res.status(500).send({
            message: "Failed to process the request."
        })
    }
};
