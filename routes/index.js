const express = require('express');
const  router = express.Router();


const IndexController = require('../controllers/indexController');

router.get('/', IndexController.index );
router.get('/ventas', IndexController.ventas);
router.get('/actos', IndexController.actos);
router.get('/inicio', IndexController.inicio);
router.get('/gacetas', IndexController.gacetas);
router.get('/venta', IndexController.venta);
router.get('/nuevaGaceta', IndexController.nuevaGaceta);
router.get('/nuevoActo', IndexController.nuevoActo);
router.get('/plan-cuenta', IndexController.PlanCuenta);



router.get('*', (req,res,next) =>{
	res.end('Ruta no encontrada');
});


module.exports =router;







