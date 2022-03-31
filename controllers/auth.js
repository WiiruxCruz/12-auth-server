const { response } = require('express');

const crearUsuario = ( req, resp = response ) => {

	console.log( req.body );
	const { name, email, password } = req.body;
	console.log( name, email, password );

	return resp.json({
		ok: true,
		msg: 'Crear usuario /new'
	})
}

const loginUsuario = (req, resp) => {
	
	const { email, password } = req.body;
	console.log( email, password );

	return resp.json({
		ok: true,
		msg: 'Login de usuario /'
	})
}

const revalidarToken = (req, resp) => {
	return resp.json({
		ok: true,
		msg: 'Renew'
	})
}


module.exports = {
	crearUsuario,
	loginUsuario,
	revalidarToken
}