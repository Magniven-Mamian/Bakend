const express= require('express');
const router=express.Router();
const productoController=require('../controllers/ProductoController')


router.post('/create', productoController.create);
router.post('/list', productoController.list);

router.post('/delete', productoController.delete);
router.post('/edit/:id', productoController.update);
router.post('/obtenerproducto', productoController.obtenerproducto);
module.exports= router;