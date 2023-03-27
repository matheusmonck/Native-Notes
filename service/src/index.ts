import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/tasks', (req, res) => {
  const tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ];

  res.json(tasks);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
