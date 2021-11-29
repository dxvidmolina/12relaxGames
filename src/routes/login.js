const express= require ("express");
const { check } = require("express-validator");
const router= express.Router();
<<<<<<< HEAD
let validationResult = [
    check ('email').isEmail().withMessage('Ingrese un email válido'),
    check('password'.isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres'))
]


=======
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca
const loginController= require ("../controllers/loginController.js")
const loginValidate = [
    check('email')
        .isEmail().withMessage('Ingrese un email válido'),
    check('password')
        .isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres')
]

router.get ("/", loginController.entrarLogin);
<<<<<<< HEAD
router.post("/", validationResult ,loginController.processLogin);
=======
router.post("/", loginValidate,loginController.processLogin);
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca
router.get ('/check', function(req, res){
    if (req.session.userLogued == undefined) {
        res.send ("mal")
    }else {
        res.send("usuario " + req.session.userLogued.email)
    }
})
module.exports = router;