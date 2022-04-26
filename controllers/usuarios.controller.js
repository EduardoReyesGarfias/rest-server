const {response, request} = require("express");

const getUsuarios = (req = request, res = response) => {

    res.send(`GET API - Controller`);
}


const getUsuarioById = (req = request, res = response) => {

    const id = req.params.id;

    res.send(`GET API - Controller - id: ${id}`);
}

const createUsuarios = (req = request, res = response) => {

    res.json({
        ok: true,
        msg: "POST - API - Controller",
        data: req.body
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