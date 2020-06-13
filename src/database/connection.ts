import { Sequelize } from 'sequelize';
import path from 'path';

export default new Sequelize(
  {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, 'database.sqlite'),
  },
);
