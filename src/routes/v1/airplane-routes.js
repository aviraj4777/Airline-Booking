const express = require('express');
const {AirplaneMiddlewares} = require('../../middlewares');
const { AirplaneController } = require('../../controllers');

const Router = express.Router();

Router.post('/',AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

module.exports = Router;