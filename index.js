const express = require('express');
//const resp = require('express/lib/response');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

console.log(process.env);

//Crear el servidor/aplicacion de express
const app = express();

// Base de datos
dbConnection();

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

// Directorio público
app.use( express.static('public') )

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Manejar demas rutas
app.get('*', (req, resp) => {
	resp.sendFile( path.resolve( __dirname, 'public/index.html'));
});

app.listen( process.env.PORT , () => {
	console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});