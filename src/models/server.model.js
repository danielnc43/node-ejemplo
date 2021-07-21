const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
//const { dbConnection } = require('../models/db.js');

const sendRest = require('../middleware/sendRest.middleware');

class Server 
{
	constructor()
	{
		this.app = express();
		dotenv.config();
		this.port = process.env.PORT || 3000;

		this.usuariosPath = '/usuarios';

		this.middlewares();
		this.routes();
	}

	routes()
	{
		this.app.use(this.usuariosPath, require('../routes/usuarios.route'));
	}

	middlewares()
	{
		// CORS
		this.app.use(cors());

		// Paseo y lectura de body
		this.app.use( express.json());

		// Directorio publico
		this.app.use(express.static('public'));

		// Modificar response
		this.app.use(sendRest);

		// BodyPArser
		this.app.use(bodyParser.json());
		this.app.use( bodyParser.urlencoded({ extended: true }));


	}

	listen()
	{
		this.app.listen(this.port, () => {
			console.log(`http://localhost:${this.port}`)
		});
	}
}

module.exports = Server;

