'use strict';

class Utils
{

	getDatabaseSite = (tkSitio, sessionData) => {

		let tipoSesion = Number(sessionData.tipoSesion);
		let db = 'control';
		let sitios;

		switch(tipoSesion)
		{
			case 1:
				let sitios = JSON.parse(sessionData.proyectos);
				for(let i = 0; i < sitios.length; i++)
				{
					if(tkSitio == sitios[i].tk )
					{
						db = sitios[i].p;
						break;
					}
				}
				break;
			case 2:
				db = sessionData.proyecto;
				break;
			default:
				db = 'control';
				break;
		}
		return db;
	};

	getHttpObject = (req) => {
		let method = (req.method) ? req.method : '';
		return {'HTTP_METHOD': method};

	}

	mergeParams = (params = {}, body = {}, query = {}) => {
		return { ...params ,...body, ...query };
	};

	getParams = (p = {},values = '' ,params = {}, body = {}, query = {}) => {
		let obj = { ...params ,...body, ...query };

		if(values)
		{
			values = values.split(",");
			for(let x = 0; x < values.length; x++)
			{
				if(obj[values[x]] !== undefined)
				{
					p[values[x]] = (p[values[x]]) ? p[values[x]] : obj[values[x]];
				}
			}
		}

		return p;
	}

	getPaginacion = (params = {}, obj = {}) => {
		let values = ['page','rows','lang','status','activo','preview','rand','search','startDate','endDate'];
		if(!obj)
		{
			return params;
		}


		for(let i = 0; i < values.length; i++)
		{
			if( obj[values[i]] !== undefined && obj[values[i]] !== null)
			{
				params[values[i]] = (params[values[i]] !== undefined && params[values[i]] !== null) ? params[values[i]] : obj[values[i]] ;
			}
		}

		params.lang = params.lang || 'es';

		return params;

	};

	getLocals = (req = {}, values = '') => {
		req.locals = req.locals || {};
		return req.locals[values] || null;
	};

}

module.exports = new Utils;
