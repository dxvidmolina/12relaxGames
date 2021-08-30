const express= require ("express");
const router= express.Router();

const registerController= require ("../controllers/registerController.js")

router.get ("/registro", registerController.crearUsuario);
router.post ("/registro", registerController.guardarUsuario);

module.exports = router;