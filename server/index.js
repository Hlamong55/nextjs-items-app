const express = require("express");
const cors = require("cors");
const items = require("./items.json");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === req.params.id);
  res.json(item);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
