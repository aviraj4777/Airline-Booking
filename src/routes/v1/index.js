const express = require('express');
const { InfoController } = require('../../controllers');
const airPlaneRoutes = require('./airplane-routes');

const router = express.Router();

router.use('/airplanes', airPlaneRoutes);

// app.get() -> This method is used to get the information from the server. It is a express method.
router.get('/info', InfoController.info);

module.exports = router;