const { multipleColumnSet, getDatabaseSite } = require('../utils/common.utils');
// const query = require('../db/db-connection');

class UsuariosModel
{
	execute = async (sesion = {}, method = {}, params = {}) => {
		return [{ok: true, msg: 'Solo los administradores pueden ver esto...'}];
	};
}

module.exports =  UsuariosModel;



