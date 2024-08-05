import express from 'express';
import moviesRouter from './routes/movies';
import tvShowsRouter from './routes/tvShows';
import connectToDatabase from './DBconnect';
require('dotenv').config();

const app = express();
const port = process.env.PORT ;

app.use(express.json()); 


connectToDatabase();


app.use('/movies', moviesRouter);
app.use('/tv-shows', tvShowsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
