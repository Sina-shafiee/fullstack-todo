const { Router } = require('express');
const { getAllTodos, createTodo } = require('../controller/todo');

const router = Router();

router.route('/').get(getAllTodos).post(createTodo);

module.exports = router;
