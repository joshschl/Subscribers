var router = require('express').Router();

// load all api endpoints under /api
router.use('/api', require('./api'));

module.exports = router;