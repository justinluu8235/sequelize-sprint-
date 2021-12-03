'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.JobListing.belongsToMany(models.Applicant, {through:'JobListingsApplicants'})
    }
  };
  JobListing.init({
    role: DataTypes.STRING,
    department: DataTypes.STRING,
    postDate: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    favorited: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobListing',
  });
  return JobListing;
};