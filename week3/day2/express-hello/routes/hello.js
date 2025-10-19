// routes/hello.js using ES module syntax
import express from "express";

const router = express.Router();

// GET /hello
router.get("/", (req, res) => {
  res.send("pong");
});

//To export the router
export default router;
