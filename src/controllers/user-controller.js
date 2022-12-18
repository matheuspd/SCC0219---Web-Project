"use strict"

const ValidationContract = require("../validators/validator");
const repository = require("../repositories/user-repository");
const md5 = require('md5');
const authService = require("../services/auth-service");

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, "The name must contain at least 3 characters.");
    contract.isEmail(req.body.email, "Invalid e-mail.");
    contract.hasMinLen(req.body.username, 4, "The username must contain at least 4 characters.");
    contract.hasMinLen(req.body.password, 4, "The password must contain at least 6 characters.");

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            telephone: req.body.telephone,
            address: req.body.address,
            username: req.body.username,
            password: md5(req.body.password + global.SALT_KEY),
            roles: req.body.roles
        });

        res.status(201).send({
            message: "User successfully registered."
        });
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
};

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send("Failed to process the request.");
    };
}

exports.authenticate = async(req, res, next) => {
    try {
        const user = await repository.authenticate({
            username: req.body.username,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!user) {
            res.status(404).send({
                message: "Invalid username or password."
            });
            return;
        }

        const token = await authService.generateToken({
            id: user._id,
            email: user.email,
            name: user.name,
            roles: user.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: user.email,
                name: user.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
};

exports.refreshToken = async(req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const user = await repository.getById(data.id);

        if (!user) {
            res.status(404).send({
                message: "User not found."
            });
            return;
        }

        const tokenData = await authService.generateToken({
            id: user._id,
            email: user.email,
            name: user.name,
            roles: user.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: user.email,
                name: user.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
};

exports.put = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, "The name must contain at least 3 characters.");
    contract.isEmail(req.body.email, "Invalid e-mail.");
    contract.hasMinLen(req.body.username, 4, "The username must contain at least 4 characters.");
    contract.hasMinLen(req.body.password, 4, "The password must contain at least 6 characters.");

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: "User has been successfully updated."
        });
    }
    catch(e) {
        res.status(500).send({
            message: "Failed to process the request."
        })
    }      
  }

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: "User succesfully removed."
        });
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
  }

exports.getAll = async(req, res, next) => {
    try{
        var userList = await repository.getAll()
        res.status(200).send(userList);
    } catch (e) {
        res.status(500).send({
            message: "Failed to process the request."
        });
    }
  }