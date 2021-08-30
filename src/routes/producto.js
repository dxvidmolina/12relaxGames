const express= require ("express");
const router= express.Router();
const productoController= require ("../controllers/productoController.js")

router.get('/:id', productoController.detail);
router.get('/', productoController.producto1)
router.get('/:id/edit', productoController.edit);
router.put('/:id/', productoController.update);
module.exports = router;