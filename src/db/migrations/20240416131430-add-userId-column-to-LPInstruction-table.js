'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('LPInstruction', 'userId', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('LPInstruction', 'userId');
  }
};
