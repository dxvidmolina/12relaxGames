const express= require ("express");
const router= express.Router();
const guestMiddleware = require("../middlewares/guestMiddleware");

const registerController= require ("../controllers/registerController.js")

router.get ("/",guestMiddleware, registerController.crearUsuario);
router.post ("/", registerController.guardarUsuario);

module.exports = router;
