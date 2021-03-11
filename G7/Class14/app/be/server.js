const express = require("express");

const app = express();
const port = 3000;

const obj = {
  name: "John",
  job: "Developer",
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/", (req, res) => {
  console.log("GET was called");
  res.send(JSON.stringify(obj));
});

app.post("/", (req, res) => {
  console.log("POST was called", req);
  res.send(JSON.stringify(obj));
});

app.put("/user", (req, res) => {
  console.log("PUT was called");
  res.send(JSON.stringify({ message: "All good" }));
});

app.delete("/user/delete", (req, res) => {
  console.log("DELETE was called");
  res.send(JSON.stringify({ message: "User deleted" }));
});

app.listen(port, () => {
  console.log("Server started listening on port http://localhost:" + port);
});
