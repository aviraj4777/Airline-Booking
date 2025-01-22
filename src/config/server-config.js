const dotenv = require('dotenv');

dotenv.config(); //It will load all the environment variables from the .env file into proccess.env

module.exports = { 
    PORT: process.env.PORT || 3000
}