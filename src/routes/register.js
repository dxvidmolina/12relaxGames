const express= require ("express");
const router= express.Router();
const guestMiddleware = require("../middlewares/guestMiddleware");
const { body } = require("express-validator");
const registerController= require ("../controllers/registerController.js")
const validateRegister =[
    body("nombre").notEmpty().isLength({min: 5}).withMessage("Ingresar un nombre valido"),
    body("email1").isEmail().withMessage("Ingrese un Mail valido"),
    body("email").isEmail(),
    body("password").notEmpty().isLength({min: 8}).withMessage("Ingrese una contraseña valida"),
    body("password1").notEmpty()
];

router.get ("/",guestMiddleware, registerController.crearUsuario);
router.post ("/",validateRegister,registerController.guardarUsuario);

module.exports = router;
