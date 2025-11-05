const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.DB_CONNECTION_STRING;

// Example usage: connect to MongoDB
const connectDB = () =>
  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

module.exports = connectDB;
