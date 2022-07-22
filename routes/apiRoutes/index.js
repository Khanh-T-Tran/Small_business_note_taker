const router = require('express').Router();
const noteRoutes = require('./notes');

router.get('/notes',noteRoutes)







module.exports = router;


