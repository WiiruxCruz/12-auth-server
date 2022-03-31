const express = require('express');
//const resp = require('express/lib/response');
const cors = require('cors');

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

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen( 4000, () => {
	console.log(`Servidor corriendo en puerto ${4000}`);
});