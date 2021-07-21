const HttpException = require('../utils/HttpException.utils');
const utils = require('../utils/common.utils');
const config = require('../config/config.js');

class SeccionesController 
{
	constructor()
	{
		this.model =require('../models/usuarios.model');
	}

	_get = async (req, res, next) => {
		const sesion = req.sesion;
		const method = utils.getHttpObject(req);
		let params = {};
		let mp = utils.mergeParams(req.body, req.query, req.params);

		params = utils.getParams(params, 'tkSitio,tkRuta', mp, req.locals);
		params = utils.getPaginacion(params, mp);

		let um = new this.model();
		let result = await um.execute(sesion, method, params);

		res.send(result);
	};

	_post = async (req, res, next) => {
		const sesion = req.sesion;
		const method = utils.getHttpObject(req);
		let params = {};
		let mp = utils.mergeParams(req.body, req.query, req.params);

		params = utils.getParams(params, 'tkSitio,tkRuta,ruta,descripcion,metadatos,url,imagenUrl,imagenMiniaturaUrl,imagenVerticalUrl,tkDestinoInicio,tkDestinoFin,destinos,videoUrl,playlistUrl,categorias,redesSociales,zona,tkZona', mp, req.locals);
		params = utils.getPaginacion(params, mp);

		let um = new this.model();
		let result = await um.execute(sesion, method, params);

		res.send(result);
	};


	_getSitio = async (req, res, next) => {
		const sesion = req.sesion;
		const method = utils.getHttpObject(req);
		let params = {};
		let mp = utils.mergeParams(req.body, req.query, req.params);

		params = utils.getParams(params, 'tkSitio,url,tkSeccion,tkDetalle', mp, req.locals);
		params = utils.getPaginacion(params, mp);
		params.url = params.tkSeccion;
		let url = req.url;
		url = url.split('/');
		url.splice(0,2);
		params.url = url.join('/');

		let um = new this.model('secciones_sitio');
		let result = await um.execute(sesion, method, params);

		res.send(result);
	};

}

module.exports = new SeccionesController;


