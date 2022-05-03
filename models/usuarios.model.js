const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'Mongo: El nombre es un campo obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'Mongo: El correo es un campo obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Mongo: La contraseña es un campo obligatorio']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['USER_ROLE', 'ADMIN_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

UsuarioSchema.methods.toJSON = function (){
    const {__v, password, ...usuario} =  this.toObject();
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);