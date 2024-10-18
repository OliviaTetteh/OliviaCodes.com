const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Example route for fetching projects
app.get('/api/projects', (req, res) => {
  const projects = [
    { id: 1, name: 'Olive Blog App', description: 'A blogging platform' },
    { id: 2, name: 'Adziban', description: 'African recipe sharing website' }
  ];
  res.json(projects);
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});

