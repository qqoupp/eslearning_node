"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Token", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      token: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
