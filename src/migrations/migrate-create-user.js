"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      phonenumber: { type: Sequelize.STRING },
      gender: { type: Sequelize.BOOLEAN },
      avatar: { type: Sequelize.STRING },
      permission: { type: Sequelize.TINYINT },
      state: { type: Sequelize.TINYINT },
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
    await queryInterface.dropTable("Users");
  },
};
