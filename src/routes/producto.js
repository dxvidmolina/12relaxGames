const express= require ("express");
const router= express.Router();
const productoController= require ("../controllers/productoController.js");
const guestMiddleware = require("../middlewares/guestMiddleware.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.get("/lista", guestMiddleware,productoController.list)
router.get ("/producto", guestMiddleware,productoController.entrarproducto);
router.get ("/create", authMiddleware, productoController.create);
router.post ("/create", productoController.storage);
router.get('/:id/', guestMiddleware,productoController.detail);
router.get('/', guestMiddleware,productoController.producto1)
router.get('/:id/edit/', authMiddleware, productoController.edit);
router.put('/:id/', authMiddleware,productoController.upload);
router.delete('/:id/delete/', authMiddleware, productoController.destroy);


module.exports = router;