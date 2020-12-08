'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricula: {
        type: Sequelize.STRING
      },
      av1: {
        type: Sequelize.FLOAT
      },
      av2: {
        type: Sequelize.FLOAT
      },
      av3: {
        type: Sequelize.FLOAT
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      createdAt: {
        field: 'criado_em',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'atualizado_em',
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        field: 'deletado_em',
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alunos');
  }
};