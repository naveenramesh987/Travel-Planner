const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const Test = mongoose.model("Test", new mongoose.Schema({ msg: String }));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/api/mongo-test", async (req, res) => {
  const testDoc = new Test({ msg: "Hello, MongoDB!" });
  await testDoc.save();
  res.json({ success: true, data: testDoc });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
