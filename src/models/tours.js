"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DetailToursTourDestinations extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ ở đây nếu cần
    }
  }
  DetailToursTourDestinations.init(
    {
      DetailTourId: {
        type: DataTypes.INTEGER,
        references: {
          model: "detail_tours",
          key: "id",
        },
      },
      TourDestinationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "tour_destinations",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "DetailToursTourDestinations",
    }
  );
  return DetailToursTourDestinations;
};
