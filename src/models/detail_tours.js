"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DetailTour extends Model {
    static associate(models) {
      this.belongsTo(models.Travel_agency, { foreignKey: "id_agency" });

      this.belongsToMany(models.TourDestination, {
        through: "DetailToursTourDestination",
        foreignKey: "DetailTourId",
      });
      this.hasMany(models.Feedback);
    }
  }
  DetailTour.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name_tour: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.STRING,
      origin_price: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      id_agency: DataTypes.INTEGER,
      image_1: DataTypes.STRING,
      image_2: DataTypes.STRING,
      image_3: DataTypes.STRING,
      information_destination_2: DataTypes.STRING,
      information_destination_2: DataTypes.STRING,
      information_destination_2: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DetailTour",
    }
  );
  return DetailTour;
};
