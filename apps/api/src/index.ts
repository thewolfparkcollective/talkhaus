import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (_req, res) => {
  res.json({ message: "Welcome to the Talk Haus API!" });
});

app.listen(port, () => {
  console.log(`Talk Haus API listening at http://localhost:${port}`);
});
