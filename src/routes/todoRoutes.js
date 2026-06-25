// ============================================
// ROUTES: Endpoint definitions
// ============================================

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { validateTodo, validateId } = require('../middleware/validation');

// GET /todos - Get all
router.get('/', todoController.getAllTodos);

// GET /todos/active - Get active (BONUS)
router.get('/active', todoController.getActiveTodos);

// GET /todos/:id - Get one
router.get('/:id', validateId, todoController.getTodoById);

// POST /todos - Create (with validation)
router.post('/', validateTodo, todoController.createTodo);

// PUT /todos/:id - Update
router.put('/:id', validateId, todoController.updateTodo);

// DELETE /todos/:id - Delete
router.delete('/:id', validateId, todoController.deleteTodo);

module.exports = router;