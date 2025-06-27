const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

// Serve static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route for landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
