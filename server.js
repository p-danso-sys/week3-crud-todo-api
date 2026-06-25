// ============================================
// SERVER: Entry point
// ============================================

const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log('📝 Available endpoints:');
  console.log('   GET    /todos           - Get all');
  console.log('   GET    /todos/:id       - Get one');
  console.log('   GET    /todos/active    - Get active (BONUS)');
  console.log('   POST   /todos           - Create (requires "task")');
  console.log('   PUT    /todos/:id       - Update');
  console.log('   DELETE /todos/:id       - Delete');
  console.log('\n🔍 Test with: curl http://localhost:3000/todos');
});