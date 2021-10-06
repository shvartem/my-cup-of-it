const { nanoid } = require('nanoid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Meets', [
      {
        id: 'bCko3HJhVm',
        interviewerId: '2qVZQ5gh2R',
        mentorId: 'ebDFCJPBOF',
        date: '04.10.2021 15:00',
        comment: 'завалимся в бар',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd0zpm7Wtrt',
        interviewerId: 'k8WMC-DRGc',
        mentorId: 'MaDbYp9oK9',
        date: '07.10.2021 19:00',
        comment: 'подымим в кальянке',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Meets', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
