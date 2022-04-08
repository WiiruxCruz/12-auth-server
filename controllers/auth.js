const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
//const { validationResult } = require('express-validator');

const crearUsuario = async( req, resp = response ) => {

	

	console.log( req.body );
	const { name, email, password } = req.body;

	try {
		console.log( name, email, password );

		// Verificar el email
		const usuario = await Usuario.findOne({ email });

		if( usuario ) {
			return resp.status(400).json({
				ok: false,
				msg: 'El usuario ya existe con ese email'
			});
		}

		//Crear usuario con el modelo
		const dbUser = new Usuario( req.body );

		//Hashear la contraseña
		const salt = bcrypt.genSaltSync(10);
		dbUser.password = bcrypt.hashSync(password, salt);

		//Generar el JWT

		//Crear usuario de DB
		await dbUser.save();

		//Generar respuesta exitosa
		return resp.status(201).json({
			ok: true,
			uid: dbUser.id,
			name,

		});


	} catch(error) {
		console.log(error);
		return resp.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador'
		});
	}	
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