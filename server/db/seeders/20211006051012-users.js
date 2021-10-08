module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: '2qVZQ5',
        firstname: 'Leanne',
        lastname: 'Graham',
        email: 'Sincere@april.biz',
        password: '$2a$10$JrxOllv.pb7XF4NLE35CO.Zlt9/Fw9HZrQuErDnLCmnU0dqG/plZe',
        description: 'Multi-layered client-server neural-net',
        isMentor: false,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        id: 'ebDFCJ',
        firstname: 'Ervin',
        lastname: 'Howell',
        email: 'Shanna@melissa.tv',
        password: '$2a$10$bRmTM4D7S/awhB4G.1HYRe2LL99n7DqmcOHly/f3J1YRZSSnUdpEC',
        description: 'Proactive didactic contingency',
        isMentor: true,
        careerStart: '01.04.2020',
        company: 'Почта России',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        id: 'k8WMCD',
        firstname: 'Clementine',
        lastname: 'Bauch',
        email: 'Nathan@yesenia.net',
        password: '$2a$10$0uOyE5mcB88GTuPglC.g6u79Otc/xuhxGpEF2LsSt6kj3rBlpXMHC',
        description: 'Face to face bifurcated interface',
        isMentor: false,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        id: 'MaDbYp',
        firstname: 'Patricia',
        lastname: 'Lebsack',
        email: 'Julianne.OConner@kory.org',
        password: '$2a$10$NHNDDmmhz/FXIBvZ4uXVNeT19Hl6VB01hQNSnFwx./EptJ79DSDSa',
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
