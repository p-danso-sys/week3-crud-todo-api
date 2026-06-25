// ============================================
// MODEL: Data layer - handles all database operations
// ============================================

const fs = require('fs');
const path = require('path');

// Path to our JSON data file
const dataPath = path.join(__dirname, '../../data/todos.json');

// Helper: Read todos from file
const readTodosFromFile = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Helper: Write todos to file
const writeTodosToFile = (todos) => {
  fs.writeFileSync(dataPath, JSON.stringify(todos, null, 2), 'utf8');
};

// Get all todos
const getAllTodos = () => {
  return readTodosFromFile();
};

// Get one todo by ID
const getTodoById = (id) => {
  const todos = readTodosFromFile();
  return todos.find(todo => todo.id === id);
};

// Create new todo
const createTodo = (task) => {
  const todos = readTodosFromFile();
  const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
  const newTodo = {
    id: maxId + 1,
    task: task,
    completed: false
  };
  todos.push(newTodo);
  writeTodosToFile(todos);
  return newTodo;
};

// Update todo
const updateTodo = (id, updates) => {
  const todos = readTodosFromFile();
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return null;
  if (updates.task !== undefined) todos[index].task = updates.task;
  if (updates.completed !== undefined) todos[index].completed = updates.completed;
  writeTodosToFile(todos);
  return todos[index];
};

// Delete todo
const deleteTodo = (id) => {
  const todos = readTodosFromFile();
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  writeTodosToFile(todos);
  return true;
};

// Get active todos (bonus)
const getActiveTodos = () => {
  const todos = readTodosFromFile();
  return todos.filter(todo => todo.completed === false);
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getActiveTodos
};