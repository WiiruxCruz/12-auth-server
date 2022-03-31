const express = require('express');
const resp = require('express/lib/response');

//Crear el servidor/aplicacion de express
const app = express();
/*
// GET
app.get('/', ( req, resp) => {
	//console.log('Petición en el /');

	resp.status(200).json({
		ok: true,
		msg: 'Todo salio bien',
		uid: 1234
	});
});
*/

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen( 4000, () => {
	console.log(`Servidor corriendo en puerto ${4000}`);
});