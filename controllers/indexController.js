const index = (req,res) =>{
	res.render('index',{
		title: 'Inicio'
	})

}

const ventas = (req,res,next) => {
	res.render('ventas', {
		title: 'Lista de Productos'
	});
}

const actos = (req,res,next) => {
	res.render('actos', {
		title: 'Lista de Productos'
	});
}

const inicio = (req,res,next) => {
	res.render('inicio', {
		title: 'Lista de Productos'
	});
}

const gacetas = (req,res,next) => {
	res.render('gacetas', {
		title: 'Lista de Productos'
	});
}

const venta = (req,res,next) => {
	res.render('venta', {
		title: 'Lista de Productos'
	});
}

const nuevaGaceta = (req,res,next) => {
	res.render('nuevaGaceta', {
		title: 'Lista de Productos'
	});
}

const nuevoActo = (req,res,next) => {
	res.render('nuevoActo', {
		title: 'Lista de Productos'
	});
}

const PlanCuenta = (req,res,next) => {
	res.render('plan-cuenta', {
		title: 'Lista de Productos'
	});
}

const Usuario = (req,res,next) => {
	res.render('usuario', {
		title: 'Lista de Productos'
	});
}


module.exports={
	index, ventas,actos,inicio,gacetas,venta,nuevaGaceta,nuevoActo,PlanCuenta,Usuario
}