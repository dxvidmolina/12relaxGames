const express= require ("express");
const router= express.Router();
const productoController= require ("../controllers/productoController.js")

router.get('/:id/', productoController.detail);
router.get('/', productoController.producto1)
router.get('/:id/edit/', productoController.edit);
router.put('/:id/', productoController.upload);
router.delete('/:id/delete/', productoController.destroy)
module.exports = router;