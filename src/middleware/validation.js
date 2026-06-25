// ============================================
// MIDDLEWARE: Validation functions
// ============================================

// Validate POST request has "task" field
const validateTodo = (req, res, next) => {
  const { task } = req.body;
  if (!task || task.trim() === '') {
    return res.status(400).json({
      error: "Task field is required and cannot be empty"
    });
  }
  next();
};

// Validate ID parameter is a number
const validateId = (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      error: "Invalid ID format. ID must be a positive number"
    });
  }
  req.validatedId = id;
  next();
};

module.exports = {
  validateTodo,
  validateId
};