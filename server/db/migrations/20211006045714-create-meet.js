module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Meets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      interviewerId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
        },
      },
      mentorId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
        },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Meets');
  },
};
