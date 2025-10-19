import router from "./routes/hello.js";
import express from "express";

//create express app
const app = express();
//create a route for "/"
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/hello", router);

//app listen on port 3000
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
