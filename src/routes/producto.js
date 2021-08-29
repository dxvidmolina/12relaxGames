const express= require ("express");
const router= express.Router();

const productoController= require ("../controllers/productoController.js")

router.get("/list", productoController.list)
router.get ("/", productoController.entrarproducto);
router.get ("/create", productoController.create);
router.post ("/create", productoController.create);

module.exports = router;