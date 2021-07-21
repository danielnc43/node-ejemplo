const env = process.env;

const config = {
	database: {
		dbDev: { 
			host: env.DB_HOST || 'developdb.....',
				user: env.DB_USER || 'man',
				password: env.DB_PASSWORD || '#$F93FV67',
				database: env.DB_NAME || 'control',
				connectionLimit : 10
		}
	},
  listPerPage: env.LIST_PER_PAGE || 10,
  SECRET_JWT: env.SECRET_JWT || 'fmE.h&M6[~q%MP',
};

module.exports = config;
