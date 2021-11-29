const express= require ("express");
const router= express.Router();
const guestMiddleware = require("../middlewares/guestMiddleware");
const registerController= require ("../controllers/registerController.js")
const { body } = require("express-validator");

const validaciones =[
    body("nombre")
        .notEmpty().withMessage("Ingrese un nombre").bail()
        .isLength({min: 5}).withMessage("Ingresar un nombre de al menos 5 carácteres"),
    body("email1")
        .isEmail().withMessage("Ingrese un email válido"),
    body("email")
        .isEmail(),
    body("password")
        .notEmpty().withMessage("Ingrese una contraseña válida").bail()
        .isLength({min: 8}),
    body("password1")
        .notEmpty().bail()
        .isLength({min: 8})
];
router.get ("/",guestMiddleware, registerController.crearUsuario);
router.post ("/", validaciones, registerController.guardarUsuario);

module.exports = router;