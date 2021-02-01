module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('images', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    original_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    file_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'alunos',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),

  down: async (queryInterface) => queryInterface.dropTable('Alunoimages'),
};
