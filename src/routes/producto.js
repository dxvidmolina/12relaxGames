const express= require ("express");
const router= express.Router();
const productoController= require ("../controllers/productoController.js")

router.get("/lista", productoController.list)
router.get ("/producto", productoController.entrarproducto);
router.get ("/create", productoController.create);
router.post ("/create", productoController.create);
router.get('/:id', productoController.detail);
router.get('/', productoController.producto1)
router.get('/:id/edit', productoController.edit);
router.put('/:id/', productoController.update);
router.delete('/:id/delete/', productoController.destroy);


module.exports = router;