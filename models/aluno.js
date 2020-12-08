'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {foreignKey: 'id_usuario', as: 'usuario'})
    }
  }
  
  Aluno.init({
    matricula: DataTypes.STRING,
    av1: DataTypes.FLOAT,
    av2: DataTypes.FLOAT,
    av3: DataTypes.FLOAT,
    id_usuario: {type: DataTypes.INTEGER, allowNull: false},
    createdAt: { type: DataTypes.DATE, field: 'criado_em' },
    updatedAt: { type: DataTypes.DATE, field: 'atualizado_em' },
    deletedAt: { type: DataTypes.DATE, field: 'deletado_em' }
  }, {
    sequelize,
    modelName: 'Aluno',
    tableName: 'alunos'
  });
  return Aluno;
};