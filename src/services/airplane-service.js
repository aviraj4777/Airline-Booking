const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const airplaneRepository = new AirplaneRepository();


async function createAirplane(data) {
    try {
        return await airplaneRepository.create(data);
    } catch (error) {
        // console.log(error.name);
        if (error.name == "TypeError") {
              throw new AppError("Cannot create airplane", StatusCodes.INTERNAL_SERVER_ERROR);
        }
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

module.exports = { createAirplane };