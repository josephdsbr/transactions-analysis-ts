import { Sequelize } from "sequelize";
import { Model, INTEGER } from 'sequelize';
import sequelize from '../../database/connection';
class Purchase extends Model {}

Purchase.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cre
},
{
  sequelize,
  modelName: 'purchase',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at'
})