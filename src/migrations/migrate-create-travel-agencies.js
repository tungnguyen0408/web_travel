"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("travel_agencies", {
      id_agency: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name_vi: {type:Sequelize.STRING},
      name_en: {type:Sequelize.STRING},
      license_number :{type:Sequelize.STRING},
      phonenumber:{type:Sequelize.STRING},
      email:{type:Sequelize.STRING},
      address_agency:{type:Sequelize.STRING},
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
    await queryInterface.dropTable("travel_agencies");
  },
};