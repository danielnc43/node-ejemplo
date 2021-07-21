const response = require('../utils/Response.utils');

const sendRest = (req, res, next) => {
	let oldSend = res.send
	res.send = function(data) {
		res.send = oldSend 
		data = data || [];

		response.setResponse(true);

		if(data[1])
		{
			if(data[1].hasOwnProperty('rowCount'))
			{
				response.setRowCount(data[1].rowCount);
			}
			// data.splice(1, 1);
		}

		if(data[0][0] && data[0][0].hasOwnProperty('ok'))
		{
			data[0][0].ok = (data[0][0].ok) ? true : false;
			response.setResponse(data[0][0].ok);
		}

		if(data[0][0] && data[0][0].hasOwnProperty('code'))
		{
			let code = data[0][0].code;
			delete data[0][0].code;
			response.setResult(data[0][0]);
			return res.status(code).send(response);	
		}

		response.setResult(data[0]);
		return res.send(response) 
	}
	next()
}

module.exports = sendRest;
