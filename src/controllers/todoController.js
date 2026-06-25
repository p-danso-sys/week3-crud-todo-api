// ============================================
// CONTROLLER: Business logic
// ============================================

const todoModel = require('../models/todoModel');

// Get all todos
const getAllTodos = (req, res) => {
  try {
    const todos = todoModel.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get single todo
const getTodoById = (req, res) => {
  try {
    const id = req.validatedId;
    const todo = todoModel.getTodoById(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get active todos (BONUS)
const getActiveTodos = (req, res) => {
  try {
    const activeTodos = todoModel.getActiveTodos();
    res.json(activeTodos);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create todo
const createTodo = (req, res) => {
  try {
    const { task } = req.body;
    const newTodo = todoModel.createTodo(task);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update todo
const updateTodo = (req, res) => {
  try {
    const id = req.validatedId;
    const { task, completed } = req.body;
    const updatedTodo = todoModel.updateTodo(id, { task, completed });
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete todo
const deleteTodo = (req, res) => {
  try {
    const id = req.validatedId;
    const deleted = todoModel.deleteTodo(id);
    if (!deleted) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  getActiveTodos,
  createTodo,
  updateTodo,
  deleteTodo
};