const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 't0d05M3Chup4n3lPing0';

exports.ensureAuth = function(req, res, next) {
	if (!req.headers.authorization) {
		return res
			.status(403)
			.send({ message: 'La petición no tiene la cabecera de Authentication' });
	}
	let token = req.headers.authorization.replace(/['"]+/g, '');

	try {
		let payload = jwt.decode(token, secret);
		console.log(payload);
		if (payload.exp <= moment().unix()) {
			return res.status(401).send({ message: 'El Token ha expirado' });
		}
		req.user = payload;
	} catch (ex) {
		// console.log(ex);
		return res.status(404).send({ message: 'Token no valido' });
	}
	next();
};
