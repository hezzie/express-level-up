import Express from "express";

const app = Express();

app.get("/", (req, res) => {
  res.status(200).json({
    hello: "Hello people"
  });
});

app.listen(3000, () => console.log("Hello world"));
