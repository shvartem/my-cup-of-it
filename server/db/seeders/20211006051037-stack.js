const { nanoid } = require('nanoid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stacks', [
      {
        id: '0p_0DLcztR',
        userId: 'ebDFCJPBOF',
        technologyId: '0KXCe8xWmD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '-6dEXoVQR7',
        userId: 'ebDFCJPBOF',
        technologyId: 'IkwcmqkuNv',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'BdD-9M7IP-',
        userId: 'MaDbYp9oK9',
        technologyId: 'NDkWzcWQRt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e4geK16Rlf',
        userId: 'MaDbYp9oK9',
        technologyId: 'l1BoZEH7FO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'FI9rkWsxcG',
        userId: 'MaDbYp9oK9',
        technologyId: 'zcHv3xT8KU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'n2O57sEwr-',
        userId: 'MaDbYp9oK9',
        technologyId: 'ZiC0po-HCm',
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
    await queryInterface.bulkDelete('Stacks', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
