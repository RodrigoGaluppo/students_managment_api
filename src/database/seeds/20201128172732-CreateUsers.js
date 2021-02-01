const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      name: 'Wennedes Carlos',
      email: 'wennedes@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      name: 'Wennedes Carlos3',
      email: 'wennedes@gmail.com3',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      name: 'Wennedes Carlos2',
      email: 'wennedes@gmail.com2',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
  ], {}),

  down: async () => {

  },
};
