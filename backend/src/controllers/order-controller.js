"use strict"

const repository = require("../repositories/order-repository");
const guid = require("guid");
const authService = require("../services/auth-service");

exports.getAll = async(req, res, next) => {
    try {
        var data = await repository.getAll();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
}

exports.getByUserId = async(req, res, next) => {
    try {
        var data = await repository.getByUserId(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
}

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

exports.post = async(req, res, next) => {
    try {        
        await repository.create({
            user: req.body.user,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({
            message: "Successfully registered order."
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        var data = await repository.delete(req.params.id);
        res.status(200).send({
            message: "Order succesfully removed."
        });
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
}