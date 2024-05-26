"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DetailTours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_tour: { type: Sequelize.STRING },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      time: { type: Sequelize.STRING },
      origin_price: { type: Sequelize.DOUBLE },
      price: { type: Sequelize.DOUBLE },
      id_agency: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Travel_agencies", // Tên bảng chứa trường khóa chính
          key: "id", // Tên trường khóa chính trong bảng DetailTours
        },
      },
      image_1: { type: Sequelize.STRING },
      image_2: { type: Sequelize.STRING },
      image_3: { type: Sequelize.STRING },
      information_destination_1: { type: Sequelize.STRING },
      information_destination_2: { type: Sequelize.STRING },
      information_destination_3: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DetailTours");
  },
};
