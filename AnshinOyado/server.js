import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("getting data there");
});

app.listen(8080, () => {
  console.log("listening data here");
});
