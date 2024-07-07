import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', routes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../client/build')));

// The "catchall" handler: for any request that doesn't match the above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
