"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Token", "token", {
      type: Sequelize.STRING(512),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Token", "token", {
      type: Sequelize.STRING(255),
      allowNull: false,
    });
  },
};
