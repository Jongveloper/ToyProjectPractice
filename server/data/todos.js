import SQ from 'sequelize';
import { sequelize } from '../db/database.js';

const Sequelize = SQ.Sequelize;
const DataTypes = SQ.Sequelize;

const Todo = sequelize.define('todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  todo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const ORDER_DESC = {
  order: [['createdAt', 'DESC']],
};

export async function getById(id) {
  return Todo.findOne({ where: { id } });
}

export async function getAll() {
  return Todo.findAll({ ...ORDER_DESC, raw: true });
}

export async function create(text) {
  return Todo.create({ text }).then((data) => this.getById(data.dataValues.id));
}

export async function remove(id) {
  return Todo.findByPk(id).then((todo) => todo.destroy());
}
