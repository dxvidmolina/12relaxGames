const express= require ("express");
const router= express.Router();
const guestMiddleware = require("../middlewares/guestMiddleware");
const { check } = require("express-validator");
const registerController= require ("../controllers/registerController.js")
const validateRegister =[
    check("nombre").notEmpty().withMessage("Ingrese un nombre").bail().isLength({min: 5}).withMessage("Ingresar un nombre valido"),
    check("email1").isEmail().withMessage("Ingrese un Mail valido"),
    check("email").isEmail(),
    check("password").notEmpty().bail().isLength({min: 8}).withMessage("Ingrese una contraseña valida"),
    check("password1").notEmpty().bail().isLength({min: 8}),
];

router.get ("/",guestMiddleware, registerController.crearUsuario);
router.post ("/",validateRegister,registerController.guardarUsuario);

module.exports = router;
