module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: '2qVZQ5gh2R',
        firstname: 'Leanne',
        lastname: 'Graham',
        email: 'Sincere@april.biz',
        password: 'Leanne',
        description: 'Multi-layered client-server neural-net',
        isMentor: false,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        id: 'ebDFCJPBOF',
        firstname: 'Ervin',
        lastname: 'Howell',
        email: 'Shanna@melissa.tv',
        password: 'Ervin',
        description: 'Proactive didactic contingency',
        isMentor: true,
        careerStart: '01.04.2020',
        company: 'Почта России',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        id: 'k8WMC-DRGc',
        firstname: 'Clementine',
        lastname: 'Bauch',
        email: 'Nathan@yesenia.net',
        password: 'Clementine',
        description: 'Face to face bifurcated interface',
        isMentor: false,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        id: 'MaDbYp9oK9',
        firstname: 'Patricia',
        lastname: 'Lebsack',
        email: 'Julianne.OConner@kory.org',
        password: 'Patricia',
        description: 'Multi-tiered zero tolerance productivity',
        isMentor: true,
        careerStart: '02.08.2014',
        company: 'Apple inc.',
        // createdAt: new Date(),
        // updatedAt: new Date(),
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
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
