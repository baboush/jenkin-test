import express from "express";
import { addMovie } from "./services/catalogue-service.js";
const { getAllMovie } = import("./services/catalogue-service.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3002;
app.get("/", async (req, res) => {
  const values = await getAllMovie();
  res.send(values);
});

app.post("/add", async (req, res) => {
  const data = req.body;

  const response = await addMovie(data);

  res.json({ res: response });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
