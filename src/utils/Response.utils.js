class ResponseData
{
	constructor()
	{
		this.result = [];
		this.response = false;
		this.message = 'Ocurrió un error';
		this.rowCount = 0;
	}

	setResponse(response, message = '')
	{
		this.response = response;
		this.message = (message) ? message : this.message;

		//if(!response && message == '') this.message = 'Ocurrió un error inesperado';
		if(response && message == '') this.message = '';
	}

	setResult(result = [])
	{
		this.result = result;
	}

	setRowCount(rowCount = 0)
	{
		this.rowCount = rowCount;
	}

	getRowCount()
	{
		return this.rowCount;
	}
}

module.exports = new ResponseData;


