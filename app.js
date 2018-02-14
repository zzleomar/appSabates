const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index');

//Configuraciones

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middeware
app.use((req,res, next) =>{
	console.log(req.url, req.method);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//archivos estaticos

app.use(express.static("public"));

//rutas
app.use(routes);


//errores



//servidor
app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});