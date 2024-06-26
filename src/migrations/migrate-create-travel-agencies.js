"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Travel_agencies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_vi: { type: Sequelize.STRING },
      name_en: { type: Sequelize.STRING },
      license_number: { type: Sequelize.STRING },
      phonenumber: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      address_agency: { type: Sequelize.STRING },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Travel_agencies");
  },
};
