const Role = require("../models/role.model");
const Usuario = require("../models/usuarios.model");

// Ver si es un rol que existe en la BD
const esRolValido = async(rol = 'somerole') =>{

    const existeRol = await Role.findOne({rol});

    if(!existeRol)
        throw new Error(`check: El rol ${rol} no es un rol valido`);

}

// Verificar no exista el correo en la BD
const existeEmail = async(correo) =>{

    const existeEmail = await Usuario.findOne({ correo });
    if(existeEmail)
        throw new Error(`check: El correo ${correo} ya existe`);

}



module.exports = {
    esRolValido,
    existeEmail
}