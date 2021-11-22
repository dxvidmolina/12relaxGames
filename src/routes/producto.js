const express= require ("express");
const router= express.Router();
const productoController= require ("../controllers/productoController.js");
const guestMiddleware = require("../middlewares/guestMiddleware.js");
const authMiddleware = require("../middlewares/authMiddleware") 

const registerController= require ("../controllers/registerController.js");
const { check,body } = require("express-validator");
const validateCreate =[
    check("name").notEmpty().isLength({min: 5}).withMessage("Ingresar un nombre valido"),
    check("desc").isLength({min: 20}).withMessage("Ingresar una descripcion de al menos 20 caracteres"),
    body("name").notEmpty().isLength({min: 5}).withMessage("Ingresar un nombre valido"),
    body("desc").isLength({min: 20}).withMessage("Ingresar una descripcion de al menos 20 caracteres"),
];


router.get("/lista",productoController.list)
router.get("/producto",productoController.entrarproducto);
router.get("/create", productoController.create);
router.post("/create", productoController.storage);
router.get('/:id/', productoController.detail);
router.get('/',productoController.producto1)
router.get('/:id/edit/', productoController.edit);
router.put('/:id/',productoController.upload);
router.delete('/:id/delete/', productoController.destroy);


module.exports = router;