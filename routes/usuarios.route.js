const { Router } = require("express");
const { check } = require("express-validator");

const { validaCampos } = require("../middlewares/valida-campos");
const { esRolValido, existeEmail } = require("../helpers/db-validators");


const { 
    getUsuarios,
    getUsuarioById, 
    createUsuarios, 
    updateUsuarios, 
    deleteUsuarios 
} = require("../controllers/usuarios.controller");

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', [
    check('nombre', "check: El nombre es obligatorio").not().isEmpty(),
    check('password', "check: La contraseña es obligatorio").isLength({min: 6}),
    check('correo', "check: El correo no tiene el formato necesario").isEmail().custom( existeEmail ),
    // check('rol', "check: El rol no es valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check('rol').custom( esRolValido ),
    validaCampos
]
, createUsuarios);
router.put('/', updateUsuarios);
router.delete('/', deleteUsuarios);

module.exports = router;