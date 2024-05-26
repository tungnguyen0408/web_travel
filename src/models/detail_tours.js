"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DetailTours extends Model {
    static associate(models) {
      this.belongsTo(models.travel_agencies, { foreignKey: "id_agency" });

      this.belongsToMany(models.TourDestination, {
        through: "DetailToursTourDestinations",
        foreignKey: "DetailTourId",
      });
      this.hasMany(models.Feedback);
    }
  }
  DetailTours.init(
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
