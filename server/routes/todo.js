const { Router } = require('express');
const {
  getAllTodos,
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo
} = require('../controller/todo');

const router = Router();

router.route('/').get(getAllTodos).post(createTodo);
router.route('/:id').get(getTodo).delete(deleteTodo).put(updateTodo);

module.exports = router;
