const express = require ("express");
const router = express.Router();
const guestMiddleware = require("../middlewares/guestMiddleware");
const registerController= require ("../controllers/registerController.js")
const { body } = require("express-validator");

<<<<<<< HEAD
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
=======
const { check } = require("express-validator");
const validateRegister =[
    check("nombre")
        .notEmpty().withMessage("Ingrese un nombre").bail()
        .isLength({min: 5}).withMessage("Ingresar un nombre válido"),
    check("email1")
        .notEmpty().withMessage('Ingrese un email').bail()
        .isEmail().withMessage("Ingrese un email válido"),
    check("email")
        .notEmpty().withMessage("Ingrese un email para confirmar").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    check("password")
        .notEmpty().withMessage("Ingrese una contraseña").bail()
        .isLength({min: 8}).withMessage("Ingrese al menos 8 carácteres"),
    check("password1")
        .notEmpty().bail()
        .isLength({min: 8}).withMessage('Ingrese al menos 8 carácteres'),
];

router.get ("/", guestMiddleware, registerController.crearUsuario);
router.post ("/", validateRegister, registerController.guardarUsuario);
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca

module.exports = router;