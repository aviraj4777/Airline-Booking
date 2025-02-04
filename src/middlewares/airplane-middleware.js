const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, AppError } = require("../utils");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating Airplane";
    ErrorResponse.error = new AppError("Model Number is required", StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
    validateCreateRequest
};
