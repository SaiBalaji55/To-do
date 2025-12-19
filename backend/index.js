const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
