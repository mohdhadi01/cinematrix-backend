import express from "express";
import moviesRouter from "./routes/movies";
import tvShowsRouter from "./routes/tvShows";
import connectToDatabase from "./DBconnect";
import caraouselRouter from "./routes/Carousel";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

connectToDatabase();

app.use("/movies", moviesRouter);
app.use("/tv-shows", tvShowsRouter);
app.use("/get-carousel", caraouselRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
