const { response } = require('express');

const crearUsuario = (req, resp) => {
	return resp.json({
		ok: true,
		msg: 'Crear usuario /new'
	})
}

const loginUsuario = (req, resp) => {
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