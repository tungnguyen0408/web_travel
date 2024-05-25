"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DetailTours extends Model {
    static associate(models) {
      this.belongsToMany(models.TourDestination, {
        through: "DetailToursTourDestinations",
        foreignKey: "DetailTourId",
      });
    }
  }
  DetailTours.init(
    {
      id_tour: DataTypes.INTEGER,
      name_tour: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.STRING,
      origin_price: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      id_agency: DataTypes.INTEGER,
      image_1: DataTypes.STRING,
      image_2: DataTypes.STRING,
      image_3: DataTypes.STRING,
      information_tour_1: DataTypes.STRING,
      information_tour_2: DataTypes.STRING,
      information_tour_3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DetailTours",
    }
  );
  return DetailTours;
};
