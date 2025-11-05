let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    allowOthersSeeOrders: { type: Boolean, default: false },
  },
  { versionKey: false }
);
const User = mongoose.model("User", userSchema, "Users");
module.exports = User;
