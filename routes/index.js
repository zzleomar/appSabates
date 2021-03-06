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
router.get('/nuevaCuenta', IndexController.nuevaCuenta);
router.get('/plan-cuenta', IndexController.PlanCuenta);
router.get('/usuario', IndexController.Usuario);
router.get('/contribuyente', IndexController.Contribuyentes);

router.get('/rama', IndexController.Rama);
router.get('/subrama', IndexController.Subrama);
router.get('/especifico', IndexController.Especifico);
router.get('/subespecifico', IndexController.Subespecifico);



router.get('*', (req,res,next) =>{
	res.end('Ruta no encontrada');
});


module.exports =router;







