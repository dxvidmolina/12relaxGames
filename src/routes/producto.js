const express= require ("express");
const router= express.Router();
const productoController= require ("../controllers/productoController.js")

<<<<<<< HEAD
router.get("/lista", productoController.list)
router.get ("/producto", productoController.entrarproducto);
router.get ("/create", productoController.create);
router.post ("/create", productoController.create);
router.get('/:id/', productoController.detail);
router.get('/', productoController.producto1)
router.get('/:id/edit/', productoController.edit);
router.put('/:id/', productoController.upload);
router.delete('/:id/delete/', productoController.destroy);


=======
router.get('/:id', productoController.detail);
router.get('/', productoController.producto1)
router.get('/:id/edit', productoController.edit);
router.put('/:id/', productoController.update);
>>>>>>> f0f29262d4c21cfd5c2cb745e351cbdf48cc4e4f
module.exports = router;