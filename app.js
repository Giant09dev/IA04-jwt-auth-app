const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DATABASE_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
