const { Router } = require("express");
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
router.post('/', createUsuarios);
router.put('/', updateUsuarios);
router.delete('/', deleteUsuarios);

module.exports = router;