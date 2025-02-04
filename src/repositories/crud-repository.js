const { where } = require("sequelize");
const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) { // data is an object contains {col: value, ....}
    // try {
    //   return await this.model.create(data);
    // } catch (error) {
    //   Logger.error("Something went wrong in the CrudRepository.create method");
    //   throw error;
    // }
    return await this.model.create(data);
  }

  async destroy(data) {
    try {
      return await this.model.destroy({
        where: {
          id: data,
        },
      });
    } catch (error) {
      Logger.error("Something went wrong in the CrudRepository.destroy method");
      throw error;
    }
  }

  async get(data) {
    try {
      return await this.model.findByPk(data);
    } catch (error) {
      Logger.error("Something went wrong in the CrudRepository.get method");
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
      Logger.error("Something went wrong in the CrudRepository.getAll method");
      throw error;
    }
  }

  async update(id, data) {
    try {
      return await this.model.update(data, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      Logger.error("Something went wrong in the CrudRepository.update method");
      throw error;
    }
  }
};

module.exports = CrudRepository;
