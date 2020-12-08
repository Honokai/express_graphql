'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Usuario.init({
    nome: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, field: 'criado_em' },
    updatedAt: { type: DataTypes.DATE, field: 'atualizado_em' },
    deletedAt: { type: DataTypes.DATE, field: 'deletado_em' }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios'
  })

  return Usuario;
};