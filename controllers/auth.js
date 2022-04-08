const { response } = require('express');
//const { validationResult } = require('express-validator');

const crearUsuario = ( req, resp = response ) => {

	

	console.log( req.body );
	const { name, email, password } = req.body;
	console.log( name, email, password );

	return resp.json({
		ok: true,
		msg: 'Crear usuario /new'
	})
}

const loginUsuario = (req, resp = response) => {
	/* Se comenda porque se agrega funcionalidad en el middleware
	const errors = validationResult( req );

	console.log(errors);
	if( !errors.isEmpty() ) {
		return resp.status(400).json({
			ok: false,
			errors: errors.mapped()
		})
	}
	*/
	
	const { email, password } = req.body;
	console.log( email, password );

	return resp.json({
		ok: true,
		msg: 'Login de usuario /'
	})
}

const revalidarToken = (req, resp = response) => {
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