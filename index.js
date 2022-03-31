const express = require('express');
const res = require('express/lib/response');

//Crear el servidor/aplicacion de express
const app = express();

// GET
app.get('/', ( req, resp) => {
	//console.log('Petición en el /');

	resp.status(200).json({
		ok: true,
		msg: 'Todo salio bien',
		uid: 1234
	});
});

app.listen( 4000, () => {
	console.log(`Servidor corriendo en puerto ${4000}`);
});