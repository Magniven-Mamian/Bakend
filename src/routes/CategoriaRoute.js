const express= require('express');
const router=express.Router();
const categoriaController=require('../controllers/CategoriaController')




router.post('/create', categoriaController.create);
router.get('/list', categoriaController.list);
module.exports= router;
