const Todo = require('../model/todo');

exports.getAllTodos = async (req, res) => {
  try {
    const todoList = await Todo.find({});
    res.status(200).json(todoList);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ _id: id });

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.createTodo = async (req, res) => {
  const { title, isCompleted } = req.body;
  try {
    const todo = await Todo.create({ title, isCompleted });

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id, { new: false });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, isCompleted } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, isCompleted },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
