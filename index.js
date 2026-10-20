import express from 'express';

const app = express();

app.get('/', (req, res) => {
  // res.send('Hello, World from docker!');
  res.json({ message: 'Hello, World from docker! from prince' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
