module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Meets', [
      {
        id: 'bCko3HJhVm',
        interviewerId: '206802',
        mentorId: '365742',
        date: '04.10.2021 15:00',
        comment: 'завалимся в бар',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd0zpm7Wtrt',
        interviewerId: '145976',
        mentorId: '365742',
        date: '07.10.2021 19:00',
        comment: 'подымим в кальянке',
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b73c401b5c',
        interviewerId: '206802',
        mentorId: '365742',
        date: '12-10-2021 19:00',
        comment: 'покатаемся на метро',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd0zpm7W4rt',
        interviewerId: '145976',
        mentorId: '365742',
        date: '07.10.2021 19:00',
        comment: 'подымим в кальянке',
        status: 'cancelled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b73c401b53',
        interviewerId: '206802',
        mentorId: '365742',
        date: '12-10-2021 19:00',
        comment: 'покатаемся на метро',
        status: 'accepted',
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
