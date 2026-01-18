const express = require("express");
const cors = require("cors");
const items = require("./items.json");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/items", (req, res) => {
  res.status(200).json(items);
});

app.get("/items/:id", (req, res) => {
  const { id } = req.params;

  const item = items.find(i => i.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({
      error: true,
      message: "Item not found",
    });
  }

  // 🔒 Always send valid JSON
  return res.status(200).json(item);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
