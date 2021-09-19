import Mongoose from 'mongoose';
import { useVirtualId } from '../db/database.js';

const todoSchema = new Mongoose.Schema(
  {
    contents: { type: String, required: true },
  },
  { timestamps: true }
);

useVirtualId(todoSchema);
const Todo = Mongoose.model('Todo', todoSchema);

export async function getAll() {
  return Todo.find().sort({ createdAt: -1 });
}

export async function getById(id) {
  return Todo.findById(id);
}

export async function create(contents) {
  return new Todo({
    contents,
  }).save();
}

export async function remove(id) {
  return Todo.findByIdAndDelete(id);
}
