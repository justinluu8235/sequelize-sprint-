'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobListingsApplicants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  JobListingsApplicants.init({
    JobListingId: DataTypes.INTEGER,
    ApplicantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobListingsApplicants',
  });
  return JobListingsApplicants;
};