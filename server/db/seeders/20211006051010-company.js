module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [
      {
        id: '2qVZQ5g23R',
        title: 'Почта России',

      },
      {
        id: 'ebDFCJ45OF',
        title: 'Apple inc.',

      },
      {
        id: 'k8WMC-45Gc',
        title: 'Google',

      },
      {
        id: 'Ma45Yp9oK9',
        title: 'Yandex',

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
    await queryInterface.bulkDelete('Companies', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
