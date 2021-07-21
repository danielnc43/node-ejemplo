const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const config = require('../config/config.js');
dotenv.config();

const auth = (roles = []) => {
    return async function (req, res, next) {
        try {

			if (typeof roles === 'string') {
				roles = [roles];
			}

            const authHeader = req.headers.authorization;
            const bearer = 'Bearer ';

            const token = authHeader.replace(bearer, '');
            const secretKey = config.SECRET_JWT || "";

            // Verify Token
            // const decoded = jwt.verify(token, secretKey);

            if ( roles.length && !roles.includes(token)) {
                res.send([{ok: false, msg: 'Sesión invalida.'}]);
            }

            req.sesion = {role: token};
            next();

        } catch (e) {
            e.status = 401;
            next(e);
        }
    }
}

module.exports = auth;
