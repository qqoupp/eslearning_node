"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LPInstruction", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      learningPathId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "LearningPath",
          key: "id",
        },
      },
      step:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      solution: {
        type: Sequelize.TEXT,
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
