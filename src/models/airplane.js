"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          max: 1000
        }
      },
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  );
  return Airplane;
};

// Models file will be created for each model you have in your project. And it will be limited to only JavaScript files, not the Database.
// Migration files will be created for each migration you have in your project. And the changes will reflect to the database.
// And by doing this, we can maintain the version of database. And we can also rollback the changes if needed.
