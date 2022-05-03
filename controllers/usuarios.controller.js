const {response, request} = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuarios.model");

const getUsuarios = (req = request, res = response) => {

    res.send(`GET API - Controller`);
}


const getUsuarioById = (req = request, res = response) => {

    const id = req.params.id;

    res.send(`GET API - Controller - id: ${id}`);
}

const createUsuarios = async(req = request, res = response) => {

    const body = req.body;
    const usuario = new Usuario( body );

    // Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( body.password, salt );

    await usuario.save();

    res.json({
        ok: true,
        msg: "POST - API - Controller",
        data: req.body,
        usuario
    })
}

const updateUsuarios = (req = request, res = response) => {
    res.send('Put api - controller');
}

const deleteUsuarios = (req = request, res = response) => {
    res.send('Delete api - controller');
}

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuarios,
    updateUsuarios,
    deleteUsuarios
}