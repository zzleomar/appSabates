const index = (req,res) =>{
	res.render('index',{
		title: 'Inicio'
	})

}

const ventas = (req,res,next) => {
	res.render('ventas', {
		title: ''
	});
}

const actos = (req,res,next) => {
	res.render('actos', {
		title: ''
	});
}

const inicio = (req,res,next) => {
	res.render('inicio', {
		title: ''
	});
}

const gacetas = (req,res,next) => {
	res.render('gacetas', {
		title: ''
	});
}

const venta = (req,res,next) => {
	res.render('venta', {
		title: ''
	});
}

const nuevaGaceta = (req,res,next) => {
	res.render('nuevaGaceta', {
		title: ''
	});
}

const nuevoActo = (req,res,next) => {
	res.render('nuevoActo', {
		title: ''
	});
}

const nuevaCuenta = (req,res,next) => {
	res.render('nuevaCuenta', {
		title: ''
	});
}

const PlanCuenta = (req,res,next) => {
	res.render('plan-cuenta', {
		title: ''
	});
}

const Usuario = (req,res,next) => {
	res.render('usuario', {
		title: ''
	});
}
const Contribuyentes = (req,res,next) => {
	res.render('contribuyentes', {
		title: ''
	});
}


module.exports={
	index, ventas,actos,inicio,gacetas,venta,nuevaGaceta,nuevoActo,PlanCuenta,Usuario,Contribuyentes,nuevaCuenta
}