module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: '2qVZQ5',
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
        id: 'ebDFCJ',
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
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
