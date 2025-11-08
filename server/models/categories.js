let mongoose = require("mongoose");

let categorySchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { versionKey: false }
);
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
