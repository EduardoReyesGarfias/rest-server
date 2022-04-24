const {response, request} = require("express");

const getUsuarios = (req = request, res = response) => {

    res.send(`GET API - Controller`);
}


const getUsuarioById = (req = request, res = response) => {

    const id = req.params.id;

    res.send(`GET API - Controller - id: ${id}`);
}

const createUsuarios = (req, res = response) => {
    res.send('Post api - controller');
}

const updateUsuarios = (req, res = response) => {
    res.send('Put api - controller');
}

const deleteUsuarios = (req, res = response) => {
    res.send('Delete api - controller');
}

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuarios,
    updateUsuarios,
    deleteUsuarios
}