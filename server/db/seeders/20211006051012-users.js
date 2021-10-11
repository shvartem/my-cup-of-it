module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: '206802',
        firstname: 'Martin',
        lastname: 'Scorsese',
        email: 'martin@amail.biz',
        password: '$2a$10$JrxOllv.pb7XF4NLE35CO.Zlt9/Fw9HZrQuErDnLCmnU0dqG/plZe',
        description: 'React, Node.js, Postgres, typescript',
        isMentor: true,
        careerStart: '01.04.2020',
        companyId: '2qVZQ5g23R',
        isActive: true,
        userPhoto: 'https://i1.sndcdn.com/artworks-000668037946-sxtf5b-t500x500.jpg',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        id: '537982',
        firstname: 'Артур',
        lastname: 'Пирожков',
        email: 'archie@mail.ru',
        password: '$2a$10$bRmTM4D7S/awhB4G.1HYRe2LL99n7DqmcOHly/f3J1YRZSSnUdpEC',
        description: 'Proactive variability checker',
        isMentor: true,
        careerStart: '01.04.2020',
        companyId: '2qVZQ5g23R',
        isActive: true,
        userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KEvqvnEPoyufATZF3QinNk6oDCXMvVoVQg&usqp=CAU,',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        id: '145976',
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
        id: '365742',
        firstname: 'Patricia',
        lastname: 'Lebsack',
        email: 'Julianne.OConner@kory.org',
        password: '$2a$10$NHNDDmmhz/FXIBvZ4uXVNeT19Hl6VB01hQNSnFwx./EptJ79DSDSa',
        description: 'Multi-tiered zero tolerance productivity',
        isMentor: true,
        careerStart: '02.08.2014',
        companyId: 'ebDFCJ45OF',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
