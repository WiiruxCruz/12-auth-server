const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
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
		const token = await generarJWT( dbUser.id, name );

		//Crear usuario de DB
		await dbUser.save();

		//Generar respuesta exitosa
		return resp.status(201).json({
			ok: true,
			uid: dbUser.id,
			name,
			token,
			email
		});


	} catch(error) {
		console.log(error);
		return resp.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador'
		});
	}	
}

const loginUsuario = async( req, resp = response ) => {
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
	try {
		console.log( email, password );

		const dbUser = await Usuario.findOne( { email } );

		if( !dbUser ) {
			return resp.status(400).json({
				ok: false,
				msg: 'El correo no existe'
			});
		}

		// Confirmar si el password hace match
		const validPassword = bcrypt.compareSync( password, dbUser.password );

		if( !validPassword ) {
			return resp.status(400).json({
				ok: false,
				msg: 'El password no es valido'
			});
		}

		// Generar el JWT
		const token = await generarJWT( dbUser.id, dbUser.name );

		// Respuesta del servicio
		return resp.json({
			ok: true,
			uid: dbUser.id,
			name: dbUser.name,
			token,
			email: dbUser.email
		});

		

	} catch ( error) {
		return resp.status(500).json({
			ok: false,
			msg: 'Hable con el administrador'
		});
	}
}

const revalidarToken = async(req, resp = response) => {

	const { uid } = req;

	//leer la base de datos
	const dbUser = await Usuario.findById(uid);



	// Generar el JWT
	const token = await generarJWT( uid, dbUser.name );

	return resp.json({
		ok: true,
		uid,
		name: dbUser.name,
		token,
		email: dbUser.email
	});
}


module.exports = {
	crearUsuario,
	loginUsuario,
	revalidarToken
}