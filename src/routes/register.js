const express= require ("express");
const router= express.Router();

const registerController= require ("../controllers/registerController.js")

router.get ("/", registerController.crearUsuario);
router.post ("/", registerController.guardarUsuario);

module.exports = router;