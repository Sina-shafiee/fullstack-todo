const Todo = require('../model/todo');

exports.getAllTodos = async (req, res) => {
  try {
    const todoList = await Todo.find({});
    res.status(200).json(todoList);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.createTodo = async (req, res) => {
  const { title, isCompleted } = req.body;

  try {
    const todo = Todo.create({ title, isCompleted });

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
