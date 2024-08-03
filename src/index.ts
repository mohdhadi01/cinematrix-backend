import express from 'express';
import moviesRouter from './routes/movies';
import tvShowsRouter from './routes/tvShows';
import connectToDatabase from './DBconnect';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

// Connect to the database
connectToDatabase();

// Middleware and routes setup here
app.use('/movies', moviesRouter);
app.use('/tv-shows', tvShowsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
