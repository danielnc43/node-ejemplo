const { Router } = require('express');
const {_get} = require('../controllers/usuarios.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const router = Router();

router.get('/',auth(Role.Admin), awaitHandlerFactory(_get)); 

module.exports = router;


